import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";
import getAttrs from "./../utils/getAttrs";
// import image from "@frontity/html2react/processors/image";

const Layout3Block = (props) => {
	const { title, media } = getAttrs(props);
	return (
		<div
			css={tw`py-40 -mx-6 lg:-mx-layout text-gray bg-cover bg-center relative`}
			style={{
				backgroundImage: media ? `url(${media.sizes.full.url})` : ""
			}}>

			<div
				css={tw`w-full h-full flex absolute left-0 top-0 z-10`}
				style={{ backgroundImage: "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}>
			</div>

			<div css={tw`px-6 relative z-20`}>
				<div css={tw`flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-6/12`}></div>
					<div css={tw`md:w-6/12 text-white`}>
						{title ?
							<div
								css={tw`max-w-xl text-50 font-med mb-6`}>
								{title}
							</div>
						: null}
					</div>
				</div>

				<div css={tw`flex flex-wrap sm:flex-nowrap`}>
					<div css={tw`md:w-6/12`}></div>
					<div css={tw`md:w-5/12 text-white`}>
						{props.children ?
							<div css={tw`text-16 font-serif`}>
								{props.children}
							</div>
						: null}
					</div>
				</div>
			</div>

		</div>
	)
};

const layout3Proc = {
	name: "layout-3",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-3"),
	processor: ({ props, children }) => {
		return {
			component: Layout3Block,
			props: { ...props, children },
		}
	},
};

export default layout3Proc;

