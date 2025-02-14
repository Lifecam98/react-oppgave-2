import { useState } from "react";
import "../styles/Users.css";

const mockData = [
	{ username: "Ola Normann", email: "ola.normann@norge.no" },
	{ username: "Torleif", email: "torleif@kodehode.no" },
	{ username: "Jan Egil", email: "jan.egil@kodehode.no" },
	{ username: "Sander", email: "sander@kodehode.no" },
];

const Users = () => {
	const [users, setUsers] = useState(mockData);
	const [newUsername, setNewUsername] = useState("");
	const [newEmail, setNewEmail] = useState("");

	const handleAddUser = () => {
		if (newUsername && newEmail) {
			setUsers([...users, { username: newUsername, email: newEmail }]);
			setNewUsername("");
			setNewEmail("");
		}
	};

	return (
		<>
			<h2>Part 3: Users</h2>
			<button onClick={handleAddUser} className="submit-button">
				Legg til bruker
			</button>
			<div className="user-form">
				<input
					type="text"
					placeholder="Brukernavn"
					value={newUsername}
					onChange={(e) => setNewUsername(e.target.value)}
				/>
				<input
					type="email"
					placeholder="E-post"
					value={newEmail}
					onChange={(e) => setNewEmail(e.target.value)}
				/>
			</div>
			<ul>
				{users.map((user, index) => (
					<li key={index}>
						{user.username} - {user.email}
					</li>
				))}
			</ul>
		</>
	);
};

export default Users;
