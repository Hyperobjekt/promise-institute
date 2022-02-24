import React from "react";
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

const socials = {
	"linkedin": LinkedInLogo,
	"twitter": TwitterLogo,
	"youtube": YouTubeLogo,
	"facebook": FacebookLogo,
	"instagram": InstagramLogo
};

const SiteFooter = (x) => {
	
	const items = x.state.source.get(`/menu/${x.state.theme.menuUrl}/`);

	return (
		<footer css={tw`flex flex-col px-12 py-16 bg-med-blue text-white`}>

			<div css={tw`flex`}>

				<div css={tw`w-4/12`}>

					<div css={tw`pb-16`}>
						<Link href="https://law.ucla.edu/" external={true}>
							<img
								css={tw`w-40`}
								src={UclaLawLogo}
								alt={"UCLA Law"} />
						</Link>
					</div>

					<div css={tw`pb-16 text-[32px] font-semibold`}>
						We are the center of human rights education, research, and advocacy at UCLA. Join us!
					</div>

					<ButtonLink href="https://giving.ucla.edu/campaign/Donate.aspx" external={true}>
						Donate to promise
					</ButtonLink>

				</div>

				<div css={tw`w-4/12 ml-auto`}>
					<div css={tw`space-x-2`}>
						{Object.keys(socials).map(key => (
							<Link href={`https://www.${key}.com/`} external={true} key={key}>
								<img
									css={tw`h-4`}
									src={socials[key]}
									alt="" />
							</Link>
						))}
					</div>
				</div>

			</div>

			<div css={tw`text-right`}>
				Copyright {(new Date()).getFullYear()} | Site by <Link href="https://www.hyperobjekt.com/" external={true}>Hyperobjekt</Link>
			</div>

		</footer>
	);
};

export default connect(SiteFooter);