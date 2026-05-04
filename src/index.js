const REDIRECTS = {
  "go.fdl.is": "https://go.fideliscu.org",
  "parish.fdl.is": "https://parish.fideliscu.org",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = REDIRECTS[url.hostname];

    if (target) {
      return Response.redirect(`${target}${url.pathname}${url.search}`, 301);
    }

    // assets.fdl.is — serve static files
    return env.ASSETS.fetch(request);
  },
};
