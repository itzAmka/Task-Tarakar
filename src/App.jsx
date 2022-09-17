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
			<ToastContainer position='top-center' autoClose={2000} />
		</TodosProvider>
	);
};

export default App;
