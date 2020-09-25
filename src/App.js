import React, { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import StartModal from './components/startModal/StartModal';
import QuestionModal from './components/questionsModal/QuestionsModal';
import './App.css';
import MyContext from './context/MyContext';


const App = () => {
	const context = useContext(MyContext);
	const { questionModalOpen, startModalOpen } = context;
	return (
		<div className="App">
			<Navbar />
			{startModalOpen && <StartModal />}
			{questionModalOpen && <QuestionModal />}
		</div>
	);
}

export default App;
