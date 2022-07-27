
// returns an array of html, so need to loop through and add to each
const btn = document.querySelectorAll(".selection");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',e => {
        alert('clicked');
    })
}