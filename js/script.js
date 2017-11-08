var pic

	function hoverover(pic){
		document.getElementById(pic.alt).innerHTML = pic.alt
	}
	function hovernot(pic){
		document.getElementById(pic.alt).innerHTML = ''	
	}