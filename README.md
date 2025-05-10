#Cover Letter and Cypress Google Maps Demo
---

## 📝 Cover Letter

Dear what3words team,

Thank you for taking the time to review my application.

While I come from a non-IT background, I’ve spent the past five years working as a manual tester for iOS and Android apps, with a strong focus on exploratory testing. I’m actively self-studying automation and recently used Cypress (along with ChatGPT) to build this small demo project, inspired directly by your job description.

I’m passionate about growing into a hybrid tester, and I’m open to a flexible starting salary in exchange for the opportunity to contribute, learn, and grow with the what3words team.

For more details about my background, please see my attached CV.

Warm regards,  
**Le Quang Man**

---

## 🤖 AI Disclosure

This application and demo were built with the help of ChatGPT. I used AI to:

- Understand and apply Cypress for automation
- Draft and refine this README and cover letter
- Troubleshoot Google Maps integration and DOM handling

I iterated based on real feedback and learning goals, and all content was reviewed, customized, and validated by me personally.
---
This is a simple end-to-end test automation demo project using [Cypress](https://www.cypress.io/) and the Google Maps JavaScript API.
## Cypress Google Maps Demo
## 🔍 Features

- Search for a location using a text input
- Geocode the address using Google Maps Geocoding API
- Display a marker on the map at the searched location
- Cypress test to validate that the marker is created successfully

## 🧪 Technologies

- [Cypress v12+](https://docs.cypress.io/)
- Google Maps JavaScript API
- Google Geocoding API
- Localhost server via `http-server`

## 🚀 Getting Started

### 1. Install dependencies

npm install

2. Start the local server
npx http-server public -p 8080
Then open: http://localhost:8080/index.html

3. Run Cypress tests
npx cypress open
✅ Make sure your API key is added in index.html
✅ Enable Maps JavaScript API and Geocoding API
✅ Restrict the key to: http://localhost:8080/*

📸 Demo UI
Here’s a quick look at the tested interface:

![demo-ui](https://github.com/user-attachments/assets/eee9a385-9240-42eb-9fa8-2ef7de849029)
