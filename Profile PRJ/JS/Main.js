const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        document.body.style.backgroundImage="url(images/av.jpg)";
        document.body.style.backgroundImage="url(images/dav.jpg)";
        body.style.transition='2s';
    }
    else{
                document.body.style.backgroundImage="url(images/dav.jpg)";
        document.body.style.backgroundImage="url(images/av.jpg)";

        body.style.transition='2s';
    }
})
/* Page transition*/
// const allLink = document.querySelectorAll('a')
// const pageTransition = document.querySelector('.page_transition')

// window.addEventListener('load',function(){
//     pageTransition.classList.add('hide')
// })

// allLink.forEach(item=> {
//     item.addEventListener('click',function(e){
//         e.preventDefault()
//         pageTransition.classList.remove('hide')
//         setTimeout(()=> {
//             window.location.href=this.href
//         }, 1200)
//     })
// })
/* Page transition*/

