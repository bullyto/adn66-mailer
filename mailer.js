import fetch from "node-fetch";

const {
  ONESIGNAL_APP_ID,
  ONESIGNAL_API_KEY,
  FROM_EMAIL,
  TEST_EMAIL
} = process.env;

async function sendTestEmail() {
  if (!ONESIGNAL_APP_ID || !ONESIGNAL_API_KEY || !FROM_EMAIL || !TEST_EMAIL) {
    console.error("Missing env vars. Check GitHub Secrets.");
    process.exit(1);
  }

  const payload = {
    app_id: ONESIGNAL_APP_ID,
    include_email_tokens: [TEST_EMAIL],
    email_subject: "🍹 Apéro de Nuit 66 — Mail test",
    email_body: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
        <h1 style="margin:0 0 10px 0">Mail test ✅</h1>
        <p style="margin:0 0 14px 0">Si tu lis ceci, c'est parfait : le domaine et l'envoi fonctionnent.</p>
        <a href="https://www.aperodenuit.com"
           style="display:inline-block;padding:14px 22px;
           background:#ff9800;color:#fff;border-radius:10px;
           text-decoration:none;font-weight:bold">
           🎯 Ouvrir Apéro de Nuit
        </a>
        <p style="margin:16px 0 0 0;color:#666;font-size:12px">
          Astuce : remplace le lien du bouton par ton lien exact (ex : ton jeu).
        </p>
      </div>
    `,
    email_from_name: "Apéro de Nuit 66",
    email_from_address: FROM_EMAIL
  };

  const res = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${ONESIGNAL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("RESULT:", data);
}

sendTestEmail();
