import React from "react";
import tw, { styled, css } from "twin.macro";

const GalleryBlock = (props) => {
	return (
		<div className={props.className} css={tw`flex my-8`}>
			<div css={tw`w-1/12`}></div>
			<div css={tw`md:w-11/12 lg:w-8/12 grid grid-cols-4 gap-6`}>
				{props.children}
			</div>
		</div>
	)
};

const galleryProc = {
	name: "gallery",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-gallery"),
	processor: ({ props, parent }) => {
		return {
			component: GalleryBlock,
			props: { ...props, parent },
		}
	},
};

export default galleryProc;

