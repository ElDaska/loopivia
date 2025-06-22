// src/utils/generateRapportLoopiviaHTML.js
import { RAPPORT_TEMPLATE } from "./rapportTemplate";

/**
 * Remplace tous les tokens {{token}} du template HTML par les vraies valeurs du rapport.
 * @param {Object} reportData - Les données structurées du rapport.
 * @returns {string} - Le HTML final prêt à être affiché.
 */
export function generateRapportLoopiviaHTML(reportData) {
  let html = RAPPORT_TEMPLATE;

  // Mapping basique : remplace tous les {{token}} par leur valeur dans reportData
  Object.entries(reportData).forEach(([key, value]) => {
    // Pour quickwins ou reco_strategiques, tu dois générer le HTML de la liste/table
    if (key === "quickwins" && Array.isArray(value)) {
      const rows = value.map(win =>
        `<tr>
          <td>${win.action}</td>
          <td>${win.impact}</td>
          <td>${win.effort}</td>
          <td>${win.delai}</td>
        </tr>`
      ).join("");
      html = html.replace("{{quickwins}}", rows);
    } else if (key === "reco_strategiques" && Array.isArray(value)) {
      const items = value.map(item => `<li>${item}</li>`).join("");
      html = html.replace("{{reco_strategiques}}", items);
    } else {
      // Token simple (string, number, etc.)
      html = html.replaceAll(`{{${key}}}`, value);
    }
  });

  // Sécu min : on retire les tokens restants
  html = html.replace(/{{[^}]+}}/g, '');

  return html;
}
