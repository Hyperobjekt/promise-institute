import React from "react";

import Link from "./link";

const Content = ({ post }) => {

  return (
  	<main>
  		<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  	</main>
  );
};

export default Content;