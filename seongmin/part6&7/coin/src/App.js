import React, { useEffect, useState } from 'react';

function Coin() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			{/* 챌린지 : USD -> BTC로 바꾸기 */}
			<h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select>
					{coins.map((coin) => (
						<option>
							{coin.name} ({coin.symbol}):${coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}
		</div>
	);
}
function App() {
	return (
		<div>
			<Coin />
		</div>
	);
}

export default App;
