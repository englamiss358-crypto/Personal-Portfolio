//nav bar changing when scrolling
// Scroll
// ↓
// ألف على الـSections
// ↓
// getBoundingClientRect()
// ↓
// أحدد الـSection الحالي
// ↓
// أجيب section.id
// ↓
// ألف على Navbar Links
// ↓
// أقارن href مع # + section.id
// ↓
// المطابق → add active
// غير المطابق → remove active



const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const navbarRect = navbar.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= navbarRect.bottom && sectionRect.bottom > navbarRect.top) {
            const sectionId = section.getAttribute("id");
            for (let link of navLinks) {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        }
    });
});


//dark mode toggle
const darkModeToggle = document.querySelector("#theme-toggle-button");
darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

//nav&tab 
const navTabs = document.querySelectorAll('.nav-tabs a');
navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

//carousel
// testmonials
const testimonials = document.querySelector('#testimonials-carousel');
const testimonialBtns = document.querySelectorAll('.testimonial-card ');
const nextBtn = document.querySelector('#next-testimonial');
const prevBtn = document.querySelector('#prev-testimonial');

let currentTestimonial = 0;
let CSSTransformValue = `translateX(-${currentTestimonial * 100}%)`;
testimonials.style.transform = CSSTransformValue;
nextBtn.addEventListener('click', function() {
  currentTestimonial = (currentTestimonial + 1) % testimonialBtns.length;
  CSSTransformValue = `translateX(${currentTestimonial * 100}%)`;
  testimonials.style.transform = CSSTransformValue;
});

prevBtn.addEventListener('click', function() {
  currentTestimonial = (currentTestimonial - 1 + testimonialBtns.length) % testimonialBtns.length;
  CSSTransformValue = `translateX(${currentTestimonial * 100}%)`;
  testimonials.style.transform = CSSTransformValue;
});


//open gear

const gearIcon = document.querySelector('#settings-toggle');
const sideBar = document.querySelector('#settings-sidebar');
const closeBtn = document.querySelector('#close-settings');
gearIcon.addEventListener('click', () => {
    sideBar.classList.toggle('translate-x-full');
  
});

closeBtn.addEventListener('click', () => {
    sideBar.classList.add('translate-x-full');
});



//sidebar

// const fontOption = document.querySelectorAll('.font-option');
// const sidebar = document.querySelector('#sidebar');

// fontOption.forEach(function (buttonFont) {
//     buttonFont.addEventListener('change', (font) => {
//         fontType = font.target.value;
//         sidebar.style.fontFamily = fontType;

//     });
// });

const fontOptions = document.querySelectorAll('.font-option');

fontOptions.forEach(function(fontBtn){
  fontBtn.addEventListener('click', function() {
    fontOptions.forEach(opt => opt.classList.remove('active'));
   const selectedFont = fontBtn.dataset.font;
   document.body.style.fontFamily = selectedFont;
    fontBtn.classList.add('active');
  });
});
//change theme color based on user selection
const colorOptions = document.querySelector('#theme-colors-grid');
const colors = [ "cyan", "red", "green", "blue", "yellow", "purple" ];
colors.forEach(function(colorBtn){
  const button = document.createElement("button");
  button.style.backgroundColor =  colorBtn;
  button.style.width = '30px';
  button.style.height = '30px';
  button.style.borderRadius = '50%';
  button.style.border = 'none';
  colorOptions.appendChild(button);
  button.addEventListener('click', function() {
    document.documentElement.style.setProperty('--color-primary', colorBtn);
    button.classList.add('active');
    // Remove 'active' class from other buttons
    Array.from(colorOptions.children).forEach(btn => {
      if(btn !== button) {
        btn.classList.remove('active');
      }
    });
  });
});


//reset settings button
const resetBtn = document.querySelector('#reset-settings');
resetBtn.addEventListener('click', function() {
  // Reset font
  document.body.style.fontFamily = '';
  fontOptions.forEach(opt => opt.classList.remove('active'));
  // Reset color
  document.documentElement.style.setProperty('--color-primary', '');
  Array.from(colorOptions.children).forEach(btn => btn.classList.remove('active'));
});
//scroll to top button
const scrollToTopBtn = document.querySelector('#scroll-to-top');
window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.add('opacity-0', 'invisible');
    scrollToTopBtn.classList.remove('opacity-100', 'visible');
  }
});
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});