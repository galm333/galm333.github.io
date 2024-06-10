const select = document.querySelector('select');

//select "Applied Position" automatically based on the fragment (the value after "#")
window.addEventListener("load", function() {
    select.selectedIndex = window.location.hash.toString().substring(1);
});