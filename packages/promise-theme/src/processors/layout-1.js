import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

const Layout1Block = (props) => {
	const title = props["data-title"] ? JSON.parse(props["data-title"]) : null;
	const body = props["data-body"] ? JSON.parse(props["data-body"]) : null;
	
	return (
		<div css={tw`lg:px-0 my-24 -mx-6 lg:-mx-gutter text-gray`}>

			<div css={tw`max-w-screen-lg px-6 lg:mx-auto`}>
				<div css={tw`flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-4/12`}></div>
					<div css={tw`md:w-8/12`}>
						{title ?
							<div
								css={tw`text-60 font-reg mb-10`}
								dangerouslySetInnerHTML={{ __html: title }}>
							</div>
						: null}
					</div>
				</div>

				<div css={tw`max-w-screen-lg px-6 lg:mx-auto flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-4/12`}></div>
					<div css={tw`md:w-6/12`}>
						{body ?
							<div
								css={tw`text-20 font-serif`}
								dangerouslySetInnerHTML={{ __html: body }}>
							</div>
						: null}
					</div>
				</div>
			</div>
			
		</div>
	)
};

const layout1Proc = {
	name: "layout-1",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-1"),
	processor: ({ props }) => {
		return {
			component: Layout1Block,
			props: props,
		}
	},
};

export default layout1Proc;

