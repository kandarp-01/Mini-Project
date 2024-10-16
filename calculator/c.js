const Solve=(char)=>{
    let display= document.getElementById("display");
    display.value+=char;
}
const Clear=()=>{
    document.getElementById("display").value="";

}
const Backspace=()=>{
    let display =document.getElementById("display");
    display.value=display.value.slice(0,-1);
}
const result=()=>{
    let display=document.getElementById("display");
    let expression=display.value;
    display.value=eval(expression);
}
