// src/hooks/useCalendly.js
import { useEffect } from "react";

const useCalendly = (isVisible) => {
  useEffect(() => {
    if (!isVisible) return;

    const scriptId = "calendly-widget";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Réinitialise le widget si le script est déjà chargé
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
    }
  }, [isVisible]);
};

export default useCalendly;
