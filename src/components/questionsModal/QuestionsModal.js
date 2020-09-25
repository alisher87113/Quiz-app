import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import MyContext from '../../context/MyContext';
import { shuffleArray } from './helpers'

const QuestionModal = () => {
	const context = useContext(MyContext);
	const { amount, difficulty, category, toggleQuestionModal } = context;

	const [questions, setQuestions] = useState(null);
	const [error, setError] = useState(null);
	const [currQuestion, setCurrentQuestion] = useState({ value: null, currIndex: null })
	const [showAnswer, setShowAnswer] = useState(false);
	const [incorrect, setIncorrect] = useState(null);
	let [counter, setCounter] = useState(0);
	const [finished, setFinished] = useState(null)

	const next = () => {
		if (currQuestion.currIndex === questions.length) {
			setFinished(true)
		}
		console.log(currQuestion);
		setShowAnswer(false);
		setIncorrect(null);
		setCurrentQuestion({ value: questions[currQuestion.currIndex++], currIndex: currQuestion.currIndex++ })
	}

	const checkAnswer = (answer) => {
		if (currQuestion.value.correct_answer === answer) {
			setShowAnswer(true);
			setCounter(counter + 1);
		} else {
			setIncorrect(answer)
		}
	}

	const save = () => {
		localStorage.setItem('record', JSON.stringify(counter, questions.length))
	}




	useEffect(() => {
		axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
			.then(res => {
				console.log(res.data.results);
				if (res.data.results.length === 0) {
					setError('There was not enough questions')
				} else {
					const questions = res.data.results;
					questions.map(question => {
						if (question.type === 'multiple') {
							const vars = [...question.incorrect_answers, question.correct_answer];
							const shuffledVars = shuffleArray(vars);
							question.vars = shuffledVars;
						}
					})
					setQuestions(res.data.results);
					setCurrentQuestion({ value: res.data.results[0], currIndex: 0 })
				}
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div className="modal fade show d-block" id="startModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				{finished && (
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">You finished QUIZ</h5>
						</div>
						<div className="modal-body">
							<div className="modal-title pb-4">
								Your score is {counter} out of {questions.length}
							</div>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => toggleQuestionModal()}>exit game</button>
							<button type="button" className="btn btn-primary" onClick={() => save()}>save</button>
						</div>
					</div>
				)}
				{questions && currQuestion.value && (
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">{counter} of {questions.length} correct</h5>
							{incorrect && <h5 className="modal-title red" style={{ color: "red" }}>Incorrect answer</h5>}
						</div>
						<div className="modal-body">
							<div className="modal-title pb-4">
								{currQuestion.value.question}
							</div>
							<div>
								{currQuestion.value.type === 'boolean' && (
									<ul className="list-group">
										<li className="list-group-item">{currQuestion.value.correct_answer}</li>
										<li className="list-group-item">{currQuestion.value.incorrect_answers}</li>
									</ul>
								)}
								{currQuestion.value.type === 'multiple' && (
									<ul className="list-group">
										{currQuestion.value.vars.map(singleVar => {
											return <li key={singleVar}
												className="list-group-item"
												style={{ backgroundColor: showAnswer && currQuestion.value.correct_answer === singleVar ? 'green' : 'null' }}
												onClick={() => { checkAnswer(singleVar) }}
											>{singleVar}
											</li>
										})}
									</ul>
								)}


							</div>

						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => toggleQuestionModal()}>exit game</button>
							<button type="button" className="btn btn-primary" onClick={() => next()}>next</button>
						</div>
					</div>
				)}
				{!finished && !questions && !currQuestion.value && (
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">Please wait, questions are being loaded</h5>
						</div>
					</div>
				)}



			</div>
		</div >
	)
}
export default QuestionModal 