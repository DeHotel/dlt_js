document.querySelector("#colorBtn").addEventListener("click", () => {
  if (document.querySelector(".color-box").style.backgroundColor === "red") {
    document.querySelector(".color-box").style.backgroundColor = "lightblue";
  } else {
    document.querySelector(".color-box").style.backgroundColor = "red";
  }
});
