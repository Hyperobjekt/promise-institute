import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const Button = ({ children, style = "default" }) => {

	const styles = {
		default: tw`px-8 py-2 rounded-full border-0 cursor-pointer bg-yellow`,
		white: tw`px-8 py-2 rounded-full border-0 cursor-pointer bg-yellow`,
	};

	const onClick = (e) => {
		e.preventDefault();
		actions.router.set(href);
	};

	return (
		<button
			// onClick={external ? undefined : onClick}
			css={styles[style]}>
			{children}
		</button>
	);
};

export default connect(Button);