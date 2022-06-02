let num;

function onClick() {
  for (let i = 1; i < 6; i++) {
    document.getElementById("btn-" + i).addEventListener("click", (event) => {
     num = event.target.name;

      for (let i = 1; i < 6; i++) {
        document.getElementById("btn-" + i).classList.remove("rating-button-clicked");
      }
      event.target.classList.add("rating-button-clicked");
    })
  }

  document.getElementById("submit").addEventListener("click", event => {
    document.getElementById("rating-state").style.display = "none";
    document.getElementById("thank-you-state").classList.remove("rating-card-hidden");
    document.getElementById("rating").innerHTML = num;
  })
}
