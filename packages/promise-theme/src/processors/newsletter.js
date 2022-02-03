import React from "react";
import tw, { styled, css } from "twin.macro";
import Button from "../components/button";

const NewsletterBlock = ({ className }) => {

	return (
		<div className={className} css={tw`my-24`}>
			<div css={tw`text-36 text-center font-bold`}>Subscribe to our e-mail updates</div>
			<div css={tw`flex mt-16`}>
				<div css={tw`flex mx-auto`}>
					<div css={tw`w-80 flex border-solid border-0 border-b mr-12`}>
						<input
							type="email"
							placeholder="Enter your e-mail address"
							css={tw`w-full text-16 border-0`} />
					</div>
					<Button>Subscribe</Button>
				</div>
			</div>
		</div>
	)
};

const newsletterProc = {
	name: "newsletter",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-newsletter"),
	processor: ({ props }) => {
		return {
			component: NewsletterBlock,
			props: {
				className: props.className
			},
		}
	},
};

export default newsletterProc;

