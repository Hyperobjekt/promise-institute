import React, { useEffect } from "react";
import { connect } from "frontity";
import tw, { styled, css } from "twin.macro";

import Link from "./link";
import ButtonLink from "./button-link";

import UclaLawLogo from "../images/ucla-law-logo.svg";
import LinkedInLogo from "../images/linkedin-logo.svg";
import TwitterLogo from "../images/twitter-logo.svg";
import YouTubeLogo from "../images/youtube-logo.svg";
import FacebookLogo from "../images/facebook-logo.svg";
import InstagramLogo from "../images/instagram-logo.svg";

const socialLogos = {
	"linkedin": LinkedInLogo,
	"twitter": TwitterLogo,
	"youtube": YouTubeLogo,
	"facebook": FacebookLogo,
	"instagram": InstagramLogo
};

const SiteFooter = ({ actions, libraries, state }) => {
	
	useEffect(() => {
    actions.source.fetch("/promise/settings");
  }, []);
	const socials = { ...state.source.get("/promise/settings").social };

	return (
		<footer css={tw`w-full bg-med-blue text-white p-12`}>

			<div css={tw`max-w-screen-lg h-full mt-auto lg:mx-auto flex flex-wrap`}>

				<div css={tw`w-full md:w-6/12`}>

					<div css={tw`pb-16`}>
						<Link href="https://law.ucla.edu/" external={true}>
							<img
								css={tw`w-40`}
								src={UclaLawLogo}
								alt={"UCLA Law"} />
						</Link>
					</div>

					<div css={tw`pb-16 text-[32px] font-med`}>
						We are the center of human rights education, research, and advocacy at UCLA. Join us!
					</div>

					<ButtonLink href="https://giving.ucla.edu/campaign/Donate.aspx?SiteNum=5&fund=63893o&code=m-22930" external={true}>
						Donate to Promise
					</ButtonLink>

				</div>

				<div css={tw`w-full md:w-6/12 mt-16 md:mt-0 ml-auto flex flex-col`}>
					<div css={tw`flex md:justify-end space-x-3`}>
						{Object.keys(socials).map(key => (
							<Link href={socials[key]} external={true} key={key}>
								<img
									css={tw`h-4`}
									src={socialLogos[key]}
									alt="" />
								<span css={tw`sr-only`}>
									{key}
								</span>
							</Link>
						))}
					</div>
					<div css={tw`mt-auto pt-4 text-10 md:text-right`}>
						Copyright {(new Date()).getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;Site by <Link href="https://www.hyperobjekt.com/" external={true}>Hyperobjekt</Link>
					</div>
				</div>

			</div>

		</footer>
	);
};

export default connect(SiteFooter);