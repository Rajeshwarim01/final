let sections = document.querySelectorAll('section');
let nav_links = document.querySelector('header nav a');
window.onscroll=() => {
sections.array.forEach(sec => {
    let top = window.scrollY;
    let offset =sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id= sec.getAttribute('id');
    if(top>offset && top< offset + height){
        nav_links.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
        })
    }
});
};