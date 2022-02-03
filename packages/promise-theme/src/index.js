import Layout from "./components";
import iframeProc from "@frontity/html2react/processors/iframe";
import imageProc from "./processors/image";
import galleryProc from "./processors/gallery";
import paragraphProc from "./processors/paragraph";
import reportProc from "./processors/report";
import learnMoreProc from "./processors/learn-more";
import newsletterProc from "./processors/newsletter";
import menuHandler from "./components/handlers/menu-handler";

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
					await actions.source.fetch(`/menu/${state.theme.menuUrl}/`),
					await actions.source.fetch(`/report/`)
				]);
			},
		},
	},
	libraries: {
		html2react: {
			processors: [
				imageProc,
				galleryProc,
				iframeProc,
				paragraphProc,
				reportProc,
				learnMoreProc,
				newsletterProc
			],
		},
		source: {
			handlers: [
				menuHandler
			],
		},
	},
};
