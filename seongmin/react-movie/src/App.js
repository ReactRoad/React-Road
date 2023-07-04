import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import MovieDetail from './routes/MovieDetail';
import MovieHome from './routes/MovieHome';
import Category from './routes/Category';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route
					path='/movie/:id'
					element={<MovieDetail />}
				/>
				<Route
					path='/movie/'
					element={<MovieHome />}
				/>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:category'
					element={<Category />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
