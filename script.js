const poput = document.querySelector(".window");
const previews = document.querySelectorAll(".img-container img");
const original = document.querySelector(".full-img");

previews.forEach(preview => {
    preview.addEventListener('click',()=> {
        poput.classList.add("open");
        original.classList.add('open');
        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;
    })
})

poput.addEventListener('click',(event) => {
    if(event.target.classList.contains('window')) {
        poput.classList.remove('open');
        original.classList.remove('open');
    }
})