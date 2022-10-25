
const accordionQuestions = document.querySelectorAll('.accordion__box');

accordionQuestions.forEach(question => {
    question.addEventListener('click', () => {
        console.log(question);
        if(question.classList.contains('active')) {
            question.classList.remove('active')
        }else {
            const activeQuestion = document.querySelectorAll(".active");
            activeQuestion.forEach(questionActivated => {
                questionActivated.classList.remove('active')
            })
            question.classList.add('active')
        }
    })
})
