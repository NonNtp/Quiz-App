import React, { useContext } from 'react'
import QuizContext from '../store/quiz-context'
const Menu = () => {
	const quizC = useContext(QuizContext)
	return (
		<div className='menu'>
			<h1>Quiz App</h1>
			<button onClick={quizC.onQuiz}>Start Quiz</button>
		</div>
	)
}

export default Menu
