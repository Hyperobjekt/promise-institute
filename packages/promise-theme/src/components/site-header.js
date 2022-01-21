import React from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro"

import FeaturedImage from "./featured-image";
import Link from "./link";

import Logo from "../images/logo.svg";
import UclaLawLogo from "../images/ucla-law-logo.svg";

const SiteHeader = ({ state, post }) => {
	const featureImage = post.featured_media ? state.source.attachment[post.featured_media] : "";
  return (
    <Header
	    style={{ backgroundImage: `url(${featureImage.source_url})` }}>

    	<TopRow>

    		<div css={tw`text-left`}>
	    		<Burger>
	    			Menu
	    		</Burger>
    		</div>

    		<div css={tw`text-center`}>
			    <Link href="/">
			    	<img
			    		css={tw`w-full`}
			    		src={Logo}
			    		alt={state.frontity.title} />
			    </Link>
		    </div>

		    <div css={tw`text-right`}>
			    <Link href="https://law.ucla.edu/" target="_blank">
			    	<img
			    		css={tw`w-16`}
			    		src={UclaLawLogo}
			    		alt={"UCLA Law"} />
			    </Link>
		    </div>

	    </TopRow>

	    <PageTitle>

	    	{post ?
	    		<h1>
		    		{post.title.rendered}
		    	</h1>
		    : null}

	    </PageTitle>

    </Header>
  );
};

export default connect(SiteHeader);

const Header = styled.header`
	${tw`
		flex
		flex-col
		h-80
		p-16
		bg-cover
		bg-no-repeat
		bg-center
		text-sm
		text-white
	`};
`;

const TopRow = styled.div`
	${tw`
		grid
		grid-cols-[25% 50% 25%]
	`}
`;

const Burger = styled.button`
	${tw`
		border-0
		bg-transparent
		text-sm
		text-white
	`}
`;

const PageTitle = styled.div`
	${tw`
		mt-auto
	`}
`;