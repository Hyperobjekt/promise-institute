import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const Layout5Block = (props) => {
	const title = props["data-title"] ? JSON.parse(props["data-title"]) : null;
	const body = props["data-body"] ? JSON.parse(props["data-body"]) : null;
	
	return (
		<div css={tw`py-24 lg:px-0 -mx-6 lg:mx-gutter bg-light-blue bg-cover bg-center text-gray-blue`}>

			<div css={tw`max-w-screen-lg px-6 lg:mx-auto flex flex-wrap sm:flex-nowrap gap-6`}>

				<div css={tw`md:w-4/12`}></div>

				<div css={tw`md:w-8/12`}>

					{title ?
						<div
							css={tw`text-56 font-bold`}
							dangerouslySetInnerHTML={{ __html: title }}>
						</div>
					: null}

					{body ?
						<div
							css={tw`text-22 font-serif`}
							dangerouslySetInnerHTML={{ __html: body }}>
						</div>
					: null}

				</div>

			</div>

		</div>
	)
};

const layout5Proc = {
	name: "layout-5",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-5"),
	processor: ({ props }) => {
		return {
			component: Layout5Block,
			props: props,
		}
	},
};

export default layout5Proc;

