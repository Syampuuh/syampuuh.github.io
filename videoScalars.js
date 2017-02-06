	function autoscaleVideo(){
		if (window.innerHeight < window.innerWidth) {
			document.getElementById("webmLoop").height = ( window.innerHeight - 100 )
		} else {
			document.getElementById("webmLoop").width = window.innerWidth - 40;
		}
		window.scrollTo(0,document.body.scrollHeight);
	}

	function deviceCheck(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {	//http://stackoverflow.com/a/3540295
			document.getElementById("webmLoop").src = halfRes;
			currentRes = 720;
		} else {
			if (screen.width <= 1280) {
				document.getElementById("webmLoop").src = halfRes;
				currentRes = 720;
			} else {
				document.getElementById("webmLoop").src = fullRes;
				currentRes = 1440;
			}
		}
		if (window.innerHeight < window.innerWidth) {
			document.getElementById("webmLoop").height = ( window.innerHeight - 100 )
		} else {
			document.getElementById("webmLoop").width = window.innerWidth - 40;
		}
		window.scrollTo(0,document.body.scrollHeight);
	}
	
	function force720(){
		document.getElementById("webmLoop").src = halfRes;
		currentRes = 720;
	}
	
	function force1440(){
		document.getElementById("webmLoop").src = fullRes;
		currentRes = 1440;
	}
	
	function nativeRes(){
		document.getElementById("webmLoop").height = currentRes;
		window.scrollTo(0,document.body.scrollHeight);
	}	function autoscaleVideo(){
		if (window.innerHeight < window.innerWidth) {
			document.getElementById("webmLoop").height = ( window.innerHeight - 100 )
		} else {
			document.getElementById("webmLoop").width = window.innerWidth - 40;
		}
		window.scrollTo(0,document.body.scrollHeight);
	}