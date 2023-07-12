const span = document.querySelectorAll("#score");
const title = document.querySelectorAll("#name");
const icon = document.querySelectorAll("#icon");
const data = fetch("data.json");
data
  .then((e) => {
    return e.json();
  })
  .then((e) => {
    for (let i = 0; i < 4; i++) {
      span[i].textContent = e[i]["score"];
      title[i].textContent = e[i]["category"];
      icon[i].setAttribute("src", `${e[i]["icon"]}`);
    }
  })
