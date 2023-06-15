// sidebar in small screen
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
const rightDiv = document.querySelector(".right-div");

menuBtn.addEventListener("click", () => {
  rightDiv.classList.add("right-div-show");
  menuBtn.classList.toggle("show");
  closeBtn.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  rightDiv.classList.remove("right-div-show");
  closeBtn.classList.toggle("show");
  menuBtn.classList.toggle("show");
});

// Our services section
const ourServices = [
  {
    name: "Regular Painting",
    icon: '<i class="fa-solid fa-paint-roller"></i>',
    bg: "painting1.jpg",
  },
  {
    name: "Wall Painting",
    icon: '<i class="fa-solid fa-paint-roller"></i>',
    bg: "painting2.jpg",
  },
  {
    name: "Floor Coating",
    icon: '<i class="fa-solid fa-paint-roller"></i>',
    bg: "painting3.jpg",
  },
  {
    name: "Graffiti Removal",
    icon: '<i class="fa-solid fa-spray-can"></i>',
    bg: "painting4.jpg",
  },
  {
    name: "Mildew Removal",
    icon: '<i class="fa-solid fa-spray-can"></i>',
    bg: "painting5.jpg",
  },
  {
    name: "Window Washing",
    icon: '<i class="fa-solid fa-spray-can"></i>',
    bg: "painting6.jpeg",
  },
];

const boxes = document.querySelector(".boxes");

if (boxes) {
  ourServices.forEach((box) => {
    const insideBox = document.createElement("div");
    const outsideBox = document.createElement("div");
    outsideBox.classList.add("outside-box");
    outsideBox.classList.add("hidden");
    insideBox.classList.add("inside-box");
    insideBox.style.backgroundImage = `url(img/${box.bg})`;
    outsideBox.innerHTML = `${box.icon} <br><br> <h1>${box.name}</h1>`;
    outsideBox.appendChild(insideBox);
    boxes.appendChild(outsideBox);
  });
}

// projects and customers counter
const totalProjectsText = document.getElementById("total-projects");
const happyCustomersText = document.getElementById("happy-customers");
let totalProjects = 0;
let happyCustomers = 0;

if(totalProjectsText){
  const interval = setInterval(() => {
    if (totalProjects < 179) {
      totalProjects++;
      totalProjectsText.innerText = totalProjects + "+";
    } else if ((totalProjects = 179)) {
      clearInterval(interval);
      interval = setInterval(() => {
        if (totalProjects < 210) {
          totalProjects++;
          totalProjectsText.innerText = totalProjects + "+";
        }
      }, 50);
    }
  }, 5);
  
  const Interval = setInterval(() => {
    if (happyCustomers < 330) {
      happyCustomers++;
      happyCustomersText.innerText = happyCustomers + "+";
    } else if ((happyCustomers = 330)) {
      clearInterval(Interval);
      Interval = setInterval(() => {
        if (happyCustomers < 360) {
          happyCustomers++;
          happyCustomersText.innerText = happyCustomers + "+";
        }
      }, 50);
    }
  }, 5);
}


// sidebar auto closing
const headerLinks = document.querySelectorAll(".header-links");
headerLinks.forEach((links) => {
  links.addEventListener("click", () => {
    rightDiv.classList.remove("right-div-show");
    closeBtn.classList.toggle("show");
    menuBtn.classList.toggle("show");
  });
});

// Phone calling animation
const phone = document.getElementById("calling");
window.addEventListener("scroll", () => {
  if (scrollY < 200) {
    phone.style.bottom = "-100px";
  } else if (scrollY >= 200) {
    phone.style.bottom = "20px";
  }
});

// Fade in while scrolling
const hiddenElements = document.querySelectorAll(".hidden");
const opacityElements = document.querySelectorAll(".opacity-hidden");
const zoomingElements = document.querySelectorAll(".zooming-element");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const observerOpacity = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-show");
    }
  });
});
const observerZooming = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("zoom-in");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));
opacityElements.forEach((el) => observerOpacity.observe(el));
zoomingElements.forEach((el) => observerZooming.observe(el));
