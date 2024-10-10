// use Selectors

const questions = document.querySelectorAll('.questions');
console.log(questions);

questions.forEach((question) => {
  console.log(question);

  const btn = question.querySelector('.question-btn');
  console.log(btn);
  
  btn.addEventListener('click', () => {
    // hidden and show functionality
    questions.forEach((article) => {
      if(article !== question) {
        article.classList.remove('show-text')
      }
    })

    question.classList.toggle('show-text')
  })
})



// traversing the DOM

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn)=> {
//   btn.addEventListener("click", (e)=>{
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
// })
// });