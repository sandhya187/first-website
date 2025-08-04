function scrollSliderLeft() {
  const slider = document.getElementById("slider");
  slider.scrollBy({
    left: -300,
    behavior: "smooth"
  });
}

function scrollSliderRight() {
  const slider = document.getElementById("slider");
  slider.scrollBy({
    left: 300,
    behavior: "smooth"
  });
}

//----------------------Show and Hide Message-------------------
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach(q => {
    q.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      // Close all others
      document.querySelectorAll(".answer").forEach(a => {
        if (a !== answer) a.style.display = "none";
      });
      document.querySelectorAll(".icon").forEach(i => {
        if (i !== icon) i.textContent = "+";
      });

      // Toggle this one
      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "×";
      }
    });
  });
});

//////////////////////////////////////////////////

  
