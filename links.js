/*
 * VXTUBE download links
 * Edit only the URLs below when you publish a new build.
 * Keep this file in the same folder as index.html.
 */
(function () {
  "use strict";

  const DOWNLOAD_LINKS = {
    android: "https://av-f2l-bot.avbotz26.workers.dev/84267?hash=AgADKB",
    ios: "https://store-eu-par-6.gofile.io/download/web/f9de5108-c1f5-4864-8da0-1cdc807159ba/VXTUBE.ipa",
    windows: "https://av-f2l-bot.avbotz26.workers.dev/84269?hash=AgADKR"
  };

  const BUTTONS = {
    android: "download-android",
    ios: "download-ios",
    windows: "download-windows"
  };

  function applyDownloadLinks() {
    Object.entries(BUTTONS).forEach(([platform, elementId]) => {
      const button = document.getElementById(elementId);
      const url = DOWNLOAD_LINKS[platform];
      if (!button || typeof url !== "string" || !/^https?:\/\//i.test(url)) return;
      button.href = url.trim();
      button.target = "_blank";
      button.rel = "noopener noreferrer";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDownloadLinks, { once: true });
  } else {
    applyDownloadLinks();
  }
})();
