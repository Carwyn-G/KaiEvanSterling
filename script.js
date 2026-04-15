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
    <img class="cover" id="KIW-back" src="images/KIW/layer1-water.png" alt="a large lake">
    <img class="cover" id="KIW-one" src="images/KIW/layer2-lakesurface.png" alt="a large lake">
    <img class="cover" id="KIW-two" src="images/KIW/layer3-backcity.png" alt="a castle on an island connected by bridge to a large city of skyscrapers">
    <img class="cover" id="KIW-three" src="images/KIW/layer4-midcity.png" alt="a large city of sky scrapers">
    <img class="cover" id="KIW-front" src="images/KIW/layer5-frontcity.png" alt="a city of skyscrapers">
  </div>
  <section class="bookshelf">
    <div class="bookshelf-contents">
      <h1 class="book-title">The Kingdom is Watching</h1>
      <div class="synopsis">
        <p>Now engaged to the youngest Queen to ever rule Astuna and already world famous for his role as a guard, Felri finds himself thrust into a spotlight he never asked for, all while having to keep the engagement a secret from the whole country. With Sievert behind bars awaiting a trial for his role in the coronation disaster, Torin’s uncle is serving as King. But tensions are still running high in the castle and throughout the country.</p>
        <p>Torin wants to go ahead with the wedding that’ll put Felri on the throne as soon as possible, but first he’ll need a crash course in all the skills a king needs to rule.</p>
      </div>
      <a href="buykiw.html" target="_blank"><button type="button">Buy Now</button></a>
      <div class="book-selector">
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'"></button>
        <button onclick="selectBook(this.id)" class="selected" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="MIF"><h2>?</h2></button>
      </div>
    </div>
  </section>
  `

let mifContents = `
  <div class="cover-art" id="MIF-cover">
    <img class="cover" id="MIF-back" src="images/MIF/layer1.png" alt="clouds">
    <img class="cover" id="MIF-one" src="images/MIF/layer2.png" alt="clouds">
    <img class="cover" id="MIF-two" src="images/MIF/layer3.png" alt="Coming Soon">
    <img class="cover" id="MIF-three" src="images/MIF/layer4.png" alt="clouds">
    <img class="cover" id="MIF-front" src="images/MIF/layer5.png" alt="clouds">
  </div>
  <section class="bookshelf">
    <div class="bookshelf-contents">
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
        <button onclick="selectBook(this.id)" class="selector" id="CIW"><img src="images/CIW/3D-book.png" alt="The hardcover book 'the Crown is Waiting'"></button>
        <button onclick="selectBook(this.id)" class="selector" id="KIW"><img src="images/KIW/3D-book.png" alt="The hardcover book 'the Kingdom is Watching'"></button>
        <button onclick="selectBook(this.id)" class="selected" id="MIF"><h2>?</h2></button>
      </div>
    </div>
  </section>
  `



let displayed = document.getElementsByClassName("book-display");

function selectBook(z){
  console.log(z);
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