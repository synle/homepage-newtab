const msg = document.querySelector("#msg");
const url = localStorage.getItem("url");
if (url && url.match(/http[s]*:\/\//)) {
  location.href = url;
} else {
  msg.innerHTML = `Invalid URL. <a href="/src/options/index.html">Click here to change the Homepage URL</a>`;
}
