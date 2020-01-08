document.addEventListener('DOMContentLoaded',function () {
	console.log('Loaded');
	txt = "#keeploopin";
	loop_txt = document.querySelector("#typewrite");
	
	function dp(){
		
		if(i < txt.length){
			loop_txt.innerHTML = loop_txt.innerHTML + txt.charAt(i);
			console.log('Hello');
			i++;
			setTimeout(dp,200);
		}
		/*else if(i == txt.length){
			loop_txt.innerHTML = "";
			i = 0;
			setTimeout(dp,200);
		}*/
	}
	i = 0;
	dp();
	setInterval(function(){
		i = 0;
		loop_txt.innerHTML = "";
		dp();
	},4000);
	
	console.log('yes');
	document.querySelector('#dropper').onclick = function(){
		console.log("OK");
		if(document.querySelector('#dropdown').style.display == 'block')
			document.querySelector('#dropdown').style.display = 'none';
		else{
			console.log("Hello");
			document.querySelector('#dropdown').style.display = 'block';
		}
	}
});