const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

let ctaTexth1 = document.querySelector('.cta-text h1');
ctaTexth1.textContent = siteContent["cta"]["h1"];
let ctaTextButton = document.querySelector('.cta-text button')
ctaTextButton.textContent = siteContent["cta"]["button"];
let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let h4elements = document.getElementsByTagName('h4');
let pElements = document.getElementsByTagName('p');
h4elements[0].textContent = siteContent["main-content"]["features-h4"];
pElements[0].textContent = siteContent["main-content"]["features-content"];
h4elements[1].textContent = siteContent["main-content"]["about-h4"];
pElements[1].textContent = siteContent["main-content"]["about-content"];

let codeSnippetImg = document.getElementById('middle-img');
codeSnippetImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

h4elements[2].textContent = siteContent["main-content"]["services-h4"];
pElements[2].textContent = siteContent["main-content"]["services-content"];
h4elements[3].textContent = siteContent["main-content"]["product-h4"];
pElements[3].textContent = siteContent["main-content"]["product-content"];
h4elements[4].textContent = siteContent["main-content"]["vision-h4"];
pElements[4].textContent = siteContent["main-content"]["vision-content"];

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];

pElements[5].textContent = siteContent["contact"]["address"];
pElements[6].textContent = siteContent["contact"]["phone"];
pElements[7].textContent = siteContent["contact"]["email"];
pElements[8].textContent = siteContent["footer"]["copyright"];

const nav = document.querySelector('header nav a')
nav.style.color = "green"

// TASK 3

// First Select The Parent
const navEl = document.querySelector('nav');
// Then create the added element
const newNavLink = document.createElement('a');
newNavLink.appendChild(document.createTextNode('Sign In'))
// Append the child to parent
navEl.appendChild(newNavLink);

const footerEl = document.querySelector('footer');
const newFooter = document.createElement('a');
newFooter.setAttribute('href', 'http://lambdaschool.com');
newFooter.textContent = 'Taught By Lambda School';

footerEl.prepend(newFooter);