import React from "react";
import PropTypes from "prop-types";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => {
					return (
						<li key={number} className="page-item">
							<a onClick={() => paginate(number)} href="#" className="page-link">
								{number}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	postsPerPage: PropTypes.number,
	totalPosts: PropTypes.number,
	paginate: PropTypes.function
};

Pagination.defaultProps = {
	postsPerPage: 0,
	totalPosts: 0
};
