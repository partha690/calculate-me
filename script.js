let string = "";
function backspace()  
{  
var exp = document.querySelector('input').value;  
document.querySelector('input').value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    // else if(e.target.innerHTML == 'B'){
    //     call(backspace()
    //     document.querySelector('input').value = string;
    //   }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})