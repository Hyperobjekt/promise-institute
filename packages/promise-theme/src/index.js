import Layout from "./components";
import iframeProc from "@frontity/html2react/processors/iframe";
import galleryProc from "./processors/gallery";
import headingProc from "./processors/heading";
import paragraphProc from "./processors/paragraph";
import bannerProc from "./processors/banner";
import buttonProc from "./processors/button";
import newsletterProc from "./processors/newsletter";
import reportProc from "./processors/report"
import layout1Proc from "./processors/layout-1";
import layout2Proc from "./processors/layout-2";
import layout3Proc from "./processors/layout-3";
import layout4Proc from "./processors/layout-4";
import layout5Proc from "./processors/layout-5";

import settingsHandler from "./components/handlers/settings";
import menuHandler from "./components/handlers/menu";

export default {
	name: "promise-theme",
	roots: {
		theme: Layout
	},
	state: {
		theme: {
			autoPrefetch: "in-view",
			menu: [],
			menuUrl: "footer",
		},
	},
	actions: {
		theme: {
			beforeSSR: async ({ state, actions }) => {
				await Promise.all([
					actions.source.fetch(`menu/${state.theme.menuUrl}/`),
					actions.source.fetch(`report/`),
					// actions.source.fetch(`promise/settings/`)
				]);
			},
		},
	},
	libraries: {
		html2react: {
			processors: [
				galleryProc,
				iframeProc,
				headingProc,
				paragraphProc,
				bannerProc,
				buttonProc,
				newsletterProc,
				reportProc,
				layout1Proc,
				layout2Proc,
				layout3Proc,
				layout4Proc,
				layout5Proc,
			],
		},
		source: {
			handlers: [
				menuHandler,
				settingsHandler
			],
		},
	},
};
