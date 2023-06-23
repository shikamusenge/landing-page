const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector("#close-btn");
const linksDiv = document.querySelector("#navbar-links");
const semBlack = document.querySelector("#sem-black");
const ul = document.querySelector("#links-container");
const links = ul.querySelectorAll("a");
menuBtn.onclick = () => {
  linksDiv.style.display = "block";
  semBlack.className = "sem-black";
  ul.id = "showMenu";
};
closeBtn.onclick = () => close();
links.forEach((lnk) => {
  lnk.onclick = () => close();
});
const close = () => {
  linksDiv.style.display = "none";
  semBlack.classList.remove("sem-black");
  ul.id = "";
};
