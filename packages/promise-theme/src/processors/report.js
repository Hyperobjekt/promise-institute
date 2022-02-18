import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const ReportBlock = (props) => {
	const report = props["data-report"] ? JSON.parse(props["data-report"]) : null;
	return (
		<div
			css={tw`w-full relative my-12 pb-0 sm:pb-[45%] bg-cover bg-center text-white relative`}
			style={{
				backgroundImage: report.thumb ? `url(${report.thumb.source_url})` : ""
			}}>

			<div
				css={tw`w-full h-full flex absolute left-0 bottom-0 z-10`}
				style={{ backgroundImage: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}>
			</div>

			<div css={tw`w-full h-full flex relative sm:absolute z-20 p-8`}>
				<div css={tw`md:w-8/12 mt-auto`}>
					{report ?
						<div css={tw`mb-12 text-36 font-semibold`}>
							{report.title.rendered}
						</div>
					: null}
					<div css={tw`flex`}>
						<ButtonLink
							href="https://giving.ucla.edu/campaign/Donate.aspx"
							external={true}
							style="white-border">
							Read our Report
						</ButtonLink>
					</div>
				</div>
			</div>

		</div>
	)
};

const reportProc = {
	name: "report",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-report"),
	processor: ({ props }) => {
		return {
			component: ReportBlock,
			props: props,
		}
	},
};

export default reportProc;

