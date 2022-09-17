import Container from './components/Container';
import Navbar from './components/Navbar';
import AddTodoForm from './components/todos/AddTodoForm';
import TodosList from './components/todos/TodosList';
import { TodosProvider } from './context/TodosContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
	return (
		<TodosProvider>
			<Container>
				<Navbar />
				<AddTodoForm />
				<TodosList />
			</Container>
			<ToastContainer
				position='top-center'
				autoClose={1000}
				className='sm:mt-10 mt-5 px-5'
			/>
		</TodosProvider>
	);
};

export default App;
