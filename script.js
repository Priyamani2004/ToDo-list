let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let div3=document.getElementById("div3");
let p1=document.getElementById("p1");
let inlines=document.getElementById("inlines");
number=0;

function changeall(){
  div1.classList.toggle("element1");
  div2.classList.toggle("element2");
  box1.classList.toggle("event1");
  box2.classList.toggle("event2");
  div3.classList.toggle("element3");
  inlines.classList.toggle("list");
}

let inputs=document.getElementById("box1");
let ul_list=document.getElementById("lines");
let increase=document.getElementById("increase");
let count=0;
let lists;
let idcount=0;

function addelements(){
  if(inputs.value!=""){
    let detail=inputs.value;
    lists=document.createElement("li");
    ul_list.appendChild(lists).id="list"+idcount;
    lists.setAttribute("class","createli");
    lists.innerHTML=`<button onclick="changeclr(this)" id="checkbox"></button>
    <p id="todos">${detail}</p>
    <img src="int.svg" onclick="clearlist(this)" id="clearlist"/>`;
    count++;
    increase.innerText=count;
     inputs.value="";
     idcount++
  }
}
function clearlist(element){
  let finding=element.parentNode.firstChild;
  element.parentNode.remove();
  if(!finding.style.backgroundImage){
    console.log(finding)
    count--;
    increase.innerText=count;
  }
}

function changeclr(ele){
  let getelement=ele.nextElementSibling;
  if(!ele.style.backgroundImage){
    ele.style.backgroundImage="block"
    ele.style.backgroundImage="linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
    ele.innerHTML=`<img src="right.svg" id="right"/>`;
    getelement.style.textDecoration="line-through";
    ele.parentNode.classList.add("finishing");
    count--;
    increase.innerText=count;
  }
  else{
   ele.innerHTML="";  
   ele.style.backgroundImage="";
   getelement.style.textDecoration="none";
   ele.parentNode.classList.remove("finishing");
   increase.innerText=count;
  }  
}

function Active(){
  // All();
  let AllElement=document.getElementsByClassName("createli");
  for(let i=0; i<AllElement.length; i++){
    if(AllElement[i].classList.contains("finishing")){
      AllElement[i].style.display="none";
    }
    else{
      AllElement[i].style.display="grid";
    }
  }
}

function All(){
  //let AllElement=document.getElementsByClassName("createli");
  for(let i=0; i<idcount; i++){
    let crtlist=document.getElementById("list"+i);
    crtlist.style.display="grid";
  }
}

function complete(){
  //All();
  let AllElement=document.getElementsByClassName("createli");
  for(let i=0; i<AllElement.length; i++){
    if(!AllElement[i].classList.contains("finishing")){
      AllElement[i].style.display="none";
    }
    else{
      AllElement[i].style.display="grid";
    }
  }
}
function clearcomplete(){
  // All();
  let AllElement=document.getElementsByClassName("finishing");
  let array=Array.from(AllElement);
  for(let i=0; i<array.length; i++){
      array[i].remove();
    }
  }
  
  function showlist(){
    for(let i=0; i<idcount; i++){
      let crtlist=document.getElementById("list"+i);
      crtlist.style.display="grid";
    }
  }
  
