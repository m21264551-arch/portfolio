const projects = {
  "cnn-depth-width": {
    title: "CNN Depth and Width Study",
    type: "Research",
    summary:
      "Interactive research report on fixed-parameter CNN depth and width tradeoffs across CIFAR datasets.",
    body:
      "This Vercel deployment is the right route for the iso-parameter CNN study: it gives recruiters and collaborators the method, results, and visual context without sending them through a repo first.",
    liveUrl: "https://iso-parameter-cnn-depth-width.vercel.app",
    primaryLabel: "Open live report",
    links: [
      {
        label: "Live report",
        href: "https://iso-parameter-cnn-depth-width.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "pathmnist-histology": {
    title: "PathMNIST Histology Classification",
    type: "Research",
    summary:
      "Model comparison project for histology classification with Random Forest, MLP, and CNN baselines.",
    body:
      "A compact interactive page for the PathMNIST work, with the live route focused on model comparison, results, and the practical classification pipeline.",
    liveUrl: "https://docs-iota-swart.vercel.app",
    primaryLabel: "Open live project",
    links: [
      {
        label: "Live project",
        href: "https://docs-iota-swart.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "histology-denoising": {
    title: "Histology Denoising Pipeline",
    type: "Research",
    summary:
      "Interactive report for a histology image classification and denoising workflow.",
    body:
      "This route points to the deployed report for the histology image pipeline, keeping the classification and denoising work visible as a standalone research project.",
    liveUrl: "https://histology-denoising-report.vercel.app",
    primaryLabel: "Open live report",
    links: [
      {
        label: "Live report",
        href: "https://histology-denoising-report.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "yieldcurve-iq": {
    title: "YieldCurve IQ",
    type: "Analysis",
    summary:
      "An interpretable recession-risk dashboard built around yield-curve signals and model validation.",
    body:
      "YieldCurve IQ should link straight to the live dashboard. It is a finance/data project, so the portfolio card makes the dashboard the primary action rather than burying it behind notes.",
    liveUrl: "https://yieldcurve-iq.vercel.app",
    primaryLabel: "Open dashboard",
    links: [
      {
        label: "Live dashboard",
        href: "https://yieldcurve-iq.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "gradient-lab": {
    title: "Gradient Lab",
    type: "Analysis",
    summary:
      "Interactive gradient descent visualizer for optimizers, learning rates, and loss landscapes.",
    body:
      "This is the live route for the data-visualisation deployment. The card keeps it framed as an analysis and teaching tool rather than a generic experiment.",
    liveUrl: "https://data-visualisation-gamma.vercel.app",
    primaryLabel: "Open visualizer",
    links: [
      {
        label: "Live visualizer",
        href: "https://data-visualisation-gamma.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "disaster-response-ai": {
    title: "AI Disaster-Response Intelligence",
    type: "App",
    summary:
      "A concept app for turning crisis signals into clearer operational intelligence.",
    body:
      "The Vercel deployment is wired as the live destination for this AI concept project. It belongs in the app section because the value is easiest to understand by opening the prototype.",
    liveUrl: "https://ideas-mauve.vercel.app",
    primaryLabel: "Open prototype",
    links: [
      {
        label: "Live prototype",
        href: "https://ideas-mauve.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "chess-analysis": {
    title: "Post-Game Chess Coach",
    type: "Extension",
    summary:
      "Local Stockfish review for Chess.com and Lichess games, packaged as a browser extension.",
    body:
      "The right destination for this project is the Chrome Web Store listing, with GitHub as the code/reference link. A separate Vercel demo is not necessary for an installable browser extension.",
    liveUrl: "https://chromewebstore.google.com/detail/post-game-chess-coach/afddbohlglllnfdjhgdojbdalbfnnbaj",
    primaryLabel: "Install extension",
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/post-game-chess-coach/afddbohlglllnfdjhgdojbdalbfnnbaj",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/m21264551-arch/chess-analyses-extension",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  "cct-app": {
    title: "CCT Chess",
    type: "App",
    summary:
      "An iOS tactics trainer for building the habit of scanning checks, captures, and threats.",
    body:
      "For a published mobile app, the App Store listing should be the primary portfolio link. GitHub is useful as the technical proof link, but users should not have to hunt for the install page.",
    liveUrl: "https://apps.apple.com/cn/app/id6779518928?ct=Tap872981",
    primaryLabel: "Open App Store",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/cn/app/id6779518928?ct=Tap872981",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/m21264551-arch/cctchess-app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  northmate: {
    title: "Northmate",
    type: "App",
    summary:
      "An iPhone friend compass that shows direction, distance, and freshness for accepted friends.",
    body:
      "Northmate is already routed through its custom Vercel domain, so the portfolio points to getnorthmate.com as the public product destination.",
    liveUrl: "https://getnorthmate.com/",
    primaryLabel: "Open website",
    links: [
      { label: "Website", href: "https://getnorthmate.com/", external: true },
      {
        label: "GitHub",
        href: "https://github.com/m21264551-arch/northmate-friend-compass",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
  looksmatched: {
    title: "Looksmatched",
    type: "Personal",
    summary:
      "An invite-only social prototype with a direct landing page for the public concept.",
    body:
      "Looksmatched is wired to its active Vercel production URL as a standalone personal project.",
    liveUrl: "https://looksmatched-silk.vercel.app",
    primaryLabel: "Open project",
    links: [
      {
        label: "Live project",
        href: "https://looksmatched-silk.vercel.app",
        external: true,
      },
      { label: "Back to archive", href: "/#projects" },
    ],
  },
};

const filterButtons = Array.from(document.querySelectorAll(".tab"));
const searchInput = document.querySelector("#project-search");
const cards = Array.from(document.querySelectorAll(".project-card"));
const emptyState = document.querySelector("#empty-state");
const detailSection = document.querySelector("#project-detail");
const detailShell = detailSection.querySelector(".detail-shell");
const detailType = document.querySelector("#detail-type");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailBody = document.querySelector("#detail-body");
const detailLinks = document.querySelector("#detail-links");
const detailPrimaryLink = document.querySelector("#detail-primary-link");

let activeFilter = "all";

function normalize(value) {
  return value.trim().toLowerCase();
}

function applyFilters() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category;
    const keywords = normalize(card.dataset.keywords || "");
    const text = normalize(card.textContent || "");
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !query || text.includes(query) || keywords.includes(query);
    const isVisible = matchesFilter && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

function routeTo(url, replace = false) {
  const nextUrl = new URL(url, window.location.origin);

  if (nextUrl.origin !== window.location.origin) {
    window.location.href = nextUrl.href;
    return;
  }

  const stateMethod = replace ? "replaceState" : "pushState";
  window.history[stateMethod]({}, "", `${nextUrl.pathname}${nextUrl.hash}`);
  renderRoute();
}

function hideProjectDetail() {
  detailSection.hidden = true;
  document.body.classList.remove("is-project-route");
  document.title = "Michael Y - Portfolio";
}

function renderProjectDetail(slug) {
  const project = projects[slug];

  if (!project) {
    routeTo("/", true);
    return;
  }

  detailType.textContent = project.type;
  detailTitle.textContent = project.title;
  detailSummary.textContent = project.summary;
  detailBody.textContent = project.body;
  detailShell.className = `detail-shell detail-${slug}`;
  if (project.liveUrl) {
    detailPrimaryLink.hidden = false;
    detailPrimaryLink.href = project.liveUrl;
    detailPrimaryLink.textContent = project.primaryLabel || "Open live project";
    detailPrimaryLink.target = "_blank";
    detailPrimaryLink.rel = "noreferrer";
    delete detailPrimaryLink.dataset.route;
  } else {
    detailPrimaryLink.hidden = true;
    detailPrimaryLink.removeAttribute("target");
    detailPrimaryLink.removeAttribute("rel");
    detailPrimaryLink.dataset.route = "";
  }
  detailLinks.replaceChildren(
    ...project.links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      if (link.external) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      } else {
        anchor.dataset.route = "";
      }
      return anchor;
    }),
  );

  detailSection.hidden = false;
  document.body.classList.add("is-project-route");
  document.title = `${project.title} - Michael Y`;
  detailSection.scrollIntoView({ block: "start" });
}

function renderRoute() {
  const { pathname, hash } = window.location;
  const match = pathname.match(/^\/projects\/([a-z0-9-]+)$/);

  if (match) {
    renderProjectDetail(match[1]);
    return;
  }

  hideProjectDetail();

  if (hash) {
    document.querySelector(hash)?.scrollIntoView({ block: "start" });
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("a[data-route]");

  if (!routeLink) return;

  event.preventDefault();
  routeTo(routeLink.href);
});

window.addEventListener("popstate", renderRoute);

applyFilters();
renderRoute();
