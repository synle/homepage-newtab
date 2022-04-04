const form = document.querySelector("#form");
const inputUrl = document.querySelector("#url");
const msg = document.querySelector("#msg");

inputUrl.value = localStorage.getItem("url");

inputUrl.addEventListener("change", (e) => {
  msg.innerText = "";
});

form.addEventListener("submit", (e) => {
  localStorage.setItem("url", inputUrl.value);
  e.preventDefault();
  msg.innerText = `New Homepage URL saved ${new Date().toLocaleString()}...`;
});
