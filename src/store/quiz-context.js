import { createContext, useState } from 'react'

const QuizContext = createContext({
	quizState: 'menu',
	score: 0,
	onMenu: () => {},
	onQuiz: () => {},
	onScore: () => {},
	onAddScore: () => {},
})

export const QuizContextProvider = (props) => {
	const [quizState, setQuizState] = useState('menu')
	const [score, setScore] = useState(0)

	const MenuHandler = () => {
		setQuizState('menu')
		setScore(0)
	}

	const QuizHandler = () => {
		setQuizState('quiz')
	}

	const ScoreHandler = () => {
		setQuizState('score')
	}

	const AddScore = () => {
		setScore((prevState) => prevState + 1)
	}

	return (
		<QuizContext.Provider
			value={{
				quizState: quizState,
				score: score,
				onMenu: MenuHandler,
				onQuiz: QuizHandler,
				onScore: ScoreHandler,
				onAddScore: AddScore,
			}}
		>
			{props.children}
		</QuizContext.Provider>
	)
}

export default QuizContext
