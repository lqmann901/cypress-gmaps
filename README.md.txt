# Cypress Google Maps Demo

This is a simple end-to-end test automation demo project using [Cypress](https://www.cypress.io/) and the Google Maps JavaScript API.

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

```bash
npm install

## 🚀 Getting Started

### 1. Install dependencies

```bash
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
Here’s a quick look at the tested interface: ![Demo UI](./screenshots/Demo-ui.png)
