# Smog Test History — Portfolio Showcase

A one-page portfolio website showcasing the **Smog Test History** iOS app, built with Next.js and hosted on Firebase.

## About the App

Smog Test History is a native iOS utility that uses on-device OCR (Apple Vision framework) to read California license plates and instantly retrieve complete vehicle emissions testing history from DMV databases. The app is available for free on the [App Store](https://apps.apple.com/us/app/smog-test-history/id1458245433).

### App Features

- **On-Device OCR** — Real-time license plate recognition using Apple's Vision framework
- **DMV Data Integration** — Queries official California DMV databases for emissions records
- **Privacy-First** — No license plates or vehicle data are stored
- **Universal** — Runs on iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro
- **Free & Ad-Free** — No cost, no ads, no in-app purchases

## Website Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router and static export |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Utility-first styling |
| Firebase Hosting | Static site deployment |

### iOS App Tech Stack

| Technology | Purpose |
|---|---|
| Swift | Primary language |
| UIKit | UI framework |
| Vision / OCR | Machine learning for plate recognition |
| AVFoundation | Camera capture |
| URLSession | Networking |
| MVC | Architecture pattern |

## Project Structure

```
src/
├── app/            # Next.js App Router (layout, page, styles)
├── components/     # UI components (Header, Hero, Features, etc.)
├── data/           # Centralized app content and copy
└── types/          # Shared TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Static files are output to the `out/` directory.

## Firebase Deployment

### Prerequisites

```bash
npm install -g firebase-tools
firebase login
```

### Deploy

```bash
npm run build
firebase deploy
```

This deploys the `out/` directory to Firebase Hosting.

## Source Code

- **App Source:** [github.com/baberf/SmogApp](https://github.com/baberf/SmogApp)
- **App Store:** [Smog Test History](https://apps.apple.com/us/app/smog-test-history/id1458245433)
