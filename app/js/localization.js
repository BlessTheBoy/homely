i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    ns: "backend-app",
    defaultNS: "backend-app",
    backend: {
      loadPath: "assets/localizedContent/{{lng}}.json",
    },
  })
  .then(function (err, t) {
    // init set content
    updateContent();
    i18next.on("languageChanged", () => {
      updateContent();
    });
  });

// just set some content and react to language changes
function updateContent() {
  // get all dom elements with data-i18n attribute
  let docs = document.querySelectorAll("[data-i18n]");
  docs.forEach((element) => {
    // console.log(element);
    // get element id
    const locator = element.dataset.i18n;
    // translate the value
    element.innerHTML = i18next.t(locator);
  });
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

const languageSelector = document.querySelector("#language");

languageSelector.addEventListener("change", () => {
  changeLng(languageSelector.value);
});
