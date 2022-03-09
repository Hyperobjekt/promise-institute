import { connect, css, Global, Head, styled } from "frontity";
import tw from "twin.macro";
import globalStyles from "./../styles/style.css";
import coreBlocksStyles from "./../styles/blocks/core.css";
import themeBlockStyles from "./../styles/blocks/theme.css";
import SiteHeader from "./site-header";
import Content from "./content";
import SiteFooter from "./site-footer";
const Layout = ({ state, actions, libraries }) => {
	const site = state ? state.frontity : null;
	const data = state && site ? state.source.get(state.router.link) : null;
	const post = state && data && data.type && data.id ? state.source[data.type][data.id] : null;
	return (
		<>
			<Head>
				<title>{state.frontity.title} | {state.frontity.description}</title>
				<meta name="description" content={state.frontity.description} />
				<html lang="en" />
				<link rel="canonical" href={state.router.link} />
				<link rel="stylesheet" href="https://use.typekit.net/hbk5jvf.css" />
			</Head>
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