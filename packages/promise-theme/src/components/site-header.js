import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import FeaturedImage from "./featured-image";
import Link from "./link";
import Breadcrumbs from "./breadcrumbs";

import Logo from "../images/logo.svg";
import UclaLawLogo from "../images/ucla-law-logo.svg";

const SiteHeader = ({ state, post }) => {
	// const site = state.frontity;
 //  const data = state.source.get(state.router.link);
 //  const post = state.source[data.type][data.id];
 //  console.log(post);
	const featureImage = post && post.featured_media ? state.source.attachment[post.featured_media] : "";
	return (
		<header
			css={tw`min-h-[85vh] flex flex-col px-6 md:px-12 bg-cover bg-no-repeat bg-center text-sm text-white`}
			style={featureImage ? { backgroundImage: `url(${featureImage.source_url})` } : null}>

			<div css={tw`flex flex-wrap py-6 gap-4`}>

				<div css={tw`order-2 flex-1 text-center`}>
					<Link href="/">
						<img
							css={tw`w-full max-h-8`}
							src={Logo}
							alt={state.frontity.title} />
					</Link>
				</div>

				<div css={tw`order-3 md:order-1 w-20 hidden md:block text-left`}>
					{/*<div css={tw`border-0 bg-transparent text-sm text-white`}>
						Menu
					</div>*/}
				</div>

				<div css={tw`order-1 md:order-3 w-full md:w-20 text-center md:text-right`}>
					<Link href="https://law.ucla.edu/" external={true}>
						<img
							css={tw`w-20`}
							src={UclaLawLogo}
							alt={"UCLA Law"} />
					</Link>
				</div>

			</div>

			<div css={tw`w-full max-w-screen-lg h-full py-12 mt-auto lg:mx-auto`}>
				<div css={tw`pt-24`}>

					{/*{post ? <Breadcrumbs post={post} /> : null}*/}

					{post ?
						<h1 css={tw`text-80 m-0`}>
							{post.title.rendered}
						</h1>
					: null}

				</div>

			</div>

		</header>
	);
};

export default connect(SiteHeader);