import React, { useContext } from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'
import QuizContext from './store/quiz-context'

const App = () => {
	const quizC = useContext(QuizContext)

	return (
		<div className='App'>
			<h1>Web Development Quiz </h1>
			{quizC.quizState === 'menu' && <Menu />}
			{quizC.quizState === 'quiz' && <Quiz />}
			{quizC.quizState === 'score' && <Score />}
		</div>
	)
}

export default App
