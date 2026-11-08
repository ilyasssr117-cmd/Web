/*
 * VXTUBE download links
 * Edit only the URLs below when you publish a new build.
 * Keep this file in the same folder as index.html.
 */
(function () {
  "use strict";

  const DOWNLOAD_LINKS = {
    android: "https://gofile.io/d/GqSxV5QC",
    ios: "https://gofile.io/d/fRRofpe6",
    windows: "https://gofile.io/d/AQaMOqho"
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
