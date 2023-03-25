currentimage=1;
controle_buttons=document.querySelectorAll(".controle-slider button");
previous_button=controle_buttons[0];
next_button=controle_buttons[1];
next_button.onclick = next;
previous_button.onclick = previous;
li_elements = document.querySelectorAll("ul li");
li_event()

function next(){
 if (currentimage < 5){
     currentimage+=1;
     changeimage();
     changeindex();
     checkindex();
 }
}

function previous(){
   if (currentimage > 1){
    currentimage-=1;
    changeimage()
    changeindex();
    checkindex();
   }
}

function changeindex(){
document.querySelector("ul li.active").classList.remove('active');
document.querySelector(`ul li:nth-child(${currentimage})`).classList.add("active");
}

function checkindex(){
 if (currentimage >1 && currentimage < 5){
 next_button.classList.remove('blocked');
 previous_button.classList.remove('blocked');
 }

 if (currentimage==5){
 next_button.classList.add('blocked');
 previous_button.classList.remove('blocked');
 }

 if(currentimage==1){
 previous_button.classList.add('blocked');
 next_button.classList.remove('blocked');
 }

}

function changeimage(){

document.querySelector("img.selected").classList.remove('selected');
document.querySelector(`img:nth-child(${currentimage})`).classList.add("selected");

}

function li_event(){
li_elements.forEach((element)=>{
element.addEventListener("click",handel_li_event);
})}

function handel_li_event(){

currentimage = parseInt(this.getAttribute("data-index"));
changeimage()
changeindex();
checkindex();
}