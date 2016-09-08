$.material.init();

// setting comments_shortname
var duoshuoQuery = {short_name:""};
var disqus_shortname = '';
var duoshuoShare = false;
var swiftypekey = '';

jQuery(function($) {
    // duoshuo
	function duoshuo() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';
        ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
	}

    // disqus
    var disqus_identifier = '{{post.id}}';
    function disqus() {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }

	// swiftype
	function swiftype() {
		(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
	  	(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
		e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
		})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
		_st('install', swiftypekey,'2.0.0');
	}

    if (duoshuoShare) {
        $(".ds-share").css({'display': 'block'});
    }

	if (swiftypekey !== "") {
		swiftype();
		$(".searchbar").css({'display': 'block'});
	}

    if (duoshuoQuery.short_name !== "" ){
        duoshuo();
        $(".ds-thread").css({'display': 'block'});
    }
    else if (disqus_shortname !== "") {
        disqus();
        $("#disqus_thread").css({'display': 'block'});
    }
    else {
        $(".context-comments").css({'display': 'none'});
    }
});

window.onload = function(){
	// 魔法的 <!--more--> tag
	// Usage: insert a <!--more--> tag to your content
	$(".post-excerpt").each(function(){
		var full_excerpt = $(this).html();
		var slim_excerpt = full_excerpt.split("<!--more-->");
		if (slim_excerpt.length > 1) {
			$(this).html(slim_excerpt[0]);
			$(this).next(".read-more").css({'display': 'block'});
		}
	});

    $(function() {
        $('audio').audioPlayer();
    });
};
