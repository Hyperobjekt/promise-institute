import React from "react";

const getAttrs = (props) => {
	const attrs = {};
	if(!props || !props.children) return attrs;
	props.children.forEach(c => {
		if(!c.props.hasOwnProperty("data-prop")) return;
		const key = c.props["data-prop"];
		let val;
		if(c.props.hasOwnProperty("data-json")) {
			val = JSON.parse(c.props["data-json"]);
		} else if(c.props.hasOwnProperty("data-value")) {
			val = c.props["data-value"]
		} else {
			val = c.props.children;
		}
		attrs[key] = val;
	});
	return attrs;
}
export default getAttrs;