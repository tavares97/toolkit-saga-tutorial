import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsFetch } from './features/catState';

import './App.css';

function App() {
	//gets the 'cats' reducer and the 'cats' property
	const cats = useSelector(state => state.cats.cats);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCatsFetch());
	}, [dispatch]);

	console.log(cats);

	return (
		<div className='App'>
			<h1>CATS SPECIES GALLERY</h1>
			<p>Images of cats. Lots of them, 10, maybe not that many</p>
			<hr />

			<div className='Gallery'>
				{cats.map(cat => (
					<div key={cat.id} className='row'>
						<div className='column column-left'>
							<img
								src={cat.image.url}
								alt={cat.name}
								width='200'
								height='200'
							/>
						</div>
						<div className='column column-right'>
							<h2>{cat.name}</h2>
							<h5>Temperament: {cat.temperament}</h5>

							<p>{cat.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
