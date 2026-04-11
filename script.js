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