import React from "react";
// import { connect, css, styled } from "frontity";
import tw, { styled, css } from "twin.macro";

const HeadingBlock = (props) => {
	const { className, parent, children, component } = props;
	const Heading = `${component}`;
	return (
		parent ?
			<Heading className={className}>{children}</Heading>
		: <div css={tw`flex flex-wrap`}>
				<div css={tw`md:w-1/12`}></div>
				<div css={tw`md:w-8/12`}>
					<Heading className={className}>{children}</Heading>
				</div>
			</div>
	)
};

const headingProc = {
	name: "heading",
	priority: 20,
	test: ({ component }) => ["h1","h2","h3","h4","h5","h6"].includes(component),
	processor: ({ props, parent, component }) => {
		return {
			component: HeadingBlock,
			props: { ...props, parent, component },
		}
	},
}

export default headingProc;

