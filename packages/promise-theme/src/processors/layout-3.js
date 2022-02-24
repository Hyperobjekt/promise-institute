import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";
// import image from "@frontity/html2react/processors/image";

const Layout3Block = (props) => {
	const title = props["data-title"] ? JSON.parse(props["data-title"]) : null;
	const media = props["data-media"] ? JSON.parse(props["data-media"]) : null;

	return (
		<div
			css={tw`py-40 lg:px-0 -mx-6 lg:-mx-gutter text-gray bg-cover bg-center relative`}
			style={{
				backgroundImage: media ? `url(${media.sizes.full.url})` : ""
			}}>

			<div
				css={tw`w-full h-full flex absolute left-0 top-0 z-10`}
				style={{ backgroundImage: "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}>
			</div>

			<div css={tw`flex flex-wrap sm:flex-nowrap gap-6 px-6 relative z-20`}>

				<div css={tw`md:w-6/12`}></div>

				<div css={tw`md:w-6/12 text-white`}>

					{title ?
						<div
							css={tw`max-w-xl text-50 font-med mb-6`}
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

const layout3Proc = {
	name: "layout-3",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-layout-3"),
	processor: ({ props }) => {
		return {
			component: Layout3Block,
			props: props,
		}
	},
};

export default layout3Proc;

