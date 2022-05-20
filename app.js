const navSlide = () => {
    const drop_down = document.querySelector('.drop-down');
    const Nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    drop_down.addEventListener('click', () =>{
    //Toggle nav
    Nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation ='';
        }
        else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index /7+0.5}s';
            }

        }); 
        //drop-down menu animation
        drop_down.classList.toggle('toggle') ;
    });  
}  
        
        


navSlide();