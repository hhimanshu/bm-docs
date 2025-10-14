---
title: "BetterMenu Developer Platform"
description: "Release notes for the BetterMenu Developer Platform - API, SDKs, and developer tools"
latest_version: "v0.4.6"
latest_release_date: "October 14, 2025"
---

# BetterMenu Developer Platform

Follow along with updates to the BetterMenu API, SDKs, and developer tools.

---

## October 14, 2025

### Bug Fixes

- Correctly extract header section including H1 and intro
- Fixed awk logic to handle --- separator properly
- Maintains complete document structure

### Validation

- Header preservation now working correctly
- Date sections properly ordered


**[View release v0.4.6 on GitHub](https://github.com/hhimanshu/bm-be/releases/tag/v0.4.6)**

---


## October 14, 2025

### Infrastructure

- Released automated release notes publishing workflow
- Added cross-repository automation for documentation updates
- Implemented Starlight-compatible release notes structure

### Developer Experience

- Added Release Notes section to documentation site
- Improved navigation with dedicated release notes sidebar topic
- Enabled automatic table of contents generation from date-based sections

**[View release v0.4.3 on GitHub](https://github.com/hhimanshu/bm-be/releases/tag/v0.4.3)**

---

## October 7, 2025

### API Features

- Released ingredient search API with cursor-based pagination
- Added API versioning with header-based routing (`X-BetterMenu-Version`)
- Implemented secure cursor encryption with 2-hour TTL using Fernet

### Search Capabilities

- Support for both ingredient and product searches
- Country-specific filtering for localized results
- Relevance boosting to ensure diversity in mixed results

### Documentation

- Published comprehensive API patterns documentation
- Added developer guides for common workflows
- Created architecture documentation with DDD principles

**[View release v0.4.0 on GitHub](https://github.com/hhimanshu/bm-be/releases/tag/v0.4.0)**

---
