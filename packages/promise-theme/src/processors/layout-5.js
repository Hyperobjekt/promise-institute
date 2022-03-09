import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";
import getAttrs from "./../utils/getAttrs";
import ButtonLink from "../components/button-link";
import GraphicTorch from "../images/graphics/torch.svg";

const Layout5Block = (props) => {
	const { title, body, graphic } = getAttrs(props);
	let graphicSvg;
	if(graphic === "torch") graphicSvg = GraphicTorch;
	
	return (
		<div css={tw`py-24 -mx-6 lg:-mx-layout bg-light-blue bg-no-repeat text-gray-blue lg:bg-left`}
			style={{
				backgroundSize: "500px",
				backgroundPositionX: "0",
		    backgroundPositionY: "bottom",
				backgroundImage: graphicSvg ? `url(${graphicSvg})` : null
			}}>

			<div css={tw`max-w-screen-lg px-6 lg:mx-auto`}>
				<div css={tw`flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-4/12`}></div>
					<div css={tw`md:w-7/12`}>
						{title ?
							<div css={tw`text-56 font-med mb-10`}>
								{title}
							</div>
						: null}
					</div>
				</div>

				<div css={tw`flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-4/12`}></div>
					<div css={tw`md:w-6/12`}>
						{body ?
							<div css={tw`text-22 font-serif`}>
								{body}
							</div>
						: null}
					</div>
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

