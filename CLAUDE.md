# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BetterMenu Documentation - An Astro-based documentation site built with Starlight, focused on documenting BetterMenu's nutrition and recipe platform concepts.

## Technologies Used
- Starlight (github: withastro/starlight)
- Astro (github: withastro/astro)
- Bun (github: oven-sh/bun)
- Tailwind CSS (github: tailwindlabs/tailwindcss)

## Development Guidelines
### For any conversation with claude, use the following rules:
1. Do not lean on "you are right", the goal is to get best possible answer.
2. Use deepwiki mcp server first by using their `ask_question` tool. Ask as many questions as needed.


## Commands
### Development
- `bun install` - Install dependencies
- `bun run dev` or `bun start` - Start local dev server at `localhost:4321`
- `bun run build` - Build production site (runs `astro check` then builds to `./dist/`)
- `bun run preview` - Preview the built site locally
- `bun run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

## Architecture
### Content Organization
- Documentation content lives in `src/content/docs/`
- Two main content categories (auto-generated in sidebar):
  - **Concepts** (`src/content/docs/concepts/`): Core domain concepts like Recipe, Ingredient, Allergen, Nutrition Facts, etc.
  - **Features** (`src/content/docs/features/`): Feature documentation
- Content files use `.mdx` format (Markdown with JSX components)
- Site configuration in `astro.config.mjs` defines sidebar structure and site metadata

## Content Guidelines
When working with documentation content:
- Follow the existing MDX format with frontmatter (title, description)
- Use Starlight components: `Card`, `CardGrid`, `Aside`
- Maintain consistent structure across concept pages
- Include practical examples with code blocks
- Link to related concepts using `/concepts/[name]` paths
