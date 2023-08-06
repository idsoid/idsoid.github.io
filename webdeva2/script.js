var hbutton = document.querySelector("#hbutton");
var mbutton = document.querySelector("#mbutton");
var tbutton = document.querySelector("#tbutton");
var allpages = document.querySelectorAll(".page");
var menuItemsList = document.querySelector("nav ul");
var hamBtn = document.querySelector("#hamIcon");
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Pages
console.log(allpages);
function hideall() {
    for(let onepage of allpages) {
        onepage.style.display="none";
    }
}
hideall();
function show(pgno) {
    hideall();
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block";
}

hbutton.addEventListener("click", function () {
    show(1);
});
mbutton.addEventListener("click", function () {
    show(2);
});
tbutton.addEventListener("click", function () {
    show(3);
});

//Menu
function toggleMenus() {
    menuItemsList.classList.toggle("menuShow");
}
hamBtn.addEventListener("click",toggleMenus);

//Collapse/Expand
var collapsibles = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < collapsibles.length; i++) {
	var animateTimer;
    collapsibles[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } 
        else {
            animateTimer = setInterval(Reveal(content), 0);
        } 
    });
}
function Reveal(info) {
    if (info.style.maxHeight) {
        clearInterval(animateTimer);
        animateTimer = null;
    } 
    else {
        info.style.maxHeight = info.scrollHeight + "px";
    }
}

//Quiz
var QuizQuestions = [
	{
		question: "Which ancient civilization made the soft pillows we all know and love?",
		answers: {
			A: 'Ancient Egypt',
			B: 'Ancient Europe',
			C: 'Ancient China'
		},
		correctAnswer: 'B'
	},
	{
		question: "Which period were air mattresses made?",
		answers: {
			A: '1400s-1600s',
			B: '1600s-1700s',
			C: '1800s'
		},
		correctAnswer: 'C'
	},
    {
		question: "Which material was the most popular for making pillows in Ancient China?",
		answers: {
			A: 'Wood',
			B: 'Ceramic',
			C: 'Bronze',
            D: 'Jade',
            E: 'Bamboo',
            F: 'Porcelain'
		},
		correctAnswer: 'B'
	},
    {
		question: "What is a con of Flannel?",
		answers: {
			A: 'Not suitable for hot climates',
			B: 'Careful maintenance required to avoid fabric damage',
			C: 'Process to make material involves harsh chemicals',
            D: 'Can have coarse feel when new'
		},
		correctAnswer: 'A'
	},
    {
		question: "What is a pro of Tencel?",
		answers: {
			A: 'Good option for people who have sensitive skin',
			B: 'Wrinkle-resistant',
			C: 'Widely available and easy to maintain',
            D: 'Smooth, soft, and sleeps cool'
		},
		correctAnswer: 'D'
	}
];

Quiz(QuizQuestions, quizContainer, resultsContainer, submitButton);

function Quiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers = [];

		for(var i=0; i<questions.length; i++){
			answers = [];
			for(var letter in questions[i].answers){
				//Radio Button
				answers.push(
					'<label>'+'<input type="radio" name="question'+i+'" value="'+letter+'">'+ letter + ': '+ questions[i].answers[letter]+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}
	function showResults(questions, quizContainer, resultsContainer){
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			//Correct
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainers[i].style.color = 'lightgreen';
			}
			//Wrong
			else{
				answerContainers[i].style.color = 'red';
			}
		}
		//Results
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	};
}