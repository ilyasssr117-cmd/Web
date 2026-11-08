/*
 * VXTUBE download links
 * Edit only the URLs below when publishing a new build.
 * Keep this file next to index.html in the website root.
 */
(function () {
  "use strict";

  const DOWNLOAD_LINKS = {
    android: "https://gofile.io/d/GqSxV5QC",
    ios: "https://gofile.io/d/fRRofpe6",
    windows: "https://gofile.io/d/AQaMOqho"
  };

  const BUTTONS = {
    android: {
      id: "download-android",
      ar: "تنزيل للأندرويد ↓",
      en: "Download for Android ↓"
    },
    ios: {
      id: "download-ios",
      ar: "تنزيل لـ iPhone ↓",
      en: "Download for iPhone ↓"
    },
    windows: {
      id: "download-windows",
      ar: "تنزيل لـ Windows ↓",
      en: "Download for Windows ↓"
    }
  };

  function applyDownloadLinks() {
    const language = document.documentElement.lang === "en" ? "en" : "ar";

    Object.entries(BUTTONS).forEach(([platform, config]) => {
      const button = document.getElementById(config.id);
      const rawUrl = DOWNLOAD_LINKS[platform];
      const url = typeof rawUrl === "string" ? rawUrl.trim() : "";

      if (!button) {
        console.error("VXTUBE: Download button not found:", config.id);
        return;
      }

      button.dataset.ar = config.ar;
      button.dataset.en = config.en;

      if (!/^https:\/\//i.test(url)) {
        button.href = "#downloads";
        button.setAttribute("aria-disabled", "true");
        button.textContent = language === "en" ? "Download link not set" : "رابط التنزيل غير مضبوط";
        return;
      }

      button.href = url;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.removeAttribute("aria-disabled");
      button.style.pointerEvents = "auto";
      button.style.opacity = "";
      button.textContent = language === "en" ? config.en : config.ar;

      console.info("VXTUBE: Download link loaded:", platform);
    });
  }

  // Loaded after the page's language initialization.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDownloadLinks, { once: true });
  } else {
    applyDownloadLinks();
  }
})();
