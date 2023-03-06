//Navigation Buttons

const project = document.getElementById("project-section");
const about = document.getElementById("about-section");
const contact = document.getElementById("contact-section");
const footer = document.getElementById("copyright");
const topOfPage = document.getElementById("top");

/*Navigate to sections*/

document.getElementById("project-button").addEventListener("click", () => {
  project.style.display = "flex";
  about.style.display = "none";
  contact.style.display = "none";
  footer.style.display = "none";
  project.scrollIntoView();
});

document.getElementById("about-button").addEventListener("click", () => {
  about.style.display = "block";
  project.style.display = "none";
  contact.style.display = "none";
  footer.style.display = "none";
  about.scrollIntoView();
});
document.getElementById("contact-button").addEventListener("click", () => {
  contact.style.display = "block";
  about.style.display = "none";
  project.style.display = "none";
  footer.style.display = "none";
  contact.scrollIntoView();
});

document.getElementById("name-tag").addEventListener("click", () => {
  project.style.display = "none";
  about.style.display = "none";
  contact.style.display = "none";
  footer.style.display = 'block';
});
