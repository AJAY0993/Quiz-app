import { data } from './htmlQuizData.js'
console.log(data)

const main = document.querySelector('main')

data.questions.forEach((question, i) => {
    const div = document.createElement('div')
    main.appendChild(div)
    div.className = `quiz-container quiz ${i == 0 ? 'show' : 'hidden'}`
    div.innerHTML = `<div class="quiz-header">
    <h2 class="question">${question.question}</h2>
</div>
<ul class="choices">
    <li>
        <input type="radio" name="answer" class="answer" id="a">
        <label for="a" id="a_text"></label>
    </li>
    <li>
        <input type="radio" name="answer" class="answer" id="b">
        <label for="b" id="b_text"></label>
    </li>
    <li>
        <input type="radio" name="answer" class="answer" id="c">
        <label for="c" id="c_text"></label>
    </li>
    <li>
        <input type="radio" name="answer" class="answer" id="d">
        <label for="d" id="d_text"></label>
    </li>
</ul>`

})
const choices = document.querySelectorAll('.choices')
choices.forEach((c, i) => {
    c.querySelectorAll('label').forEach((l, i2) => {
        l.innerText = data.questions[i].choices[i2]
    })
})

const nextBtn = document.querySelector('#next')
const questions = document.querySelectorAll('.quiz')
let currentI = 0;
let score = 0

nextBtn.addEventListener('click', () => {
    const radios = Array.from(questions[currentI].querySelectorAll('input'));
    if (radios.every(x => x.checked == false)) alert('please select one option')
    else {
        let myChoice = radios.indexOf(radios.find(x => x.checked));
        questions[currentI].classList.toggle('hidden')
        currentI++
        questions[currentI].classList.toggle('hidden')
        if (myChoice == data.questions[currentI - 1].correct) score++
        alert(` your score is ${score} the correct option was ${data.questions[currentI - 1].correct + 1}`)
    }
})