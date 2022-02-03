import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const ButtonLink = ({ href, external, actions, children, style = "default" }) => {

	const styles = {
		default: tw`px-8 py-2 rounded-full border border-solid`,
		white: tw`px-8 py-2 rounded-full border border-solid border-white`,
	};

	const onClick = (e) => {
		e.preventDefault();
		actions.router.set(href);
	};

	return (
		<a href={href}
			target={external ? "_blank" : ""}
			onClick={external ? undefined : onClick}
			css={styles[style]}>
			{children}
		</a>
	);
};

export default connect(ButtonLink);