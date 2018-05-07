#!/usr/bin/env bash

# --- Best practices to manage errors ---
set -o errexit
trap 'echo "Aborting due to errexit on line $LINENO. Exit code: $?" >&2' ERR
set -o errtrace
set -o nounset

###############################################################################
# By Pascal Andy https://pascalandy.com/blog/now/

###############################################################################
# Functions

function fct_update_submodule {

    # checkout desired branch
    git checkout master

    # update
    git pull

    # get back to your project root
    cd "$ROOT_PROJECT"

    # now the submodules are in the state you want, so
    git commit -am "Pulled down update from the submodule"
    sleep 2;
}

ROOT_PROJECT=$(pwd)
 
# change to the submodule directory

SUBMODULES_LIST=(DummyItem FirePress_Attila FirePress_Simply)
SUBMODULES_COUNT=2

export MIN=1
export MAX="$SUBMODULES_COUNT";

for ACTION in $(seq $MIN $MAX); do
    cd ${SUBMODULES_LIST[$ACTION]};
    pwd; sleep 1;
    fct_update_submodule;
done





