import Container from './components/Container';
import Navbar from './components/Navbar';
import AddTodoForm from './components/todos/AddTodoForm';
import TodosList from './components/todos/TodosList';
import { TodosProvider } from './context/TodosContext';

const App = () => {
	return (
		<TodosProvider>
			<Container>
				<Navbar />
				<AddTodoForm />
				<TodosList />
			</Container>
		</TodosProvider>
	);
};

export default App;
