const accordionQuestions = document.querySelectorAll(".accordion__box");

accordionQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    console.log(question);
    if (question.classList.contains("active")) {
      question.classList.remove("active");
    } else {
      closingAccordeon();
      question.classList.add("active");
    }
  });
});

const closingAccordeon = () => {
  const activeQuestion = document.querySelectorAll(".active");
  activeQuestion.forEach((questionActivated) => {
    questionActivated.classList.remove("active");
  });
};
