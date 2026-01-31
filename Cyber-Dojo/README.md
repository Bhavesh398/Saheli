# Ninja Dojo Guard

A comprehensive AI-powered emotional support and mental wellness platform designed to help users navigate emotional challenges through gamified learning and AI-driven guidance.

## Project Overview

Ninja Dojo Guard combines emotional intelligence with interactive learning experiences. The platform features:

- **Emotional AI System**: Advanced AI that understands and responds to emotional needs
- **SOS Emergency Button**: Quick access to crisis support resources
- **Gamified Learning**: Progression system with ranks (Ninja → Samurai → Sensei)
- **Dashboard**: Real-time emotional tracking and wellness metrics
- **Multi-language Support**: Accessible to users worldwide

## Getting Started

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ninja-dojo-guard

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Development

### Local Development with IDE

Clone this repo and use your preferred IDE (VS Code, WebStorm, etc.) to make changes:

```sh
git clone <YOUR_GIT_URL>
cd ninja-dojo-guard
npm install
npm run dev
```

### Edit Files Directly

- **GitHub**: Navigate to files and click the pencil icon to edit
- **GitHub Codespaces**: Click "Code" → "Codespaces" → "New codespace"
- **Local IDE**: Clone and edit locally, then push changes

## Tech Stack

This project is built with:

- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe JavaScript development
- **React**: UI component library
- **shadcn/ui**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Project Structure

```
src/
├── components/
│   ├── EmotionalAI.tsx      # AI-powered emotional support
│   ├── SOSButton.tsx         # Emergency crisis button
│   └── ui/                   # Reusable UI components
├── pages/
│   ├── Dashboard.tsx         # Main dashboard
│   ├── Index.tsx            # Landing page
│   ├── Landing.tsx          # Welcome page
│   ├── Login.tsx            # Authentication
│   └── NotFound.tsx         # 404 page
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── lib/
│   └── utils.ts             # Utility functions
└── App.tsx                  # Main app component
```

## Features

### Emotional AI
- Conversational AI that understands emotional context
- Personalized responses and guidance
- Crisis intervention support

### SOS Button
- One-click access to emergency resources
- Quick crisis hotline connections
- Immediate support options

### Dashboard
- Emotional wellness tracking
- Progress visualization
- Personal insights and recommendations

## Deployment

### Using Lovable

Simply visit your [Lovable Project](https://lovable.dev/projects/c15f4a23-77fd-4cb0-8e22-7662114f9f85) and click on Share → Publish.

### Custom Deployment

The project can be deployed to any modern hosting platform:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

Build for production:
```sh
npm run build
```

## Custom Domain

To connect a custom domain to your Lovable project:

Navigate to Project > Settings > Domains and click Connect Domain.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository or contact the development team.
