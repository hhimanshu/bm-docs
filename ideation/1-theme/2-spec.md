# BetterMenu Docs Improvement Specification
## Inspired by Mintlify Documentation Structure

**Date**: 2025-10-06
**Status**: Draft
**Goal**: Transform BetterMenu docs to match Mintlify's professional structure and navigation patterns

---

## 1. Current State Analysis

### Existing Structure
- **Navigation**: Simple 2-section sidebar (Concepts, Features)
- **Content**: 13 concept pages, 1 feature page, 1 homepage
- **Framework**: Astro + Starlight
- **Styling**: Default Starlight theme with custom logos

### Gaps Identified
- Lacks hierarchical navigation grouping
- No Getting Started or Guides sections
- Missing API Reference/Advanced documentation
- Limited homepage engagement
- No search enhancement
- Concepts are flat (not grouped by theme)

---

## 2. Target State: Mintlify-Inspired Structure

### Navigation Architecture

```
BetterMenu Docs
├── 🚀 Getting Started
│   ├── Introduction
│   ├── Quick Start
│   └── Core Concepts Overview
├── 📚 Concepts
│   ├── Core Concepts
│   │   ├── Account
│   │   ├── Recipe
│   │   ├── Ingredient
│   │   └── Food
│   ├── Nutrition & Diet
│   │   ├── Nutrition Fact
│   │   ├── Nutrient
│   │   ├── Allergen
│   │   ├── Diet
│   │   ├── Claim
│   │   └── Recommended Daily Intakes
│   ├── Measurements & Units
│   │   └── Measurement Unit
│   └── Advanced Concepts
│       └── Dish
├── 📖 Guides
│   ├── Creating Your First Recipe
│   ├── Managing Nutrition Facts
│   ├── Working with Allergens & Diets
│   ├── Account & Organization Setup
│   ├── Sharing & Visibility
│   └── Calculating Yields & Servings
├── 🔧 Reference
│   ├── Data Models
│   ├── Entity Relationships
│   ├── Schema Reference
│   └── Changelog
└── ❓ Resources
    ├── FAQ
    ├── Troubleshooting
    └── Contributing
```

---

## 3. Implementation Plan

### Phase 1: Navigation Restructuring

**File**: `astro.config.mjs`

**Changes**:
```javascript
sidebar: [
  {
    label: 'Getting Started',
    items: [
      { label: 'Introduction', link: '/getting-started/introduction' },
      { label: 'Quick Start', link: '/getting-started/quick-start' },
      { label: 'Core Concepts', link: '/getting-started/core-concepts' }
    ]
  },
  {
    label: 'Concepts',
    collapsed: false,
    items: [
      {
        label: 'Core Concepts',
        collapsed: false,
        items: [
          { label: 'Account', link: '/concepts/account' },
          { label: 'Recipe', link: '/concepts/recipe' },
          { label: 'Ingredient', link: '/concepts/ingredient' },
          { label: 'Food', link: '/concepts/food' }
        ]
      },
      {
        label: 'Nutrition & Diet',
        collapsed: true,
        items: [
          { label: 'Nutrition Fact', link: '/concepts/nutrition-fact' },
          { label: 'Nutrient', link: '/concepts/nutrient' },
          { label: 'Allergen', link: '/concepts/allergen' },
          { label: 'Diet', link: '/concepts/diet' },
          { label: 'Claim', link: '/concepts/claim' },
          { label: 'Recommended Daily Intakes', link: '/concepts/recommended-daily-intakes' }
        ]
      },
      {
        label: 'Measurements & Units',
        collapsed: true,
        items: [
          { label: 'Measurement Unit', link: '/concepts/measurement-unit' }
        ]
      },
      {
        label: 'Advanced Concepts',
        collapsed: true,
        items: [
          { label: 'Dish', link: '/concepts/dish' }
        ]
      }
    ]
  },
  {
    label: 'Guides',
    items: [
      { label: 'Creating Your First Recipe', link: '/guides/creating-first-recipe' },
      { label: 'Managing Nutrition Facts', link: '/guides/managing-nutrition-facts' },
      { label: 'Working with Allergens & Diets', link: '/guides/allergens-and-diets' },
      { label: 'Account & Organization Setup', link: '/guides/account-management' },
      { label: 'Sharing & Visibility', link: '/guides/sharing-recipes' },
      { label: 'Calculating Yields & Servings', link: '/guides/yields-and-servings' }
    ]
  },
  {
    label: 'Reference',
    items: [
      { label: 'Data Models', link: '/reference/data-models' },
      { label: 'Entity Relationships', link: '/reference/relationships' },
      { label: 'Schema Reference', link: '/reference/schema' },
      { label: 'Changelog', link: '/reference/changelog' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'FAQ', link: '/resources/faq' },
      { label: 'Troubleshooting', link: '/resources/troubleshooting' },
      { label: 'Contributing', link: '/resources/contributing' }
    ]
  }
]
```

**Additional Config Enhancements**:
- Enable Starlight's search plugin (Pagefind)
- Add GitHub social link
- Configure table of contents
- Add custom CSS theme

---

### Phase 2: Content Creation

#### 2.1 Getting Started Section
**Directory**: `src/content/docs/getting-started/`

**Files to Create**:

1. **`introduction.mdx`**
   - Platform overview
   - Key features
   - Use cases
   - Who should use BetterMenu

2. **`quick-start.mdx`**
   - Step-by-step first use
   - Creating first recipe
   - Understanding nutrition data
   - Next steps

3. **`core-concepts.mdx`**
   - High-level overview of domain model
   - Recipe → Ingredient → Food flow
   - Nutrition facts basics
   - Links to detailed concept pages

#### 2.2 Guides Section
**Directory**: `src/content/docs/guides/`

**Files to Create**:

1. **`creating-first-recipe.mdx`**
   - Practical walkthrough
   - Adding ingredients with quantities
   - Setting servings and yield
   - Adding instructions
   - Calculating nutrition facts

2. **`managing-nutrition-facts.mdx`**
   - Understanding APS (Amount Per Serving)
   - Auto-calculation from ingredients
   - Manual overrides
   - Nutrition claims

3. **`allergens-and-diets.mdx`**
   - Setting allergens
   - Dietary preferences
   - Auto-detection from ingredients
   - Making claims

4. **`account-management.mdx`**
   - Personal vs organization accounts
   - Inviting team members
   - Brand preferences
   - Social connections

5. **`sharing-recipes.mdx`**
   - Visibility modes (private/public)
   - Generating assets (PDF, QR, links)
   - Social media sharing
   - Customized views

6. **`yields-and-servings.mdx`**
   - Difference between yield and servings
   - Calculating APS
   - Scaling recipes
   - Multiple yield options

#### 2.3 Reference Section
**Directory**: `src/content/docs/reference/`

**Files to Create**:

1. **`data-models.mdx`**
   - Migrate content from `features/index.mdx`
   - Complete entity definitions
   - Field specifications
   - Validation rules

2. **`relationships.mdx`**
   - Entity relationship diagrams
   - Ownership models
   - Cardinality rules
   - Examples

3. **`schema.mdx`**
   - JSON/API schema definitions
   - Data types
   - Required vs optional fields
   - Example payloads

4. **`changelog.mdx`**
   - Version history
   - Breaking changes
   - New features
   - Migration guides

#### 2.4 Resources Section
**Directory**: `src/content/docs/resources/`

**Files to Create**:

1. **`faq.mdx`**
   - Common questions
   - Best practices
   - Limitations
   - Workarounds

2. **`troubleshooting.mdx`**
   - Common issues
   - Error messages
   - Solutions
   - Support contacts

3. **`contributing.mdx`**
   - How to contribute
   - Documentation guidelines
   - Issue reporting
   - Pull request process

---

### Phase 3: Homepage Enhancement

**File**: `src/content/docs/index.mdx`

**Enhancements**:

1. **Hero Section**
   - Better tagline: "Build, Share, and Analyze Nutrition-Rich Recipes"
   - Clear CTAs: "Get Started", "View API Reference", "See Examples"

2. **Feature Showcase** (using CardGrid)
   ```mdx
   <CardGrid stagger>
     <Card title="🍽️ Recipe Management" icon="document">
       Create detailed recipes with ingredients, instructions, and rich metadata
     </Card>
     <Card title="📊 Nutrition Tracking" icon="chart">
       Automatic nutrition fact calculation from ingredient databases
     </Card>
     <Card title="👥 Multi-Account Support" icon="users">
       Personal and organization accounts with team collaboration
     </Card>
     <Card title="🔗 Social Integration" icon="link">
       Share recipes across social platforms with customized views
     </Card>
     <Card title="🧪 Allergen Detection" icon="warning">
       Automatic allergen identification and dietary compliance
     </Card>
     <Card title="📈 Analytics" icon="graph">
       Track recipe performance and social channel engagement
     </Card>
   </CardGrid>
   ```

3. **Quick Navigation Section**
   - Links to Getting Started
   - Popular guides
   - Core concepts

---

### Phase 4: Visual & UX Enhancements

#### 4.1 Enable Search
**File**: `astro.config.mjs`

```javascript
starlight({
  // ... existing config
  components: {
    // Optional: override search component for custom styling
  },
  // Pagefind is enabled by default in Starlight
})
```

#### 4.2 Custom Styling
**Create**: `src/styles/custom.css`

```css
:root {
  /* Mintlify-inspired color scheme */
  --sl-color-accent-low: #e0f2fe;
  --sl-color-accent: #0ea5e9;
  --sl-color-accent-high: #075985;

  /* Custom fonts */
  --sl-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --sl-font-mono: 'Geist Mono', 'Fira Code', monospace;
}

/* Enhanced code blocks */
code {
  font-family: var(--sl-font-mono);
  border-radius: 6px;
}

/* Card hover effects */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

**Import in**: `astro.config.mjs`
```javascript
starlight({
  customCss: ['./src/styles/custom.css']
})
```

#### 4.3 Table of Contents
**Enable in**: `astro.config.mjs`
```javascript
starlight({
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 4
  }
})
```

#### 4.4 Enhanced Components Usage
Update existing content to use more Starlight components:
- `<Aside type="tip">` for helpful hints
- `<Aside type="caution">` for warnings
- `<Aside type="note">` for additional info
- `<Tabs>` for multi-option examples
- `<Code>` for syntax-highlighted code blocks

---

### Phase 5: Content Migration & Reorganization

1. **Move** `features/index.mdx` → `reference/data-models.mdx`
2. **Extract** relationship section → `reference/relationships.mdx`
3. **Update** all cross-references and links
4. **Add** frontmatter to all pages:
   ```yaml
   ---
   title: Page Title
   description: Brief description for SEO
   sidebar:
     order: 1  # for custom ordering
     badge:
       text: New
       variant: tip
   ---
   ```

---

## 4. Technical Requirements

### Dependencies
```json
{
  "@astrojs/starlight": "^0.36.0",  // Already installed
  "astro": "^5.14.1",                // Already installed
  "@astrojs/starlight-tailwind": "latest"  // Optional: for Tailwind support
}
```

### New Directories to Create
```
src/content/docs/
├── getting-started/
├── guides/
├── reference/
└── resources/
```

### Files to Relocate
- `features/index.mdx` → `reference/data-models.mdx`
- `concepts/_concepts.mdx` → Delete or integrate into `getting-started/core-concepts.mdx`

---

## 5. Mintlify-Specific Features to Consider (Future)

### Not Immediately Implementable with Starlight
1. **AI-powered search/assistant** - Requires custom integration
2. **Multi-language support** - Starlight supports i18n, but needs translation files
3. **Versioning** - Requires custom setup
4. **API playground** - Custom component needed

### Can Implement Later
1. **Custom search with Algolia** - Starlight supports this
2. **Analytics integration** - Already have Plausible
3. **Custom themes** - Via CSS customization
4. **Interactive diagrams** - Via Mermaid or similar

---

## 6. Success Metrics

### User Experience
- ✅ Reduced time to find information
- ✅ Clear learning path (Getting Started → Guides → Reference)
- ✅ Improved search discoverability
- ✅ Professional appearance matching industry standards

### Content Organization
- ✅ Logical grouping of related concepts
- ✅ Progressive disclosure (simple → complex)
- ✅ Clear separation of tutorials vs reference
- ✅ Comprehensive coverage of all features

### Technical
- ✅ Build time remains under 10 seconds
- ✅ No breaking changes to existing URLs (redirects if needed)
- ✅ Accessibility standards maintained
- ✅ Mobile responsive

---

## 7. Implementation Timeline

### Week 1: Structure & Navigation
- Update `astro.config.mjs` with new navigation
- Create directory structure
- Set up custom CSS

### Week 2: Getting Started & Guides
- Write all Getting Started content
- Create guide pages with practical examples
- Add visual aids and code samples

### Week 3: Reference & Resources
- Migrate and enhance reference documentation
- Create FAQ and troubleshooting guides
- Add changelog structure

### Week 4: Polish & Enhancement
- Homepage redesign
- Cross-linking optimization
- Visual enhancements
- Testing and QA

---

## 8. Open Questions

1. **API Documentation**: Does BetterMenu have a public API that needs documenting?
2. **Code Examples**: What programming languages/SDKs should be featured?
3. **Versioning**: Will docs need to support multiple product versions?
4. **Authentication**: Is documentation public or behind auth?
5. **Localization**: Is multi-language support needed?

---

## 9. Next Steps

1. ✅ Review this specification
2. ⏳ Approve navigation structure
3. ⏳ Prioritize content sections (what's most important first?)
4. ⏳ Begin implementation (structure → content → polish)
5. ⏳ Gather feedback and iterate

---

**Document Version**: 1.0
**Last Updated**: 2025-10-06
**Author**: Claude Code
**Status**: Awaiting Review
