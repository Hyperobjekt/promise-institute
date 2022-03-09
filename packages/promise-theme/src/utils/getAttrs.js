import React from "react";

const getAttrs = (props) => {
	const attrs = {};
	console.log(props);
	if(!props || !props.children) return attrs;
	(Array.isArray(props.children) ? props.children : [props.children]).forEach(c => {
		const key = c.props["data-prop"];
		if(!key) return;
		let val;
		if(c.props["data-json"]) {
			val = JSON.parse(c.props["data-json"]);
		} else if(c.props["data-value"]) {
			val = c.props["data-value"]
		} else {
			val = c.props.children;
		}
		attrs[key] = val;
	});
	return attrs;
}
export default getAttrs;