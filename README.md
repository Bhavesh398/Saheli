# 🌸 Saheli (Sakhi Ji) - Women Safety & Empowerment App

> **Empowering women through technology, community, and AI safety tools.**

![Saheli Banner](https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000)

## 📖 About The Project

**Saheli (Sakhi Ji)** is a comprehensive mobile application designed to ensure the safety and empowerment of women. Combining cutting-edge AI technology with essential safety features, Saheli serves as a digital companion that watches out for you. 

From **real-time emergency monitoring** to **deepfake detection** and **legal assistance**, Saheli bridges the gap between technology and personal security.

---

## ✨ Key Features

### 🛡️ Women Safety & SOS
- **Emergency Recording**: Instantly capturing video/audio evidence when an emergency is triggered.
- **SOS Alerts**: Automatically notifies trusted contacts with location and evidence via WhatsApp/SMS.
- **Shake Detection**: Trigger alerts simply by shaking the phone (powered by Capacitor Motion).

### 🕵️‍♀️ Reality Defender (Deepfake Detection)
- **AI Analysis**: Detects deepfakes in images and audio using the **Reality Defender SDK**.
- **Forensic Scanning**: Protect yourself from misinformation and digital identity theft.
- **In-App Verification**: Verify media directly within the app.

### 🤖 AI Chatbot (Sarthi)
- **Legal Assistant**: Powered by **Google Gemini API**, offering legal advice and information on women's rights.
- **24/7 Support**: Always available to answer queries regarding safety, laws, and health.

### 📱 Community & Reels
- **Safe Social Space**: A community feed to share stories, safety tips, and empower others.
- **Reels Viewer**: Short-form video content with a distraction-free interface.

---

## 🛠️ Tech Stack

This project uses a modern, robust technology stack to ensure performance and cross-platform compatibility.

### **Frontend**
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Routing**: [React Router](https://reactrouter.com/)

### **Mobile (Android)**
- **Runtime**: [Capacitor](https://capacitorjs.com/) (v8)
- **Plugins**: Camera, Filesystem, Motion, Geolocation

### **Backend & AI**
- **Server**: Node.js + Express
- **AI Models**: Reality Defender SDK, @xenova/transformers (Local AI)
- **API**: Google Gemini (Generative AI)

### **Utilities**
- **PDF Generation**: jsPDF (for legal docs/reports)
- **Charts**: Recharts

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Android Studio** (for mobile build)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhavesh398/Saheli.git
   cd Saheli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   REALITY_DEFENDER_API_KEY=your_rd_api_key_here
   ```

4. **Run the Web App**
   ```bash
   npm run dev
   ```

---

## 📱 Building for Android

This project uses **Capacitor** to run on Android devices.

1. **Build the web assets**
   ```bash
   npm run build
   ```

2. **Sync with Android project**
   ```bash
   npx cap sync
   ```

3. **Open in Android Studio**
   ```bash
   npx cap open android
   ```
   *From Android Studio, you can run the app on an emulator or a physical device.*

---

## 📂 Project Structure

```
Saheli/
├── android/              # Native Android project files
├── src/
│   ├── components/       # Reusable UI components (shadcn/ui)
│   ├── pages/            # Application pages/screens
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helper functions
│   ├── App.tsx           # Main application entry
│   └── main.tsx          # DOM renderer
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Made with ❤️ for a Safer World</p>
</div>
