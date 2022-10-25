const accordionCard = document.querySelector('.accordion');
const accordionQuestions = document.querySelectorAll('.accordion__box--question');


function openAccordion () {
    if(this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active')
        this.style.fontWeight='400'
    }else {
        closeAccordion()
        this.nextElementSibling.classList.toggle('active')
        this.style.fontWeight='700'
    }
}

const closeAccordion = () => {
    const answeredItems = document.querySelectorAll('.accordion__info')
    answeredItems.forEach(item => item.classList.remove('active'))
}

const closeOutsideBars = (e) => {
    if(
        e.target.classList.contains('accordion__box--question') ||
        e.target.classList.contains('accordion__info') ||
        e.target.classList.contains('accordion__info--text')
        )
        return
        closeAccordion()
    }


accordionQuestions.forEach(btn=> btn.addEventListener('click',openAccordion))
window.addEventListener('click', closeOutsideBars)


