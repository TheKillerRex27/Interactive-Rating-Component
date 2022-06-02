function onClick() {
  for (let i = 1; i < 6; i++) {
    document.getElementById("btn-" + i).addEventListener("click", (event) => {
      localStorage.setItem("num", event.target.name);

      for (let i = 1; i < 6; i++) {
        document.getElementById("btn-" + i).classList.remove("rating-button-clicked");
      }
      event.target.classList.add("rating-button-clicked");
    })
  }
}
