import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonArrowBlack from "../images/button-arrow-black.svg";
import ButtonArrowWhite from "../images/button-arrow-white.svg";

const ButtonLink = ({ href, external, actions, children, style = "default" }) => {

	const styles = {
		default: tw`inline-block px-6 py-3 rounded-full bg-yellow`,
		"white-border": tw`inline-block px-6 py-3 rounded-full border border-solid border-white`,
	};

	const textStyles = {
		default: tw`font-sans text-14 text-black`,
		"white-border": tw`font-sans text-14 text-white`,
	};

	const arrows = {
		default: ButtonArrowBlack,
		"white-border": ButtonArrowWhite,
	}

	const onClick = (e) => {
		e.preventDefault();
		actions.router.set(href);
	};

	return (
		<div css={textStyles[style]}>
			<a href={href}
				target={external ? "_blank" : ""}
				onClick={external ? undefined : onClick}
				className="button"
				css={styles[style]}>

				{children}

				<img
					css={tw`h-2.5 ml-5`}
					src={arrows[style]}
					alt="" />
			</a>
		</div>
	);
};

export default connect(ButtonLink);