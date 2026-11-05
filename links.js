/*
 * VXTUBE download links
 * Edit only the URLs below when you publish a new build.
 * Keep this file in the same folder as index.html.
 */
(function () {
  "use strict";

  const DOWNLOAD_LINKS = {
    android: "https://store-eu-par-4.gofile.io/download/web/84216e55-82e5-4df8-b332-05919f0d9b7e/VxTube.apk",
    ios: "https://store-eu-par-6.gofile.io/download/web/f9de5108-c1f5-4864-8da0-1cdc807159ba/VXTUBE.ipa",
    windows: "https://store-eu-par-6.gofile.io/download/web/a985201c-433a-41f6-bc96-074ca9587ab7/VxTube.zip"
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
