
let createBtn=document.querySelector(".btn");
let inputContainer=document.querySelector(".inputcontainer");

createBtn.addEventListener("click",()=>{
    let notes=document.createElement("p");
    notes.classList.add("input-box");
    notes.setAttribute("contenteditable","true");
    let img=document.createElement("img");
    img.src="images/delete.png";
    inputContainer.appendChild(notes).appendChild(img);
});

function updateStorage(){
    localStorage.setItem("notes",inputContainer.innerHTML);
}

inputContainer.addEventListener("click",function(event){
    if(event.target.tagName==="IMG"){
        event.target.parentElement.remove();
        updateStorage();
    }else if(event.target.tagName==="P"){
        let notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
});

function showData(){
    inputContainer.innerHTML=localStorage.getItem("notes");
}
showData();



document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();S
    }
})