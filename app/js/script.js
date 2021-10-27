console.log("HELLO");

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init(
    {
      fallbackLng: "en",
      debug: true,
      ns: ["special", "common"],
      defaultNS: "special",
      backend: {
        // load from i18next-gitbook repo
        loadPath:
          "https://raw.githubusercontent.com/i18next/i18next-gitbook/master/locales/{{lng}}/{{ns}}.json",
        crossDomain: true,
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
  document.getElementById("title").innerHTML = i18next.t("title", {
    what: "i18next",
  });
  document.getElementById("saveBtn").innerHTML = i18next.t(
    "common:button.save",
    { count: Math.floor(Math.random() * 2 + 1) }
  );

  document.getElementById("info").innerHTML = `detected user language: "${
    i18next.language
  }"  --> loaded languages: "${i18next.languages.join(", ")}"`;
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
