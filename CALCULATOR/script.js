let str="";
let buttons= document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
      setTimeout(()=>{
        button.style.backgroundColor= "white";
        button.style.Color= "#232323";
      },);
      setTimeout(()=>{
        button.style.backgroundColor= "#469381";
      },100);
      if(e.target.innerHTML=='='){
        str= eval(str);
        document.querySelector('input').value=str;

      }
      else if(e.target.innerHTML=='C'){
        str="";
        document.querySelector('input').value=str;
        
      }
      else{
        console.log(e.target);
        str= str +e.target.innerHTML;
        document.querySelector('input').value=str;
      }
    })
})