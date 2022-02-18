import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import Link from "./link";

const Content = ({ post, state, actions, libraries }) => {
	const Html2React = libraries.html2react.Component;
  return (
  	<main css={tw`max-w-screen-lg px-6 lg:mx-auto text-16`}>
	  	<Html2React html={post.content.rendered} />
  		{/*<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />*/}
  	</main>
  );
};

export default connect(Content);