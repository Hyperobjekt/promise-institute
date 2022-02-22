import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const LearnMoreBlock = (props) => {
	const media = props["data-media"] ? JSON.parse(props["data-media"]) : null;
	
	return (
		<div css={tw`flex flex-wrap sm:flex-nowrap gap-6 -mx-6 lg:-mx-gutter my-24 bg-[#EAF0F1]`}>

			<div css={tw`sm:w-1/12`}></div>

			<div css={tw`w-full flex justify-center flex-col mx-6 sm:mx-0 sm:w-5/12`}>
				{props.children}
			</div>

			<div css={tw`sm:w-1/12`}></div>

			<div css={tw`w-full sm:w-5/12`}>
				<div
					css={tw`pb-[100%] bg-cover`}
					style={{
						backgroundImage: `url(${media ? media.sizes.full.url : ""})`
					}}>
				</div>
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

