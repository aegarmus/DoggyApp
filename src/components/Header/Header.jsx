
import './header.css';
import logo from "../../assets/logo.jpeg"

export const Header = () => {
	return (
		<>
			<div className="header ">
				<div className="semiCircle">
                    <div>
						<img src={logo} alt="Logo" className="logo"></img>				
                    </div>
				</div>
                <h1 className="title">Doggy App</h1>
                <p className="subtitle">Dog breed images</p>
			</div>
		</>
	);
};
