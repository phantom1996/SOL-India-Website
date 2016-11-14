$(document).ready(function(){        
    $('.modal').on('hidden.bs.modal', function (e) {
	document.getElementById("areafield").value="";
	document.getElementById("loadfield").value="";	
	document.getElementById("output").innerHTML="";
    });
});
function areaclick()
{
	document.getElementById("areaInput").style.display="";
	document.getElementById("loadInput").style.display="none";
	document.getElementById("areafield").value="";
	$("#areafield").focus();
	document.getElementById("output").innerHTML="";
}

function loadclick()
{
	document.getElementById("areaInput").style.display="none";
	document.getElementById("loadInput").style.display="";
	document.getElementById("loadfield").value="";
	$("#loadfield").focus();
	document.getElementById("output").innerHTML="";
}

function getarea(input) 
{     
	var elementValue = input.value;
	var link = '<a href="offerings.html"> Know More </a>';
	document.getElementById("output").innerHTML="You can have load upto " + Math.round((elementValue/8)*100)/100 + " KW." + link; 
}

function getload(input)
{
	var elementValue = input.value;
	var link = '<a href="offerings.html"> Know More </a>';
	document.getElementById("output").innerHTML="Required area is " + elementValue*8 + " Sq. m." + link;
}