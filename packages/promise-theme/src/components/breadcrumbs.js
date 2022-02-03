import React, { useState, useEffect } from "react";
import { connect } from "frontity";

import Link from "./link";

const Breadcrumbs = ({ state, actions }) => {
	const site = state.frontity;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const paths = [{ title: "Home", url: site.url}];

  paths.push({title: post.title.rendered, url: post.link});
  
  // const [paths, setPaths] = useState([{ title: "Home", url: site.url}]);
  // useEffect(() => {
  // 	setPaths([...paths, {title: post.title.rendered, url: post.link}]);
  // }, []);

	return (
		<div>
			{paths.map((p,i) => <span key={i}><Link href={p.url}>{p.title}</Link>{i < paths.length - 1 ? <span>&nbsp;&rsaquo;&nbsp;</span>: ""}</span>)}
		</div>
	);
};

export default connect(Breadcrumbs);