# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BetterMenu Documentation - An Astro-based documentation site built with Starlight, focused on documenting BetterMenu's nutrition and recipe platform concepts.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` or `npm start` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site (runs `astro check` then builds to `./dist/`)
- `npm run preview` - Preview the built site locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

### Deployment
- Deployment to Firebase Hosting happens automatically on merge to `main` branch via GitHub Actions
- The workflow runs `npm ci && npm run build` before deployment
- Build output directory is `dist/` (configured in `firebase.json`)

## Architecture

### Content Organization
- Documentation content lives in `src/content/docs/`
- Two main content categories (auto-generated in sidebar):
  - **Concepts** (`src/content/docs/concepts/`): Core domain concepts like Recipe, Ingredient, Allergen, Nutrition Facts, etc.
  - **Features** (`src/content/docs/features/`): Feature documentation
- Content files use `.mdx` format (Markdown with JSX components)
- Site configuration in `astro.config.mjs` defines sidebar structure and site metadata

### Domain Model
The documentation describes a nutrition/recipe platform with these core concepts:
- **Recipe**: Combination of ingredients and instructions with metadata (servings, yield, time, allergens, nutrition facts)
- **Ingredient**: Combination of Food, Quantity, and Measurement Unit
- **Food**: Base ingredient item
- **Measurement Unit**: Units for measuring ingredients (supports international variations)
- **Nutrition Fact**: Nutritional information per serving
- **Allergen**: Food allergens
- **Diet**: Dietary preferences/restrictions
- **Claim**: Food claims (e.g., "Vegan", "Gluten-Free")
- **Yield vs Servings**: Yield is total quantity (grams, cups), Servings is number of portions
- **Amount Per Serving (APS)**: Quantity of food per portion

### Starlight Framework
- Uses Astro with the Starlight integration for documentation
- Content schema defined in `src/content/config.ts` using Starlight's `docsSchema`
- Custom branding with light/dark logos in `src/assets/`
- Edit links point to `https://github.com/bettermenu/documentation/edit/main`
- Includes Plausible analytics tracking for `docs.bettermenu.live`

## Content Guidelines

When working with documentation content:
- Follow the existing MDX format with frontmatter (title, description)
- Use Starlight components: `Card`, `CardGrid`, `Aside`
- Maintain consistent structure across concept pages
- Include practical examples with code blocks
- Link to related concepts using `/concepts/[name]` paths
