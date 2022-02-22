import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const LogoBlock = (props) => {
	return (
		<div
			className="has-light-blue-background-color"
			css={tw`flex flex-wrap sm:flex-nowrap gap-6 my-24 -mx-6 py-24 lg:-mx-gutter`}>

			<div
				className="has-gray-blue-color"
				css={tw`w-full sm:w-5/12 ml-auto`}>
				{props.children}
			</div>

		</div>
	)
};

const logoProc = {
	name: "logo",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-logo"),
	processor: ({ props }) => {
		return {
			component: LogoBlock,
			props: props,
		}
	},
};

export default logoProc;

