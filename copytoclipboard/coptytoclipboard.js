// need to import js into header: src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"
document.querySelector('button').addEventListener('click', function(){
    new ClipboardJS('.btn'); 
    document.querySelector(".tooltip").style.opacity = 1;
});