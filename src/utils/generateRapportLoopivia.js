// src/utils/rapportTemplate.js

export const RAPPORT_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Rapport d'Audit – Loopivia</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --loopivia-blue: #2563eb;
      --loopivia-light: #f5f8fa;
      --loopivia-bg: #fff;
      --loopivia-grey: #b0b8c4;
      --loopivia-shadow: 0 3px 30px #2563eb18, 0 1.5px 0 #2563eb08;
    }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      background: var(--loopivia-light);
      color: #212a34;
      min-height: 100vh;
      position: relative;
    }
    .filigrane {
      position: fixed;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-28deg);
      z-index: 0;
      font-size: 8vw;
      font-weight: bold;
      letter-spacing: 18px;
      color: var(--loopivia-blue);
      opacity: 0.10;
      user-select: none;
      pointer-events: none;
      white-space: nowrap;
      text-shadow: 0 1px 10px #2563eb22;
    }
    .rapport-container {
      background: var(--loopivia-bg);
      border-radius: 22px;
      max-width: 880px;
      margin: 48px auto 40px auto;
      box-shadow: var(--loopivia-shadow);
      padding: 46px 44px 38px 44px;
      position: relative;
      z-index: 1;
    }
    .rapport-header {
      text-align: center;
      margin-bottom: 38px;
    }
    .rapport-logo {
      width: 120px;
      margin-bottom: 20px;
    }
    .rapport-title {
      font-size: 2.05rem;
      font-weight: 700;
      color: var(--loopivia-blue);
      margin-bottom: 7px;
    }
    .rapport-date {
      color: var(--loopivia-grey);
      font-size: 1.07rem;
      margin-bottom: 26px;
    }
    .section-title {
      color: var(--loopivia-blue);
      font-size: 1.18rem;
      font-weight: 700;
      margin-top: 42px;
      margin-bottom: 13px;
      border-left: 5px solid var(--loopivia-blue);
      padding-left: 13px;
      letter-spacing: 0.4px;
      background: #f2f7ff;
      border-radius: 6px;
    }
    .section-content {
      font-size: 1.13rem;
      margin-bottom: 14px;
      line-height: 1.64;
      color: #172041;
    }
    .section-content b, .quickwin-table th, .pack-reco {
      color: var(--loopivia-blue);
    }
    .quickwin-table {
      border-collapse: collapse;
      width: 100%;
      margin: 22px 0 16px 0;
      font-size: 1.03rem;
      border-radius: 8px;
      overflow: hidden;
    }
    .quickwin-table th, .quickwin-table td {
      border: 1px solid #2563eb1a;
      padding: 10px 8px;
      text-align: left;
    }
    .quickwin-table th {
      background: #f3f7fb;
      color: var(--loopivia-blue);
      font-weight: 700;
      letter-spacing: 1px;
    }
    .pack-reco {
      background: #2563eb12;
      border-left: 7px solid var(--loopivia-blue);
      border-radius: 11px;
      margin: 28px 0 0 0;
      padding: 20px 19px;
      color: #111;
      font-size: 1.12rem;
      font-weight: 600;
    }
    .footer {
      margin-top: 52px;
      color: var(--loopivia-blue);
      text-align: center;
      font-size: 1.08rem;
      letter-spacing: 0.04rem;
      font-weight: 500;
    }
    .footer-contact {
      color: var(--loopivia-grey);
      font-size: 0.97rem;
      margin-top: 8px;
      letter-spacing: 0.01rem;
    }
    ul, li { margin: 0; padding: 0; }
    ul { padding-left: 16px; margin-bottom: 14px; }
    a { color: var(--loopivia-blue); }
    @media (max-width: 700px) {
      .rapport-container { padding: 14px 2vw 18px 2vw; }
      .rapport-title { font-size: 1.18rem; }
      .rapport-logo { width: 90px; }
      .section-title { font-size: 1.01rem; }
      .pack-reco { padding: 14px 7px; }
    }
  </style>
</head>
<body>
  <div class="filigrane">LOOPIVIA</div>
  <div class="rapport-container" id="rapport-loopivia-html">
    <div class="rapport-header">
      <img src="../assets/logo_rapport.png" class="rapport-logo" alt="Logo Loopivia" />
      <div class="rapport-title">Audit d'Automatisation – Loopivia</div>
      <div class="rapport-date">Généré le {{date}}</div>
    </div>
    <div class="section-title">Résumé</div>
    <div class="section-content">{{resume}}</div>
    <div class="section-title">1. Contexte & Données Clés</div>
    <div class="section-content">
      <b>Entreprise :</b> {{entreprise}}<br/>
      <b>Secteur :</b> {{secteur}}<br/>
      <b>Taille :</b> {{taille}}<br/>
      <b>Outils :</b> {{outils}}<br/>
      <b>Pain points :</b> {{painpoints}}<br/>
      <b>Objectifs :</b> {{objectifs}}<br/>
      <b>Budget :</b> {{budget}}
    </div>
    <div class="section-title">2. Score de Maturité Digitale</div>
    <div class="section-content">
      <b>Score :</b> {{maturite_score}}/5<br/>
      <i>{{maturite_commentaire}}</i>
    </div>
    <div class="section-title">3. Quick Wins Prioritaires</div>
    <table class="quickwin-table">
      <tr>
        <th>Action</th>
        <th>Impact</th>
        <th>Effort</th>
        <th>Délai</th>
      </tr>
      {{quickwins}}
    </table>
    <div class="section-title">4. Recommandations Stratégiques</div>
    <div class="section-content">
      <ul>
        {{reco_strategiques}}
      </ul>
    </div>
    <div class="section-title">5. Roadmap 30-60-90 Jours</div>
    <div class="section-content">
      <b>0-30j :</b> {{roadmap_30}}<br/>
      <b>30-60j :</b> {{roadmap_60}}<br/>
      <b>60-90j :</b> {{roadmap_90}}
    </div>
    <div class="section-title">6. Pack Loopivia Recommandé</div>
    <div class="pack-reco">
      {{pack_reco}}
    </div>
    <div class="footer">
      Loopivia | Rapport confidentiel – Généré par Diop, Consultant IA & Automatisation
      <div class="footer-contact">
        <a href="https://www.loopivia.com" style="color:inherit;text-decoration:underline">www.loopivia.com</a> · 
        <a href="mailto:contact@loopivia.com" style="color:inherit;text-decoration:underline">contact@loopivia.com</a>
      </div>
    </div>
  </div>
</body>
</html>
`
