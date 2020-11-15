import React, { useContext, useState } from "react";
import "./SearchResult.scss";
import PropTypes from "prop-types";

export const SearchResult = () => {
	return (
		<div className="list-result">
			<img src="https://via.placeholder.com/150C/O https://placeholder.com/" />
			<div>
				<h6>Humans of New York</h6>
				<p>by Brandom Stanton</p>
			</div>
		</div>
	);
};

SearchResult.propTypes = {
	data: PropTypes.array
};

SearchResult.propTypes = {
	data: []
};
