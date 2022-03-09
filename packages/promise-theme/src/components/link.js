import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const Link = ({ href, external, className, actions, children }) => {

	const onClick = (e) => {
		e.preventDefault();
		actions.router.set(href);
	};

	return (
		<a href={href}
			target={external ? "_blank" : ""}
			onClick={external ? undefined : onClick}
			className={className}>
			{children}
		</a>
	);
};

export default connect(Link);