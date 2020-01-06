document.addEventListener('DOMContentLoaded',function () {
	console.log('Loaded');
	txt = "#keeploopin";
	loop_txt = document.querySelector("#typewrite");
	i = 0;
	function dp(){
		if(i < txt.length){
			loop_txt.innerHTML = loop_txt.innerHTML + txt.charAt(i);
			console.log('Hello');
			i++;
			setTimeout(dp,200);
		}
		else if(i == txt.length){
			loop_txt.innerHTML = "";
			i = 0;
			setTimeout(dp,200);
		}
	}
	dp();
	
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