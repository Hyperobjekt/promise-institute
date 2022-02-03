import { connect, css, Global, Head, styled } from "frontity";

import globalStyles from "../styles/style.css";
import coreBlocksStyles from "../styles/blocks/core.css";
import themeBlockStyles from "../styles/blocks/theme.css";

import SiteHeader from "./site-header";
import Content from "./content";
import SiteFooter from "./site-footer";

const Layout = ({ state, actions, libraries }) => {
  const site = state.frontity;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return (
    <>
	    <Global styles={css(globalStyles)} />
      <Global styles={css(coreBlocksStyles)} />
      <Global styles={css(themeBlockStyles)} />
      <SiteHeader state={state} post={post} />
      {post ? <Content post={post} /> : null}
      <SiteFooter />
    </>
  );
};

export default connect(Layout);

// const globalStyles = css`
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   }

//   a,
//   a:visited {
//     color: inherit;
//     text-decoration: none;
//   }

//   figure {
//     margin: 0;
//   }
// `;