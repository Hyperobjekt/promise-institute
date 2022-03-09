import React from "react";
// import { connect, css, styled } from "frontity";
import tw, { styled, css } from "twin.macro";

const ParagraphBlock = (props) => {
	const { className, children, parent } = props;
	const styles = {
		default: tw`mr-auto mb-4 max-w-lg font-serif`,
		"2xl": tw`mr-auto mb-4 max-w-2xl font-serif`
	};

	let style = "default";
	if(className && (className.includes("-64-") || className.includes("-80-"))) {
		style = "2xl";
	}

	return (
		parent ?
			<p className={className}>
			{/*<p className={className} css={styles[style]}>*/}
			 {children}
			</p>
		: <div css={tw`flex flex-wrap`}>
				<div css={tw`md:w-1/12`}></div>
				<div css={tw`md:w-4/12`}>
					<p className={className} css={styles[style]}>
					 {children}
					</p>
				</div>
			</div>
	)
};

const paragraphProc = {
	name: "paragraph",
	priority: 20,
	test: ({ component }) => component === "p",
	processor: ({ props, parent }) => {
		return {
			component: ParagraphBlock,
			props: { ...props, parent },
		}
	},
}

export default paragraphProc;

