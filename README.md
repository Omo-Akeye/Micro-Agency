# Function Studioo

Function Studioo is a software development agency website built to showcase projects, communicate services clearly, and drive new client inquiries.

## Overview

This site is designed for a siftware agency that combines design and development expertise. It presents a strong brand presence, highlights selected work, and includes a contact flow for project enquiries and call bookings.

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.1.2 |
| React | 19.2.3 |
| Tailwind CSS | 3.4.1 |
| TypeScript | 5.x |
| Deployment | Vercel |

## Features

- Responsive landing pages and project pages
- Contact form for project enquiries
- Call booking flow for discovery calls
- Modern UI built with Tailwind CSS
- Static-friendly setup for fast deployment on Vercel

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/Omo-Akeye/Micro-Agency.git
cd Micro-Agency
```

2. Install dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Build for production.

```bash
npm run build
```

## Contact Form Setup

The contact form uses Web3Forms. Add your access key to `.env.local` before testing locally:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

If you deploy to Vercel, add the same environment variable in the project settings.

## Project Structure

```text
src/
├── app/
│   ├── components/   Reusable UI components
│   ├── layout.tsx    Root layout
│   ├── page.tsx      Home page
│   └── globals.css   Global styles
└── public/           Static assets
```

## Deployment

The site is ready for deployment on Vercel. Make sure the Web3Forms environment variable is configured in your deployment environment before publishing.
