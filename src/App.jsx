import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { TodosProvider } from './context/TodosContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Home from './pages/home';

const App = () => {
	return (
		<Router>
			<TodosProvider>
				<Container>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Container>
				<ToastContainer
					position='top-center'
					autoClose={1000}
					className='sm:mt-10 mt-5 px-5'
				/>
			</TodosProvider>
		</Router>
	);
};

export default App;
