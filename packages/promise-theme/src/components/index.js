import { connect, css, Global, Head, styled } from "frontity";

import gutenbergStyle from "../styles/gutenberg/style.css";

import SiteHeader from "./site-header";
import Content from "./content";

const Theme = ({ state }) => {
  const site = state.frontity;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  console.log(data);

  return (
    <>
	    <Global styles={css(globalStyles)} />
      <Global styles={css(gutenbergStyle)} />
      <SiteHeader state={state} post={post} />
      {post ? <Content post={post} /> : null}
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;