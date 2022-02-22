import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const Submit = ({ style = "default", props }) => {

	const styles = {
		default: tw`px-8 py-2 rounded-full border-0 cursor-pointer bg-yellow`,
		white: tw`px-8 py-2 rounded-full border-0 cursor-pointer bg-yellow`,
	};

	return (
		<input type="submit" css={styles[style]} { ...props } />
	);
};

export default connect(Submit);