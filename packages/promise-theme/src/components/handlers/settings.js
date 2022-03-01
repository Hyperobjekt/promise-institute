const menuHandler = {
  name: "settings",
  priority: 10,
  pattern: "/promise/settings",
  func: async ({ link, params, state, libraries }) => {
    // const { slug } = params;
    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/promise/settings/`,
    });
    // Parse the JSON to get the object
    const json = await response.json();
    Object.assign(state.source.data[link], json);
  },
};

export default menuHandler;