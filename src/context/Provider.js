import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
	const [startModalOpen, setStartModalOpen] = useState(false);
	const [questionModalOpen, setQuestionModalOpen] = useState(false);
	const [amount, setAmount] = useState(10);
	const [difficulty, setDifficulty] = useState('');
	const [category, setCategory] = useState('');

	const toggleModal = () => {
		setStartModalOpen(!startModalOpen)
	}
	const toggleQuestionModal = () => {
		setQuestionModalOpen(!questionModalOpen)
	}

	const startGame = () => {
		toggleModal();
		toggleQuestionModal();
		console.log(amount, difficulty, category)

	}
	return (
		<MyContext.Provider value={{
			startModalOpen,
			toggleModal,
			questionModalOpen,
			toggleQuestionModal,
			amount,
			difficulty,
			category,
			setAmount,
			setCategory,
			setDifficulty,
			startGame
		}}>
			{props.children}
		</MyContext.Provider>
	)
}

export default MyProvider