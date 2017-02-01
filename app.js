$(document).ready(function(){

	$("#btn").click(function(){
var pass=$("#pass").val();
var name=$("#name").val();


if (pass.length> 6){
	alert("strong password"); 


}
else{
	alert("weak password, should use atleast 6 characters"); 
 
	
}



if (name.length>3){
	alert("Thanks!"); 

}
else{
	alert("invalid name"); 
 
	
}


	});  
	});  

