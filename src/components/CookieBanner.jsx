import { useEffect, useCallback, useMemo } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

// Configuration centralisée
const CONFIG = {
  GTM_ID: "GTM-KLIGNFKR", // ← Ton vrai ID GTM ici
  COOKIE_NAME: "loopivia_cookies",
  PRIVACY_URL: "/privacy"
};

// Injecte dynamiquement Google Tag Manager dans <head>
const loadGTM = (gtmId) => {
  if (window.gtmLoaded || document.getElementById("gtm-script")) return;

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);
  window.gtmLoaded = true;
};

const useCookieConsent = () => {
  const initializeGTM = useCallback(() => {
    const consentValue = getCookieConsentValue(CONFIG.COOKIE_NAME);
    if (consentValue === "true" && CONFIG.GTM_ID !== "GTM-XXXXXXXX") {
      loadGTM(CONFIG.GTM_ID);
    }
  }, []);

  useEffect(() => {
    initializeGTM();
  }, [initializeGTM]);

  return { initializeGTM };
};

export default function CookieBanner() {
  const { initializeGTM } = useCookieConsent();

  // Gestionnaires d'événements
  const handleAccept = useCallback(() => {
    setTimeout(initializeGTM, 100);
  }, [initializeGTM]);

  // Optionnel : logic si tu veux retirer certains cookies/balises si decline
  const handleDecline = useCallback(() => {}, []);

  const bannerStyles = useMemo(() => ({
    container: {
      background: "linear-gradient(135deg, #181f32 0%, #1e293b 100%)",
      color: "#fff",
      fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      zIndex: 10000,
      padding: "16px 20px",
      boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    },
    acceptButton: {
      color: "#fff",
      background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
      fontWeight: "600",
      borderRadius: "8px",
      border: "none",
      padding: "10px 20px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 2px 8px rgba(14, 165, 233, 0.3)"
    },
    declineButton: {
      color: "#fff",
      background: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
      fontWeight: "600",
      borderRadius: "8px",
      border: "none",
      padding: "10px 20px",
      fontSize: "14px",
      cursor: "pointer",
      marginLeft: "12px",
      transition: "all 0.2s ease",
      boxShadow: "0 2px 8px rgba(100, 116, 139, 0.3)"
    },
    link: {
      color: "#38bdf8",
      textDecoration: "underline",
      fontWeight: "500"
    }
  }), []);

  if (CONFIG.GTM_ID === "GTM-XXXXXXXX") {
    console.warn("⚠️ Google Tag Manager ID non configuré !");
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="J'accepte tous les cookies"
      declineButtonText="Cookies essentiels uniquement"
      enableDeclineButton
      cookieName={CONFIG.COOKIE_NAME}
      expires={365}
      sameSite="strict"
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={bannerStyles.container}
      buttonStyle={bannerStyles.acceptButton}
      declineButtonStyle={bannerStyles.declineButton}
      contentStyle={{
        margin: 0,
        fontSize: "14px",
        lineHeight: "1.5"
      }}
      ariaAcceptLabel="Accepter tous les cookies"
      ariaDeclineLabel="Refuser les cookies non essentiels"
    >
      <div style={{ maxWidth: "800px" }}>
        <strong>🍪 Gestion des cookies</strong>
        <br />
        Nous utilisons des cookies essentiels pour le fonctionnement du site et Google Tag Manager (statistiques, analytics) pour améliorer votre expérience si vous acceptez.{" "}
        <a
          href={CONFIG.PRIVACY_URL}
          style={bannerStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulter notre politique de confidentialité
        </a>
      </div>
    </CookieConsent>
  );
}
