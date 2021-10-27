console.log("HELLO");

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
        loadPath: "../app/assets/localizedContent/{{lng}}.json",
      },
    },
    function (err, t) {
      // init set content
      updateContent();
    }
  );

// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
  // get all dom elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    // get element id
    const id = element.id;
    // translate the value
    element.innerHTML = i18next.t(id);
  });

  // document.getElementById("title").innerHTML = i18next.t("title", {
  //   what: "i18next",
  // });
  // document.getElementById("test").innerHTML = i18next.t("test", {
  //   what: "testing",
  // });
  // document.getElementById("saveBtn").innerHTML = i18next.t(
  //   "common:button.save",
  //   { count: Math.floor(Math.random() * 2 + 1) }
  // );

  // document.getElementById("info").innerHTML = `detected user language: "${
  //   i18next.language
  // }"  --> loaded languages: "${i18next.languages.join(", ")}"`;
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
