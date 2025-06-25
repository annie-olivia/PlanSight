# PlanSight
PlanSight is a minimalistic **idea sharing platform** built with **Next.js 15**, enabling users to submit and browse pitches. Designed for virtual pitch competitions, PlanSight helps aspiring founders showcase ideas, gain exposure, and explore others' projects—all through a clean, responsive UI.

## Introduction
PlanSight is a virtual stage for innovators. Users can:

- Pitch ideas with multimedia support.
- Browse and filter through various ideas.
- Gain recognition via a curated "Editor Picks" section.
- Explore new ideas through real-time updates powered by Sanity CMS.

## Tech Stack

- **React 19**
- **Next.js 15**
- **TypeScript**
- **Sanity CMS**
- **TailwindCSS**
- **ShadCN UI**

## Features

- Displays latest submitted ideas in real-time using Sanity.
- Secure login via GitHub OAuth for quick onboarding.
- Submit ideas with title, description, category, images/videos.
- Search for pitches or filter by category to explore ideas efficiently.
- View details of each idea, including media and descriptions.
- View a list of pitches submitted by a user.
- Highlight standout pitches via Sanity Studio.
- Tracks how many people viewed a pitch (instead of upvotes).

## Quick Start

### 1. Prerequisites
Ensure you have the following installed: ***Git, Node.js and npm***.
### 2. Clone the Repository
```
git clone https://github.com/annie-olivia/PlanSight.git
cd PlanSight
```
### 3. Install Dependencies
``` npm install```
### 4. Setup Environment variables
Create a **.env.local** file at the root of the project and add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=your_sanity_token

AUTH_SECRET=your_auth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
```
Replace placeholders with your actual credentials from Sanity and GitHub OAuth apps.
### 5. Run the Development Server
```npm run dev```

Open http://localhost:3000 to view it in the browser.


  
