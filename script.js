var i = 0;
var images = [];
var time = 3000;
var text = [];
var link = [];

//Image list

images[0] = 'media/miksDigsHolesScreenshot.png';
images[1] = 'media/pepperShakersScreenshot.png';
images[2] = 'media/teaCozyScreenshot.png';

//Caption list

text[0] = 'Responsive website for building company.';
text[1] = 'HTML/CSS website landing page for a club.';
text[2] = 'Responsive langing page for a tea company.';

//Link list

link[0] = 'https://msilis.github.io/digsholes/';
link[1] = 'https://msilis.github.io/peppershakers/';
link[2] = 'https://msilis.github.io/teacozy';

//Slideshow function

function changeImage() {
    document.slide.src = images[i];
    document.getElementById("slide-text").innerHTML = text[i];
    document.getElementById('image-link').setAttribute('href', link[i]);

    if(i < images.length -1){
        i++;
        
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
    
}


window.onload = changeImage;

//Navigation Buttons

const project = document.getElementById('project-section');
const about = document.getElementById('about-section');
const contact = document.getElementById('contact-section');
const footer = document.getElementById('copyright');
const topOfPage = document.getElementById('top');

/*Navigate to sections*/

document.getElementById('project-button').addEventListener('click', ()=>{
    project.style.display = 'block';
    about.style.display = 'none';
    contact.style.display = 'none';
    footer.style.display = 'none';
    
    project.scrollIntoView();
});

document.getElementById('about-button').addEventListener('click', () =>{
    about.style.display = 'block';
    project.style.display = 'none';
    contact.style.display = 'none';
    footer.style.display = 'none';
    about.scrollIntoView()
    ;} );
document.getElementById('contact-button').addEventListener('click', ()=>{
    contact.style.display = 'block';
    about.style.display = 'none';
    project.style.display = 'none';
    footer.style.display = 'none';
    contact.scrollIntoView();
});

/*Return to top buttons*/

/*document.getElementById('top-button1').addEventListener('click', ()=>{
    about.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
    footer.style.display = 'block'
    topOfPage.scrollIntoView();
})

document.getElementById('top-button2').addEventListener('click', ()=>{
    about.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
    topOfPage.scrollIntoView();
})

document.getElementById('top-button3').addEventListener('click', ()=>{
    about.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
    topOfPage.scrollIntoView({behavior: "smooth"});
})
*/
