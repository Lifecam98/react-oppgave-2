import React, { useEffect, useState } from "react";

const CatFacts = () => {
	const [facts, setFacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showFacts, setShowFacts] = useState(false);

	useEffect(() => {
		fetch("https://catfact.ninja/facts?limit=5")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch cat facts");
				}
				return response.json();
			})
			.then((data) => {
				setFacts(data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h2>Part 2: Cat Facts</h2>
			<button onClick={() => setShowFacts(!showFacts)}>
				{showFacts ? "Hide cat facts" : "Show cat facts"}
			</button>
			{loading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}
			{!loading &&
				!error &&
				showFacts &&
				facts.map((fact, index) => <p key={index}>{fact.fact}</p>)}
		</div>
	);
};

export default CatFacts;
