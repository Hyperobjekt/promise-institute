import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const Layout4Block = (props) => {
	const title = props["data-title"] ? JSON.parse(props["data-title"]) : null;
	const media = props["data-media"] ? JSON.parse(props["data-media"]) : null;
	
	return (
		<div css={tw`my-24`}>

			<div css={tw`flex flex-wrap`}>

				<div css={tw`md:w-5/12 ml-auto`}>
					{media ? 
						<img
							css={tw`w-full h-auto`}
							src={media.sizes.medium.url} />
					 : null}
				</div>

			</div>

			<div css={tw`flex flex-wrap`}>

				<div css={tw`md:w-8/12`}>

					{title ?
						<div
							css={tw`text-80 font-bold mb-12`}
							dangerouslySetInnerHTML={{ __html: title }}>
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
	processor: ({ props }) => {
		return {
			component: Layout4Block,
			props: props,
		}
	},
};

export default layout4Proc;

