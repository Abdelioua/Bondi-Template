let workBtn = document.querySelectorAll(".our-work ul li");

workBtn.forEach((e) => {
  e.addEventListener("click", (ele) => {
    ele.target.parentElement.querySelectorAll(".active").forEach((s) => {
      s.classList.remove("active");
    });
    ele.target.classList.add("active");
    ele.target.classList.add("rounded-pill");
  });
});
