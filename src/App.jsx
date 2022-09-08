import Container from './components/Container';
import Navbar from './components/Navbar';
import TodosList from './components/todos/TodosList';

const App = () => {
	return (
		<Container>
			<Navbar />
			<TodosList />
		</Container>
	);
};

export default App;
