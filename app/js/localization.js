i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init(
    {
      fallbackLng: "en",
      debug: true,
      ns: "backend-app",
      defaultNS: "backend-app",
      backend: {
        loadPath: "../assets/localizedContent/{{lng}}.json",
      },
    },
    function (err, t) {
      // init set content
      updateContent();
    }
  );

// just set some content and react to language changes
function updateContent() {
  // get all dom elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    // get element id
    const id = element.id;
    // translate the value
    element.innerHTML = i18next.t(id);
  });
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
