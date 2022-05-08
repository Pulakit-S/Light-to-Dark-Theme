const dark=document.getElementById("dark")
const light=document.getElementById("light")
const label=document.getElementById("label")
const onswitch=document.getElementById("onswitch")
const offswitch=document.getElementById("offswitch")
const switc=document.getElementById("switc")
const body=document.querySelector("body")
var status="light"
switc.onclick=()=>{
  if(status==="light"){
   body.style.background="black";
  dark.style.display="block";
  light.style.display="none";
    onswitch.style.display="block";
    offswitch.style.display="none";
    status="dark"
  } else{
   body.style.background="white";
  dark.style.display="none";
  light.style.display="block";
    onswitch.style.display="none";
    offswitch.style.display="block";
   status="light"
  }
 
  
}