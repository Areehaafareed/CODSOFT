let text = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            text = eval(text);
            document.querySelector('input').value = text;

        }
        else if(e.target.innerHTML == 'C'){
            text = ""
            document.querySelector('input').value = text;

        }
        else{
            console.log(e.target);
            text = text + e.target.innerHTML;
            document.querySelector('input').value = text;

        }
       
    })

})