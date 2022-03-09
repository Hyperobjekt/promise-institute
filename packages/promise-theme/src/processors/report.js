import { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";
import getAttrs from "./../utils/getAttrs";
import ButtonLink from "../components/button-link";
// import image from "@frontity/html2react/processors/image";

const ReportBlock = (props) => {
	const { report } = getAttrs(props);
	return (
		<div css={tw`flex`}>
			<div css={tw`md:w-1/12`}></div>

			<div
				css={tw`w-full md:w-10/12 relative my-12 bg-cover bg-center text-white`}
				style={{
					backgroundImage: report && report.image_url ? `url(${report.image_url})` : ""
				}}>
				<div css={tw`pb-0 sm:pb-[45%]`}>
					<div
						css={tw`w-full h-full flex absolute left-0 bottom-0 z-10`}
						style={{ backgroundImage: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}>
					</div>
					<div css={tw`w-full h-full flex relative sm:absolute z-20 p-12`}>
						<div css={tw`md:w-8/12 mt-auto`}>
							{report ?
								<div css={tw`mb-12 text-36 font-med`}>
									{report.title.rendered}
								</div>
							: null}
							<div css={tw`flex`}>
								{report && report.file_url ?
									<ButtonLink
										href={report.file_url}
										external={true}
										style="white-border">
										Read our Report
									</ButtonLink>
								: null}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div css={tw`md:w-1/12`}></div>
		</div>
	)
};

const reportProc = {
	name: "report",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-report"),
	processor: ({ props, children }) => {
		return {
			component: ReportBlock,
			props: { ...props, children },
		}
	},
};

export default reportProc;

