import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const Layout2Block = (props) => {
	const title = props["data-title"] ? JSON.parse(props["data-title"]) : null;
	
	return (
		<div css={tw`py-24 lg:px-0 -mx-6 lg:-mx-gutter bg-med-blue text-white`}>

			<div css={tw`max-w-screen-lg px-6 lg:mx-auto flex flex-wrap sm:flex-nowrap gap-6`}>

				<div css={tw`md:w-6/12`}>

					{title ?
						<>
							<h2
								css={tw`text-80 font-bold`}
								dangerouslySetInnerHTML={{ __html: title }}>
							</h2>
							<div css={tw`w-60 h-2 mt-12 bg-white`}></div>
						</>
					: null}

				</div>

				<div css={tw`md:w-6/12`}>

					{props.children ?
						<div css={tw`text-20 font-serif`}>
							{props.children}
						</div>
					: null}

				</div>

			</div>

		</div>
	)
};

const layout2Proc = {
	name: "layout-2",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-2"),
	processor: ({ props }) => {
		return {
			component: Layout2Block,
			props: props,
		}
	},
};

export default layout2Proc;

