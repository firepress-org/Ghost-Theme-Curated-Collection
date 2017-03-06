<?php
/*
Copyright 2010 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

require_once("../utils.inc");
require_once("../dbapi.inc");
require_once("batch_lib.inc");
require_once("bootstrap.inc");


////////////////////////////////////////////////////////////////////////////////
//
// Start a new run
//
////////////////////////////////////////////////////////////////////////////////

$gNumUrls = 0;
$gUrlsFile = null;
$gbUrlsFileSpecified = 0;
$gSublabel = "";
$gbImportUrls = ( $gbMobile ? 0 : 1 );
$gLocation = "";

parseParams();
checkForBatchRun();    // exit if there's already a batch run going
createTables();        // Create all the tables if they are not there.
if ( file_exists("batch.log") ) unlink("batch.log");   // remove log file

// Update the list of URLs from Alexa:
if ( $gbImportUrls ) {
	// TODO - Should we do this for $gbMobile too?????
	require_once("importurls.php");
}

// Empty the status table
removeAllStatusData();

// Load the next batch
// WARNING: Two runs submitted on the same day will have the same label.
$date = getdate();
$label = substr($date['month'], 0, 3) . " " . $date['mday'] . " " . $date['year'] . $gSublabel;

if ( $gUrlsFile && $gbUrlsFileSpecified ) {  // we set $gUrlsFile in importurls.php, so need a boolean to indicate if it was specified
	loadUrlsFromFile($label, $gUrlsFile);
}
else if ( $gNumUrls ) {
	loadUrlsFromDb($label, $gNumUrls, false);
}
else if ( $gbMobile ) {
	loadUrlsFromDB($label, 2000, false);
}
else {
	loadUrlsFromDB($label, 200000, true);
}

echo "DONE submitting batch run\n";






// Load the URLs in urls.txt file into status table.
function loadUrlsFromFile($label, $file=NULL) {
	$file = ( $file ? $file : ($gbMobile ? './urls.1000' : './urls.txt') );
	$urls = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

	foreach( $urls as $url ) {
		$url = trim($url);
		if( strlen($url) ) {
			loadUrl($label, $url);
		}
	}
}


// Load the URLs in urls.txt file into status table.
function loadUrlsFromDB($label, $numUrls, $bOther=false) {
	global $gUrlsTable;
	$query = "select urlOrig, urlFixed, rank from $gUrlsTable where (rank <= $numUrls" . ( $bOther ? " OR other=true" : "" ) . ")" .
		" and optout=false order by rank asc;";
	$result = doQuery($query);
	while ($row = mysql_fetch_assoc($result)) {
		$urlOrig = $row['urlOrig'];
		$urlFixed = $row['urlFixed'];
		loadUrl($label, ( $urlFixed ? $urlFixed : $urlOrig ), $row['rank']);
	}
}



// Submit the specified URL to all the locations.
function loadUrl($label, $url, $rank=NULL) {
	global $locations;

	foreach ( $locations as $location ) {
		addStatusData($url, $location, $label, $rank);
	}
}


// exit if there's already a batch run going
function checkForBatchRun() {
	global $locations;

	// A file lock to guarantee there is only one instance running.
	$fp = fopen(lockFilename($locations[0], "ALL"), "w+");

	if ( !flock($fp, LOCK_EX | LOCK_NB) ) {
		$pid = getPid("php batch_process.php");
		if ( 0 < $pid ) {
			echo "There's already a batch_process.php process running: $pid\nYou'll have to edit batch_start.php or kill that process yourself.\n";
			exit();
			// TODO - I guess the previous logic was to kill batch_process if batch_start was ever called.
			// That scares me. It's too easy to type the wrong thing.
			// killProcessAndChildren($pid);
		}
	}
}


function parseParams() {
	global $argv, $argc, $gSublabel, $gbImportUrls, $locations, $gUrlsFile, $gNumUrls;
	
	// if there are any options they MUST be in this order:
	//   # of URLs or URL file
	//   location
	//   1 or 0 for whether to import URLs
	//   sublabel
	for ( $i = 1; $i < $argc; $i++ ) {
		$val = $argv[$i];
		if ( 1 === $i ) {
			// # of URLs or URL file
			if ( file_exists($val) ) {
				$gUrlsFile = $val;
				$gbUrlsFileSpecified = 1;
			}
			else if ( 0 < intval($val) && $val === "" . intval($val) ) {
				$gNumUrls = $val;
			}
			else {
				echo "ERROR: Unexpected value for 'numurls|urlfile' parameter: $val\n";
				exit();
			}
		}
		else if ( 2 === $i ) {
			$locations = array($val);
		}
		else if ( 3 === $i ) {
			if ( "1" === $argv[3] ) {
				$gbImportUrls = true;
			}
			else if ( "0" === $argv[3] ) {
				$gbImportUrls = false;
			}
			else {
				echo "ERROR: Unexpected value for importUrls: '" . $argv[3] . "'.\n";
				exit();
			}
		}
		else if ( 4 === $i ) {
			// sublabel 
			$gSublabel = $val;
		}
	}
}

?>
