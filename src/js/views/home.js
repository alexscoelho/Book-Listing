import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Alert from "react-bootstrap/Alert";
import { SearchResult } from "../component/SearchResult/SearchResult.js";
import { Pagination } from "../component/Pagination.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [term, setTerm] = useState("");
	const [formStatus, setFormStatus] = useState({ status: "idle", message: "" });
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	const handleClick = () => {
		event.preventDefault();
		actions.loadSomeData(term).catch(e => setFormStatus({ status: "danger", message: e.message }));
		setTerm("");
	};

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = store.data.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div style={{ marginLeft: 10 }}>
			{formStatus.status == "danger" && <Alert variant="danger">{formStatus.message}</Alert>}
			{/* <!-- You may use this form for your search box --> */}
			<form>
				<input onChange={() => setTerm(event.target.value)} value={term} />
				<button onClick={() => handleClick()}>Search</button>
			</form>

			{/* <!-- You may use this container for your listing --> */}
			<div>
				{currentPosts.map((result, index) => {
					return <SearchResult key={index} result={result} />;
				})}
			</div>
			<Pagination postsPerPage={postsPerPage} totalPosts={store.data.length} paginate={paginate} />
		</div>
	);
};
