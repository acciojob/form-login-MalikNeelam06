let form1=document.getElementById("form1");
form1.addEventListener('submit',(e)=>{
	e.preventDefault()
	let value1=document.getElementsByName("fname")[0].value;
let value2=document.getElementsByName("lname")[0].value;
    //Write your code here
	alert(value1+" "+value2);
})

