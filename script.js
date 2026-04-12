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

let ciwContents = `
  <div class="cover-art">
    <img class="cover" id="CIW-back" src="images/CIW/layer1-water.png" alt="a large lake">
    <img class="cover" id="CIW-one" src="images/CIW/layer2-island-base.png" alt="a pale castle on an island">
    <img class="cover" id="CIW-two" src="images/CIW/layer3-middle-castle.png" alt="a pale castle on an island">
    <img class="cover" id="CIW-three" src="images/CIW/layer4-front-castle.png" alt="a pale castle on an island">
    <img class="cover" id="CIW-front" src="images/CIW/layer5-surface-water.png" alt="a large lake">
  </div>
  <section class="bookshelf">
    <div class="bookshelf-contents">
      <h1 class="book-title">The Crown is Waiting</h1>
      <div class="synopsis">
        <p>When Felri wakes up underground, he’s forced to dig his way out of his own grave. Unable to go back to his old life, he scrambles to make sense of why he isn’t staying dead. He soon finds himself pushed into a dangerous job as a royal guard for the heir to the throne. He has no idea what he’s doing, the heir is nothing like he expected, and a sinister plot is unfolding in the castle.</p>
        <p>With just days before the heir’s official coronation, and a looming threat Felri’s expected to block with his own mysteriously immortal life, he quickly realizes that protecting the heir is far more than just a job to him.</p>
      </div>
      <a href="#"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selected" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="MIF"><h2>?</h2></button>
      </div>
    </div>
  </section>
  `

let kiwContents = `
  <div class="cover-art">
    <img class="cover" id="KIW-back" src="images/CIW/layer1-water.png" alt="a large lake">
    <img class="cover" id="KIW-one" src="images/CIW/layer2-island-base.png" alt="a pale castle on an island">
    <img class="cover" id="KIW-two" src="images/CIW/layer3-middle-castle.png" alt="a pale castle on an island">
    <img class="cover" id="KIW-three" src="images/CIW/layer4-front-castle.png" alt="a pale castle on an island">
    <img class="cover" id="KIW-front" src="images/CIW/layer5-surface-water.png" alt="a large lake">
  </div>
  <section class="bookshelf">
    <div class="bookshelf-contents">
      <h1 class="book-title">The Kingdom is Watching</h1>
      <div class="synopsis">
        <p>When Felri wakes up underground, he’s forced to dig his way out of his own grave. Unable to go back to his old life, he scrambles to make sense of why he isn’t staying dead. He soon finds himself pushed into a dangerous job as a royal guard for the heir to the throne. He has no idea what he’s doing, the heir is nothing like he expected, and a sinister plot is unfolding in the castle.</p>
        <p>With just days before the heir’s official coronation, and a looming threat Felri’s expected to block with his own mysteriously immortal life, he quickly realizes that protecting the heir is far more than just a job to him.</p>
      </div>
      <a href="#"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'"></button>
        <button onclick="selectBook(this.id)" class="selected" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="MIF"><h2>?</h2></button>
      </div>
    </div>
  </section>
  `

let mifContents = `
  <div class="cover-art">
    <h2>Coming Soon!</h2>
  </div>
  <section class="bookshelf">
    <div class="bookshelf-contents">
      <h1 class="book-title">The Monarchy is Falling</h1>
      <div class="synopsis">
        <p>When Felri wakes up underground, he’s forced to dig his way out of his own grave. Unable to go back to his old life, he scrambles to make sense of why he isn’t staying dead. He soon finds himself pushed into a dangerous job as a royal guard for the heir to the throne. He has no idea what he’s doing, the heir is nothing like he expected, and a sinister plot is unfolding in the castle.</p>
        <p>With just days before the heir’s official coronation, and a looming threat Felri’s expected to block with his own mysteriously immortal life, he quickly realizes that protecting the heir is far more than just a job to him.</p>
      </div>
      <a href="#"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"></button>
        <button onclick="selectBook(this.id)" class="selected" id="MIF"><h2>?</h2></button>
      </div>
    </div>
  </section>
  `

function selectBook(z){
  console.log(z);
  let displayed = document.getElementsByClassName("book-display");
  if (z === "CIW"){
    displayed[0].innerHTML = ciwContents;
    displayed[0].id = "CIW-book"
  } else if (z ==="KIW"){
    displayed[0].innerHTML = kiwContents;
    displayed[0].id = "KIW-book"
  } else if (z ==="MIF"){
    displayed[0].innerHTML = mifContents;
    displayed[0].id = "MIF-book"
  }
}

