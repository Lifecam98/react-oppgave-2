import { useState } from "react";
import "../styles/CookieClicker.css";
import cookie from "../assets/cookie-1.png";

const CookieClicker = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>Part 1: Cookie Clicker</h2>
			<p>Click the cookie to earn points</p>
			<img
				src={cookie}
				alt="a picture of a cookie"
				onClick={() => setCount(count + 1)}
			/>
			<p>Your have {count} points</p>
			<button onClick={() => setCount(0)}>Reset points</button>
		</>
	);
};

export default CookieClicker;
