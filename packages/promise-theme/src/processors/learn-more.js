import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const LearnMoreBlock = (props) => {
	const media = props["data-media"] ? JSON.parse(props["data-media"]) : null;
	
	return (
		<div css={tw`flex flex-wrap lg:flex-nowrap gap-6 my-24 bg-[#EAF0F1] mx-auto lg:mx-gutter`}>

			<div css={tw`lg:w-1/12`}></div>

			<div css={tw`w-full lg:w-5/12`}>
				{props.children}
			</div>

			<div css={tw`lg:w-1/12`}></div>

			<div css={tw`w-full lg:w-5/12`}>
				{media ?
					<img
						css={tw`w-full h-auto`}
						src={media.sizes.full.url} />
				: null}
			</div>

		</div>
	)
};

const learnMoreProc = {
	name: "learn-more",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-learn-more"),
	processor: ({ props }) => {
		return {
			component: LearnMoreBlock,
			props: props,
		}
	},
};

export default learnMoreProc;

