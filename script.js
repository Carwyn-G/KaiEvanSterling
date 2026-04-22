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

if (document.getElementById("contact-page") != null){
  const contactbtn = document.getElementById('contact-btn');

  document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      contactbtn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_8wbwvil';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          contactbtn.value = 'Send Email';
          window.open("contactthanks.html", "_self");
        }, (err) => {
          contactbtn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
  }

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


let ciwSynopsis = `
      <h1 class="book-title">The Crown is Waiting</h1>
      <div class="synopsis">
        <p>When Felri wakes up underground, he’s forced to dig his way out of his own grave. Unable to go back to his old life, he scrambles to make sense of why he isn’t staying dead. He soon finds himself pushed into a dangerous job as a royal guard for the heir to the throne. He has no idea what he’s doing, the heir is nothing like he expected, and a sinister plot is unfolding in the castle.</p>
        <p>With just days before the heir’s official coronation, and a looming threat Felri’s expected to block with his own mysteriously immortal life, he quickly realizes that protecting the heir is far more than just a job to him.</p>
      </div>
      <a href="buyciw.html"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selected" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'" class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selector" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"  class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selector" id="MIF"><h2  class="selectimg">?</h2></button>
      </div>
  `

let kiwSynopsis = `
      <h1 class="book-title">The Kingdom is Watching</h1>
      <div class="synopsis">
        <p>Now engaged to the youngest Queen to ever rule Astuna and already world famous for his role as a guard, Felri finds himself thrust into a spotlight he never asked for, all while having to keep the engagement a secret from the whole country. With Sievert behind bars awaiting a trial for his role in the coronation disaster, Torin’s uncle is serving as King. But tensions are still running high in the castle and throughout the country.</p>
        <p>Torin wants to go ahead with the wedding that’ll put Felri on the throne as soon as possible, but first he’ll need a crash course in all the skills a king needs to rule.</p>
      </div>
      <a href="buykiw.html" target="_blank"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'" class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selected" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"  class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selector" id="MIF"><h2  class="selectimg">?</h2></button>
      </div>
  `

let mifSynopsis = `
      <h1 class="book-title">The Monarchy is Falling</h1>
      <div class="synopsis">
        <p>Felri's made it through the wedding. He thought that would be enough, but now that he's crowned King, the real challenges are only beginning.</p>
        <p>Join the mailing list to get the latest updates on when this book will be available!</p>
        <form id="mail-form">
          <label for="email">Email:</label>
          <input placeholder="enter your email here" type="email" name="email" required/>
          <button type="submit" id="mail-btn">Submit</button>
        </form>
      </div>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'" class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selector" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"  class="selectimg"></button>
        <button onclick="selectBook(this.id)" class="selected" id="MIF"><h2  class="selectimg">?</h2></button>
      </div>
  `



let shelfContents = document.getElementsByClassName("bookshelf-contents");
let displayed = document.getElementsByClassName("book-display");
let ciwCovers = document.getElementsByClassName("CIW");
let kiwCovers = document.getElementsByClassName("KIW");
let mifCovers = document.getElementsByClassName("MIF");

function selectBook(z){
  console.log(z);
  if (z === "CIW"){
    for (let i = 0; i < ciwCovers.length; i++) {
      console.log(ciwCovers[i]);
      ciwCovers[i].className="cover CIW";
    }
    for (let j = 0; j < kiwCovers.length; j++) {
      kiwCovers[j].className="cover KIW hidden";
    }
    for (let k = 0; k < mifCovers.length; k++) {
      mifCovers[k].className="cover MIF hidden";
    }
    shelfContents[0].innerHTML = ciwSynopsis;
    displayed[0].id = "CIW-book";
  } 
  else if (z ==="KIW"){
    for (let i = 0; i < ciwCovers.length; i++) {
      console.log(ciwCovers[i]);
      ciwCovers[i].className="cover CIW hidden";
    }
    for (let j = 0; j < kiwCovers.length; j++) {
      kiwCovers[j].className="cover KIW";
    }
    for (let k = 0; k < mifCovers.length; k++) {
      mifCovers[k].className="cover MIF hidden";
    }
    shelfContents[0].innerHTML = kiwSynopsis;
    displayed[0].id = "KIW-book";
  } 
  else if (z ==="MIF"){
    for (let i = 0; i < ciwCovers.length; i++) {
      ciwCovers[i].className="cover CIW hidden";
    }
    for (let j = 0; j < kiwCovers.length; j++) {
      kiwCovers[j].className="cover KIW hidden";
    }
    for (let k = 0; k < mifCovers.length; k++) {
      mifCovers[k].className="cover MIF";
    }
    shelfContents[0].innerHTML = mifSynopsis;
    displayed[0].id = "MIF-book";
  }
}

if (displayed[0].id === "MIF-book"){
  const mailbtn = document.getElementById('mail-btn');

  document.getElementById('mail-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      mailbtn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_wxz0all';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          mailbtn.value = 'Send Email';
          window.open("signupthanks.html", "_self");
        }, (err) => {
          mailbtn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
  }