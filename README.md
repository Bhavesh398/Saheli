# 🌸 Saheli (Sakhi Ji) - Advanced Women Safety & Empowerment Platform

> **"Your Digital Companion for Safety, Justice, and Empowerment."**

**Saheli** is a cutting-edge mobile application engineered to provide holistic safety and empowerment solutions for women. It bridges the gap between immediate physical safety, legal awareness, and protection against digital threats like deepfakes.

---

## 📚 Table of Contents
1. [🌟 Key Features](#-key-features)
2. [🏗️ Tech Stack](#-tech-stack)
3. [📋 Prerequisites](#-prerequisites)
4. [⚙️ Installation & Setup](#-installation--setup)
5. [🚀 Running the Application](#-running-the-application)
6. [📱 Mobile (Android) Build](#-mobile-android-build)
7. [🧠 AI & Backend Services](#-ai--backend-services)
8. [📂 Project Structure](#-project-structure)
9. [🐛 Troubleshooting](#-troubleshooting)

---

## 🌟 Key Features

### 1. � **Smart SOS & Emergency System**
- **Shake-to-Alert**: Uses device motion sensors to trigger an emergency mode when the phone is shaken.
- **Auto-Recording**: Automatically starts recording video and audio evidence in the background.
- **Trusted Contacts**: Alerts pre-set contacts via WhatsApp/SMS with location details.
- **Stealth Mode**: Operates discreetly to ensure user safety during distress.

### 2. �️ **Cyber Defense (Deepfake Detection)**
- **Reality Defender Integration**: A dedicated module to analyze audio and video files for deepfake manipulation.
- **Forensic Scanning**: Upload media to receive an authenticity score, protecting users from misinformation and digital blackmail.

### 3. ⚖️ **Legal & Rights Assistant (Sarthi)**
- **AI Chatbot**: Powered by **Google Gemini**, "Sarthi" provides instant legal advice, explains women's rights in simple language, and guides users through FIR processes.
- **Document Generation**: Helps draft basic legal documents and complaints.

### 4. 🏘️ **Community & Empowerment**
- **The Dojo**: A safe space for learning self-defense and mental resilience.
- **Mentor Chat**: Connect with verified mentors for guidance.
- **Safety Directory**: A map-based directory of nearby police stations, hospitals, and NGOs.
- **Reels**: Educational short-form content focused on safety tips and empowerment stories.

---

## 🏗️ Tech Stack

### **Frontend (Web & Mobile interface)**
- **Framework**: [React](https://react.dev/) v18
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
  - [shadcn/ui](https://ui.shadcn.com/) (Accessible component library)
  - [Lucide React](https://lucide.dev/) (Icons)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Routing**: React Router DOM

### **Mobile Native Layer**
- **Runtime**: [Capacitor](https://capacitorjs.com/) v8
- **Plugins**:
  - `@capacitor/camera`: For evidence recording.
  - `@capacitor/geolocation`: For SOS location tracking.
  - `@capacitor/motion`: For shake detection.
  - `@capacitor/filesystem`: For saving evidence locally.

### **Backend & AI Services**
- **Server**: Node.js + Express (serving the Deepfake detection API).
- **Deepfake Detection**: Reality Defender SDK.
- **GenAI**: Google Gemini API (via frontend integration).
- **Local AI**: `@xenova/transformers` for on-device inference tasks.

---

## � Prerequisites

Before you begin, ensure you have the following installed:

1.  **Node.js**: Version 18.0 or higher.
    -   Download: [nodejs.org](https://nodejs.org/)
    -   Verify: `node -v`
2.  **Git**: For version control.
    -   Download: [git-scm.com](https://git-scm.com/)
3.  **Android Studio** (Optional, but required for building the APK):
    -   Required for Android emulator or physical device testing.

---

## ⚙️ Installation & Setup

Follow these steps to set up the project from scratch.

### 1. Clone the Repository
```bash
git clone https://github.com/Bhavesh398/Saheli.git
cd Saheli
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory. You need keys for the AI services.
```env
# Google Gemini API (For Sarthi Chatbot)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Reality Defender API (For Deepfake Detection)
VITE_REALITY_DEFENDER_KEY=your_reality_defender_key_here
```

---

## 🚀 Running the Application

### Option A: Development Mode (Web Browser)
This runs the frontend interface in your browser. Note that some mobile-only features (like Camera or specialized Sensors) may not work fully in a standard browser.
```bash
npm run dev
```
> Open [http://localhost:8080](http://localhost:8080) (or the port shown in terminal).

### Option B: Backend Server (For Deepfake features)
The deepfake analysis requires a Node.js backend to talk to the Reality Defender SDK.
```bash
node server.js
```
> The server runs on `http://localhost:3001`.

---

## 📱 Mobile (Android) Build

To convert this web app into a native Android application:

1.  **Build the Web Assets**:
    ```bash
    npm run build
    ```
    *This creates a `dist` folder with the compiled React app.*

2.  **Sync with Capacitor**:
    ```bash
    npx cap sync
    ```
    *This copies the `dist` folder into the `android` native project.*

3.  **Open in Android Studio**:
    ```bash
    npx cap open android
    ```

4.  **Run on Device**:
    -   Connect your Android phone via USB.
    -   Enable "USB Debugging" in Developer Options on your phone.
    -   In Android Studio, click the green "Run" (Play) button.

---

## 📂 Project Structure

Here is a roadmap of the codebase:

```text
Saheli/
├── android/               # 🤖 Native Android project files (Gradle, Java, XML)
├── src/                   # ⚛️ Verification Frontend Source Code
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # shadcn/ui primitive components
│   │   ├── EmergencyRecorder.tsx  # SOS Logic
│   │   └── ...
│   ├── pages/             # Main Application Screens
│   │   ├── Index.tsx      # Home Page
│   │   ├── ReportPage.tsx # Incident Reporting
│   │   ├── Dojo...        # Self-defense community pages
│   │   └── ...
│   ├── App.tsx            # Main Route Definitions
│   └── main.tsx           # Entry Point
├── public/                # 🖼️ Static assets (icons, images)
├── server.js              # 🖥️ Node.js Backend for Reality Defender
├── capacitor.config.ts    # ⚙️ Mobile app configuration
├── package.json           # 📦 Dependencies list
└── README.md              # 📖 You are here
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Camera not working** | Ensure you are testing on a mobile device or a browser that supports camera access. Check Android permissions in `AndroidManifest.xml`. |
| **"API Key Missing"** | Check your `.env` file. Ensure variables are named exactly `VITE_GEMINI_API_KEY` etc. Restart the dev server after changing `.env`. |
| **Backend Error (500)** | Ensure `node server.js` is running in a separate terminal if you are using the Deepfake detection feature. |
| **Android Build Fail** | Run `npx cap sync` after every change to your React code before building in Android Studio. |

---

<div align="center">
  <h3>✨ Empowering Women, One Feature at a Time ✨</h3>
  <p>Developed with ❤️ by Bhavesh & Team</p>
</div>
