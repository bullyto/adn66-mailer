# ADN66 Mailer (OneSignal Email Test)

Ce dépôt envoie **un email de test** via OneSignal grâce à **GitHub Actions**.

## 1) Secrets GitHub à créer
Settings → Secrets and variables → Actions → **Repository secrets**

- `ONESIGNAL_APP_ID` : (ton OneSignal App ID)
- `ONESIGNAL_API_KEY` : (la clé API que tu viens de créer)
- `FROM_EMAIL` : ex `contact@aperos.net`
- `TEST_EMAIL` : ex `apero.nuit.du.66@gmail.com`

## 2) Lancer le test
Onglet **Actions** → **Send Test Email ADN66** → **Run workflow**.

Si tout est OK, tu reçois le mail sur `TEST_EMAIL`.
