# 🖼️ Artsy Search WebApp (Flask + AJAX)

A sleek and responsive web application built using Flask and JavaScript (AJAX) that enables users to search for artists and explore their biographies, artworks, and nationalities via the Artsy API. This project combines dynamic client-server interaction with a visually appealing UI and is fully deployed on Google Cloud Platform.

---

## 🚀 Live Demo

🔗 [Access the Website](https://adiartsywt1.wl.r.appspot.com/)

---

## 🔍 Features

- 🎨 **Search Artists** by name using the Artsy API
- 📄 **Dynamic Rendering** of artist cards including:
  - Name
  - Nationality
  - Birth and Death Years
  - Biography snippet
- 🔁 Real-time results using **AJAX and JSON**
- 🧠 Handles edge cases (e.g., missing images or info)
- ☁️ Fully deployed on **Google Cloud Platform (GCP)**

---

## 🧰 Tech Stack

| Layer        | Technology                      |
|--------------|----------------------------------|
| Backend      | Python, Flask                    |
| Frontend     | HTML, CSS, JavaScript (AJAX)     |
| APIs         | [Artsy API](https://developers.artsy.net/) |
| Deployment   | Google Cloud Platform (GCP)      |

---

## 🖥️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/vepamanintiadityaraj/Artsy-Search-WebApp-Flask.git
cd Artsy-Search-WebApp-Flask

# 2. Install dependencies
pip install -r requirements.txt

# 3. Set up credentials
# Create a credentials.json file or export variables manually (Artsy API token)

# 4. Run the Flask app
python backend.py

# 5. Open in browser
http://127.0.0.1:5000/
