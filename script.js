const linkUrl = document.getElementById("link-url");
const shortenUrl = document.getElementById("shortenUrl");
const secondHeading = document.getElementById("secondHeading");
const links = document.querySelector(".links");

shortenUrl.addEventListener("click", (e) => {
  e.preventDefault();
  if (linkUrl.value === "" || linkUrl.value === null) {
    const p = document.createElement("p");
    p.textContent = "The input field is empty";
    p.classList.add("error");
    shortenUrl.append(p);
  }
});
