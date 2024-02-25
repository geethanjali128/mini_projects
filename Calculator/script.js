const buttons=document.querySelectorAll('button')

const inputField=document.getElementById('result')



for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        const buttonVal=buttons[i].textContent;
        // console.log(buttonVal)
   
        if(buttonVal==="AC"){
            clear()
        }
        else if(buttonVal==="="){
            calculateResult()
        }
        else if(buttonVal==="DEL"){
            deleteResult()
        }
        else{
           appendValue(buttonVal)
        }
     })}


function clear(){
    inputField.value=""
}

function deleteResult(){
    const array=inputField.value.split("")
            array.pop()
       inputField.value=array.join("")
  
}
function calculateResult(){
    inputField.value=eval(inputField.value)   //eval() -javascript in built method
}   

function appendValue(buttonVal){
    inputField.value+=buttonVal
}