import tw, { css } from "twin.macro";

import Submit from "../components/submit";

const NewsletterBlock = ({ className }) => {

	const mailchimpU = "f84fdbc56e5c25d5b8071afb0";
	const mailchimpId = "9f6511dd39";

	return (
		<div className={className} css={tw`my-24`}>
			<h2 css={tw`text-36 text-center font-med text-gray`}>
				Subscribe to our e-mail updates
			</h2>
			<div css={tw`flex mt-16`}>
				<div css={tw`flex mx-auto`}>

					{/*<!-- Begin Mailchimp Signup Form -->*/}
					<div id="mc_embed_signup">
						<form
							action={`https://ucla.us19.list-manage.com/subscribe/post?u=${mailchimpU}&amp;id=${mailchimpId}`}
							method="post" id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							css={tw`flex flex-wrap`}
							target="_blank"
							noValidate>

							<div css={tw`flex m-auto`}>
								<label htmlFor="mce-EMAIL" css={tw`sr-only`}>
									Email Address
								</label>
								<div css={tw`w-72 border-solid border-0 border-b mr-12`}>
									<input
										type="email"
										defaultValue=""
										placeholder="Enter your e-mail address"
										css={tw`h-full w-full text-16 border-0`}
										className="required email"
										name="EMAIL"
										id="mce-EMAIL" />
								</div>
								{/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
								 {/*aria-hidden={true}*/}
								<div style={{ position: "absolute", left: "-5000px" }}>
									<input type="text" name={`b_${mailchimpU}_${mailchimpId}`} tabIndex="-1" defaultValue="" />
								</div>

								<Submit
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe" />
							</div>

							<div id="mce-responses" className="clear foot" css={tw`w-full mt-4 text-center`}>
								<div className="response" id="mce-error-response" style={{ display: "none" }}></div>
								<div className="response" id="mce-success-response" style={{ display: "none" }}></div>
							</div>

						</form>
					</div>
					<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
					<script type='text/javascript'>{"(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);"}</script>
					{/*<!--End mc_embed_signup-->*/}

				</div>
			</div>
		</div>
	)
};

const newsletterProc = {
	name: "newsletter",
	priority: 20,
	test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-newsletter"),
	processor: ({ props }) => {
		return {
			component: NewsletterBlock,
			props: {
				className: props.className
			},
		}
	},
};

export default newsletterProc;

