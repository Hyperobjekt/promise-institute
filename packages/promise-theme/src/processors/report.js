import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const ReportBlock = (props) => {
	const report = props["data-report"] ? JSON.parse(props["data-report"]) : null;
	return (
		<div className="" css={tw`flex flex-wrap sm:flex-nowrap gap-6 my-24`}>

			<div css={tw`hidden lg:visible w-1/12`}></div>

			<div css={tw`w-full sm:w-5/12`}>
				{report.thumbnail ?
					<img
						css={tw`w-full h-auto`}
						src={report.thumbnail.source_url} />
				: null}
			</div>

			<div css={tw`w-full sm:w-5/12 flex flex-col`}>

				<div css={tw`my-auto`}>

					<div css={tw`mb-4 uppercase text-16 font-light`}>
						Report
					</div>

					{report ?
						<div css={tw`mb-12 text-36 font-semibold`}>
							{report.title.rendered}
						</div>
					: null}

					<ButtonLink href="https://giving.ucla.edu/campaign/Donate.aspx" external={true}>
						Read More
					</ButtonLink>

				</div>

			</div>

			<div css={tw`hidden lg:visible w-1/12`}></div>

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

