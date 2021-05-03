const linkUrl = document.getElementById("link-url");
const shortenUrl = document.getElementById("shortenUrl");
let secondHeading = document.getElementById("secondHeading");
const links = document.querySelector(".links");
const navIcon = document.querySelector(".navbar-toggler");
const image = document.querySelector(".image");
const heading = document.getElementById("heading");
const cardLinksGenerate = document.querySelector(".card-links");

navIcon.addEventListener("click", () => {
  if (window.innerWidth <= 320 && window.innerHeight <= 480) {
    let navClass = navIcon.classList;
    image.classList.remove("hidden");
    heading.style.marginTop = "100px";

    if (!navClass.contains("collapsed")) {
      image.classList.add("hidden");
      heading.style.marginTop = "-8px";
    }
  }
});
shortenUrl.addEventListener("click", (e) => {
  e.preventDefault();

  if (linkUrl.value === "" || linkUrl.value === null) {
    const p = document.createElement("p");
    p.textContent = "Please add a link";
    p.classList.add("error");
    linkUrl.style.boxShadow = "0 0 0 3px hsl(0, 87%, 67%)";
    shortenUrl.append(p);
  } else {
    const markup = `
                    <div class="card card-result">
                      <p>http://google.com</p>
                      <p class="text-muted">  http://google.com</p>
                      <button class="btn">Copy</button>
                      </div>
                      `;
    cardLinksGenerate.insertAdjacentHTML("afterbegin", markup);
    const cardsLink = document.querySelectorAll(".card-result");
    if (cardsLink.length > 1) {
      secondHeading.style.marginTop = 15 + 20 + "%";
      if (cardsLink.length > 3) {
        secondHeading.style.marginTop = 15 + 35 + "%";
      }
      if (cardsLink.length > 4) {
        secondHeading.style.marginTop = 50 + 3 * cardsLink.length + "%";
      }
      if (cardsLink.length > 6) {
        secondHeading.style.marginTop = 70 + 4 * cardsLink.length + "%";
      }
    }
  }
});
