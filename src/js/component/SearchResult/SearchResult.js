import React, { useContext, useState } from "react";
import "./SearchResult.scss";
import PropTypes from "prop-types";

export const SearchResult = ({ result }) => {
	return (
		<div className="list-result">
			<img src={result.imageUrl} />
			<div className="description">
				<h6>{result.title}</h6>
				<p>{`by ${result.authorName}`}</p>
			</div>
		</div>
	);
};

SearchResult.propTypes = {
	result: PropTypes.array
};

SearchResult.propTypes = {
	result: []
};
