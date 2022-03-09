import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";
import getAttrs from "./../utils/getAttrs";
import ButtonLink from "../components/button-link";

const Layout4Block = (props) => {
	const { title, media } = getAttrs(props);
	return (
		<div css={tw`py-24`}>

			<div css={tw`flex flex-wrap`}>
				<div css={tw`md:w-5/12 ml-auto`}>
					{media && media.sizes && media.sizes.medium ? 
						<img
							css={tw`w-full h-auto`}
							src={media.sizes.medium.url} />
					 : null}
				</div>
			</div>

			<div css={tw`flex flex-wrap`}>
				<div css={tw`md:w-8/12`}>
					{title ?
						<div css={tw`text-80 font-med mb-12`}>
							{title}
						</div>
					: null}

					{props.children ?
						<div css={tw`text-16 font-serif`}>
							{props.children}
						</div>
					: null}
				</div>
			</div>

		</div>
	)
};

const layout4Proc = {
	name: "layout-4",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-4"),
	processor: ({ props, children }) => {
		return {
			component: Layout4Block,
			props: { ...props, children },
		}
	},
};

export default layout4Proc;

