import React, { useContext } from 'react'
import QuizContext from '../store/quiz-context'
import QuestionsData from '../data/QuestionsData'
const Score = () => {
	const quizC = useContext(QuizContext)
	return (
		<div className='score'>
			<h1>Your Score :</h1>
			<h2>
				{quizC.score} / {QuestionsData.length}
			</h2>
			<button onClick={quizC.onMenu}>Try Again</button>
		</div>
	)
}

export default Score
