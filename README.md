# Verified Vault Website Frontend

A modern, secure digital vault website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 15 with App Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔧 ESLint and Prettier configured
- 🏗️ Modern project structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Helper utilities
├── styles/              # Additional styles
└── constants/           # Application constants
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Linting:** ESLint
- **Formatting:** Prettier

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request