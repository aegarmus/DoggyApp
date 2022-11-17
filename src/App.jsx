import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { DoggyList } from './pages/MainPage';
import './App.css';

function App() {
	return (
		<>
			<div className="pageContainer">
				<div className="mainContainer">
					<Header />
					<DoggyList />
				</div>
				<div className="footerApp">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
