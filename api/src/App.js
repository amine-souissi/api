import UserList from './components/UserList'
import './App.css';
import { store } from './redux/store'
import { Provider } from 'react-redux';


function App() {
  	return (
		<Provider store={store}>
			<div className="App">
				<div className='header'>
					<h1>List of users :</h1>
				</div>
				<UserList />
			</div>	
		</Provider>	
		
  );
}

export default App;
