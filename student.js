var info = document.getElementById("student_table");
var clk = document.getElementById("btn");

function myFunction(){
	var req = new XMLHttpRequest();
	req.open('GET','https://akashchourasia.github.io/linkedin/student.json');
	req.onreadystatechange = function(){
	if (req.readyState == 4 && req.status == 200){
		var myObj = JSON.parse(req.responseText);
		console.log(myObj);
        renderHTML(myObj);			
	  }			
   };
   req.open('GET','https://akashchourasia.github.io/linkedin/student.json');
   req.send();
}
function renderHTML(myObj){
	var htmlstring = "";
	var i;
	for(i=0; i < myObj.length; i++){
		htmlstring = htmlstring + "<tr><td>"+myObj[i].Name;
	}
    if(i == myObj.length){
       document.getElementById("count").innerHTML = i;
       document.getElementById("btn").style.display = 'none';	   
	   document.getElementById("myInput").style.display = 'block';
	}
	info.insertAdjacentHTML('beforeend' , htmlstring);
} 
