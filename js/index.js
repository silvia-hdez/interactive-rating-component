const scores = document.querySelectorAll('.score');
const finalNumber = document.querySelector('.score-number')

scores.forEach(function(score) {
  score.addEventListener('click', function() {
    scores.forEach(function(s) {
      s.classList.remove('active');
    });
    
    score.classList.add('active');
    
    const number = score.innerText
    finalNumber.innerText = number
  });
});


const button = document.querySelector('button')
button.addEventListener('click', function() {
    renderLastScreen()
})



function renderLastScreen() {
document.querySelector('.end').style.visibility='visible'
document.querySelector('.start').style.visibility='hidden'
}



