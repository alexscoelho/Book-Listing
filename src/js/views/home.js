import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Alert from "react-bootstrap/Alert";
import { SearchResult } from "../component/SearchResult/SearchResult.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [term, setTerm] = useState();
	const [formStatus, setFormStatus] = useState({ status: "idle", message: "" });

	const handleClick = () => {
		event.preventDefault();
		actions.loadSomeData(term).catch(e => setFormStatus({ status: "danger", message: e.message }));
	};
	return (
		<div>
			{formStatus.status == "danger" && <Alert variant="danger">{formStatus.message}</Alert>}
			{/* <!-- You may use this form for your search box --> */}
			<form>
				<input onChange={() => setTerm(event.target.value)} />
				<button onClick={() => handleClick()}>Search</button>
			</form>

			{/* <!-- You may use this container for your listing --> */}

			<div>
				{store.data.map((result, index) => {
					return <SearchResult key={index} result={result} />;
				})}
			</div>
		</div>
	);
};
