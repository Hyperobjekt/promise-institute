import React from "react";
import { connect } from "frontity";

const Link = ({ href, actions, children }) => {

	const onClick = (e) => {
		e.preventDefault();
		actions.router.set(href);
	};

	return (
		<div>
			<a href={href}
				onClick={onClick}>
				{children}
			</a>
		</div>
	);
};

export default connect(Link);