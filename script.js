const questions = document.querySelectorAll(".question");

//for each question in the questions varirable
questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn"); //question query selector variable named btn(block scope)
  //   console.log(btn);
  //event listener for the btn variable
  btn.addEventListener("click", function () {
    //for each question in the item parameter(same dom as the question)
    questions.forEach(function (item) {
      // if the item clicked is not the same dom that was clicked in the question param, item will remove the show-text classlist
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text"); //for everytime the btn is clicked, class list will toggle 'show-text'
  });
});

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle(".show-text");
//   });
// });
