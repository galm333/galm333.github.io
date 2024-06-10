const body = document.querySelector('body');
const nav = document.querySelector('nav');


//animation for the navigation bar (it's done using CSS and JS)
window.addEventListener('scroll', (e) => {
    if (body.scrollTop == 0){
        nav.className = "home";
    }
    else{
        nav.className = "normal";
    }
    
})


//careers section
const view_member_button = document.querySelector('#view-member-button');
const hiddenDiv = document.querySelector('#members');
view_member_button.onclick = () => {
    if (view_member_button.textContent == 'VIEW ALL MEMBERS'){
        view_member_button.textContent = 'HIDE MEMBERS';
        hiddenDiv.className = "show";
    }
    else{
        view_member_button.textContent = 'VIEW ALL MEMBERS';
        hiddenDiv.className = "hide";
    }
}


//carousel 
const carousel = document.getElementById('carouselExampleControls')
const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators li');
let currentItem = 0;
let isActive = true;

function setCurrentItem(index) {
  currentItem = (index + items.length) % items.length;
}

function hideItem(direction) {
  isActive = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
  indicators[currentItem].classList.remove('active');

}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isActive = true;
  });
  indicators[currentItem].classList.add('active');
}

document.getElementById('carouselPrev').addEventListener('click', function(e) {
  e.preventDefault()
  if (isActive) {
    hideItem('to-right');
    setCurrentItem(currentItem - 1);
    showItem('from-left');
  }
});

document.getElementById('carouselNext').addEventListener('click', function(e) {
  e.preventDefault()
  if (isActive) {
    hideItem('to-left');
    setCurrentItem(currentItem + 1);
    showItem('from-right');
  }
});

//pop up windows that show job specification
const careers_page_items = document.querySelectorAll('#careers-page .item');
careers_page_items.forEach(el => {
  el.addEventListener('click', (event) => {
    if (event.target == el){
      el.querySelector('#black-background').style.display = 'block';
    }
  })
})

const careers_page_items_span = document.querySelectorAll('#careers-page .item span');
careers_page_items_span.forEach(el => {
  el.addEventListener('click', (event) => {
    if (event.target == el){
      el.parentElement.parentElement.querySelector('#black-background').style.display = 'block';
    }
  })
})


//hide pop windows
const popUpWindows = document.querySelectorAll('#careers-page .item #black-background');
popUpWindows.forEach(el => {
  el.addEventListener('click', (event) => {
    if (event.target == el){
      el.style.display = 'none';
    }
  })
});


//mobile friendly
function hide_mobile_nav(){
      document.querySelector('nav #right-mobile').className = "hide";
}

function show_mobile_nav(){
  document.querySelector('nav #right-mobile').className = "show";
}