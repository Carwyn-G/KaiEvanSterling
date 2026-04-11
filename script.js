function hamburger() {
  let x = document.getElementById("navbar");
  if (x.className === "topnav default") {
    x.className = "topnav expanded";
    document.getElementById("menu-icon").src = "images/close.png"
    document.getElementById("menu-icon").alt = "click to close the menu"
  }
  else {
    x.className = "topnav default";    
    document.getElementById("menu-icon").src = "images/hamburger.png";
    document.getElementById("menu-icon").alt = "click to open the menu"
    }
} 

function expandExplore() {
  let y = document.getElementById("submenu");
  if (y.className === "submenu expandable") {
    y.className = "submenu expanded-explore"
    document.getElementById("arrow").id = "arrowup"
  }
  else {
    y.className = "submenu expandable"
    document.getElementById("arrowup").id = "arrow"
  }
}

emailjs.init("cvuxIRfkZCNaMnQcQ");

const contactbtn = document.getElementById('contact-btn');

document.getElementById('contact-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    contactbtn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ujjlgme';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        contactbtn.value = 'Send Email';
        window.open("contactthanks.html", "_self");
      }, (err) => {
        contactbtn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });


const maillistbtn = document.getElementById('maillist-btn');

document.getElementById('maillist-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    maillistbtn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_wxz0all';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        maillistbtn.value = 'Send Email';
        window.open("signupthanks.html", "_self");
      }, (err) => {
        maillistbtn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
});