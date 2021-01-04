//function that display value 
function dis(val){ 
    let v = document.getElementById("result").value;
    //avoiding multiple decimals
    if(v.includes('.')&& val==="."){
  //no change in value      
    }else{
        document.getElementById("result").value += val;
    } 
} 
//function to remove the last character
function bck(){
    let v = document.getElementById("result").value;
    let val = v.slice(0,-1);
    document.getElementById("result").value = val;
}
//function that evaluates the digit and return result 
function solve(){ 
    let x = document.getElementById("result").value; 
    let y = eval(x) ;
    document.getElementById("result").value = y; 
} 
//function that clear the display 
function clr(){ 
    document.getElementById("result").value = ""; 
}