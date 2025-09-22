# R\*Squad Leaderboard

A GitHub Pages website that displays a leaderboard for the R\*Squad student ministry invitation challenge.

## Challenge Overview

The 7th grade boys earn points for each person they invite who actually shows up to R\*Squad events:

- **1 point** per person invited who attends
- **Events**: Wednesday night home groups and Sunday night R\*Squad Live

## Live Site

🌐 **Website**: https://[YOUR-USERNAME].github.io/rsquad/

## Features

- **Real-time Leaderboard**: Shows current standings with ranking
- **Clean Design**: Modern, mobile-responsive interface
- **Challenge Info**: Clear explanation of how to earn points
- **Automatic Deployment**: Updates automatically when you push to main branch

## Development

This project uses:

- **React** with TypeScript
- **Vite** for building and development
- **Bun** as package manager
- **GitHub Actions** for automatic deployment

### Local Development

```bash
cd rsquad
bun install
bun run dev
```

### Building for Production

```bash
cd rsquad
bun run build
```

### Updating the Leaderboard

To update student names and points, edit the `students` array in `rsquad/src/App.tsx`:

```typescript
const [students] = useState<Student[]>([
  { id: 1, name: "John Smith", points: 5 },
  { id: 2, name: "Mike Johnson", points: 3 },
  // Add more students here...
]);
```

## Deployment

The site automatically deploys to GitHub Pages when you:

1. Push changes to the `main` branch
2. GitHub Actions builds the site
3. Deploys to `https://[YOUR-USERNAME].github.io/rsquad/`

## Setup Instructions

1. **Enable GitHub Pages**:

   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Update Repository Name**:

   - If you rename the repository, update the `base` path in `rsquad/vite.config.ts`

3. **Customize**:
   - Edit student names and points in `rsquad/src/App.tsx`
   - Customize styling in `rsquad/src/App.css`

---

**Keep encouraging the boys to invite their friends! 🌟**
