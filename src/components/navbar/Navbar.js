import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

const Navbar = () => {
	const context = useContext(MyContext);
	const { toggleModal } = context
	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">QUIZ GAME</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<span className="navbar-text ml-5">
						great place to spend your timee with benefit
    			</span>
					<ul className="navbar-nav ml-auto" style={style.li}>
						<li className="nav-item">
							<div className="nav-link" onClick={() => toggleModal()}>play</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" >my statistics</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" >my records</div>
						</li>
					</ul>

				</div>
			</div>
		</nav>

	)
}

export default Navbar

const style = {
	li: {
		cursor: 'pointer'
	}
}