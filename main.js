
let btnClose = document.getElementById('close');
let btnOpen = document.getElementById('open');
let container = document.querySelector('.container');

btnClose. onclick = function () {
  
  container.classList.add('hide');
this.classList.add('hide');
btnOpen.classList.remove("hide");
}
btnOpen. onclick = function () {
  
  container.classList.remove('hide');
this.classList.add('hide');
btnClose.classList.remove("hide");
}



let btn= document.getElementById('btn');
window.onscroll =function(){
  if (scrollY >=100)
{btn.style.display = "block";
}
else{btn.style.display = "none";}
}

btn.onclick = function(){
  scroll({
  left:0,
  top:0,
  behavior:"smooth"
})
}


