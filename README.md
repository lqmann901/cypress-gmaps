#Cover Letter and Cypress Google Maps Demo
---

## 📝 Cover Letter

Dear Hiring Team,

Thank you for reviewing my application.

I was excited to see your opening for the QA Engineer position. While I may not yet meet 100% of the technical requirements—especially in automation and backend testing—I bring 5 years of experience testing Android and iOS apps in production environments, with strong skills in exploratory testing, UI/UX validation, and cross-platform consistency.

Coming from a non-IT background, I’ve faced challenges transitioning to automation, but I’ve remained persistent—learning independently (with the help of AI tools like ChatGPT) and building hands-on projects. I’m actively working toward becoming a hybrid QA and would love the opportunity to grow with your team.

I’m also open to a lower initial salary in exchange for a steep learning curve and long-term value creation. Please find more details in my CV, and feel free to review my automation demo in this repo.

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
