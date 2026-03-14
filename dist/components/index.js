import { jsx } from 'preact/jsx-runtime';

// src/util/lang.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/util/path.ts
function pathToRoot(slug) {
  let rootPath = slug.split("/").filter((x) => x !== "").slice(0, -1).map((_) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}

// src/i18n/locales/en-US.ts
var en_US_default = {
  propertyDefaults: {
    title: "Untitled"
  }
};

// src/i18n/index.ts
var locales = {
  "en-US": en_US_default
};
function i18n(locale) {
  return locales[locale] || en_US_default;
}
var PageTitle = ({ fileData, cfg, displayClass }) => {
  const locale = cfg?.locale ?? "en-US";
  const title = cfg?.pageTitle ?? i18n(locale).propertyDefaults.title;
  const baseDir = pathToRoot(fileData.slug);
  return /* @__PURE__ */ jsx("h2", { class: classNames(displayClass, "page-title"), children: /* @__PURE__ */ jsx("a", { href: baseDir, children: title }) });
};
PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`;
var PageTitle_default = (() => PageTitle);

export { PageTitle_default as PageTitle };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map