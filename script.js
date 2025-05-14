let btn = document.querySelectorAll(".box");
let RstBtn = document.querySelector(".rst-btn");
let trunO = true
let Winnermsg = document.querySelector(".msg")

const disabledbox = ()=>{
    for( let disbox of btn){
        disbox.disabled = true
    }
}

const enabledbox = ()=>{
    for( let disbox of btn){
        disbox.disabled = false
        disbox.innerHTML = ""
        Winnermsg.innerHTML=""
    }
}




let pattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
btn.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(trunO){
            box.innerHTML ="O";
            trunO= false;
            box.d
        }
        else{
            box.innerHTML ="X";
            trunO= true;
        }
        box.disabled = true
        checkwinner();
     })
})

const checkwinner = ()=>{
    for(let ptrn of pattern){
        let pos1 = btn[ptrn[0]].innerHTML
        let pos2 = btn[ptrn[1]].innerHTML
        let pos3 = btn[ptrn[2]].innerHTML

        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2&&pos2===pos3){
               Winnermsg.innerHTML = `Winner is ${pos1}`
               disabledbox()
            }

        }
        }
}


RstBtn.addEventListener("click",()=>{
    trunO = true
    enabledbox()
})