import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';

const StartModal = () => {
	const context = useContext(MyContext);
	console.log(context)

	const { startModalOpen, toggleModal, toggleQuestionModal, setDifficulty, setCategory, setAmount, startGame } = context;

	return (
		<div className="modal fade show d-block" id="startModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">game settings</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => toggleModal()}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div>
							<label>choose difficulty</label>
							<select className="form-control form-control-sm" onChange={(e) => setDifficulty(e.target.value)}>
								<option value="">any</option>
								<option value="easy">easy</option>
								<option value="medium">medium</option>
								<option value="hard">hard</option>
							</select>
						</div>
						<div>
							<label>set amount of questions</label>
							<input type="number" className="form-control" placeholder="i am reqiured" onChange={(e) => setAmount(e.target.value)} />
						</div>
						<div>
							<label>select category</label>
							<select className="form-control form-control-sm" onChange={(e) => setCategory(e.target.value)}>
								<option value="">any</option>
								<option value="9">general knowledge</option>
								<option value="10">books</option>
								<option value="11">films</option>
								<option value="12">music</option>
								<option value="13">musicals & theatres</option>
								<option value="14">television</option>
								<option value="15">video games</option>
								<option value="16">board games</option>
								<option value="17">science and nature</option>
								<option value="18">computers</option>
								<option value="19">mathematics</option>
								<option value="20">mythology</option>
								<option value="21">sports</option>
								<option value="22">geography</option>
								<option value="23">history</option>
								<option value="24">politics</option>
								<option value="25">art</option>
								<option value="26">celebreties</option>
								<option value="27">animals</option>
								<option value="28">vehicles</option>
								<option value="29">comics</option>
								<option value="30">gadgets</option>
								<option value="31">japanese anime</option>
								<option value="32">cartoons</option>
							</select>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => toggleModal()}>close</button>
						<button type="button" className="btn btn-primary" onClick={() => { startGame() }}>start</button>
					</div>
				</div>
			</div>
		</div>
	)

}

export default StartModal

