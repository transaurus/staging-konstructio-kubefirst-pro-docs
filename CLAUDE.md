# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Kubefirst Pro documentation site built with Docusaurus 3.6.1. It provides comprehensive documentation for Kubefirst Pro across multiple cloud platforms (AWS, Azure, Civo, Digital Ocean, Google Cloud, k3s, Vultr).

## Commands

### Development

```bash
npm ci                    # Install dependencies (use ci for consistent installs)
npm start                 # Start dev server on 0.0.0.0:8080
npm run build            # Build static site for production
npm run serve            # Serve production build locally
npm run clear            # Clear Docusaurus cache (useful for troubleshooting)
```

### Testing & Validation

```bash
# No unit tests - validation happens via CI checks:
# - Markdown linting (via markdownlint)
# - Build validation (must build without warnings)
# - Commit message validation (conventional commits)
# - Vale style checking
```

## Architecture

### Documentation Structure

- `/docs/` - All documentation content in MDX format
  - `/admin/` - Administrative operations (deprovision, upgrades)
  - `/features/` - Feature documentation (clusters, GitOps, Terraform)
  - `/install/` - Platform-specific installation guides
  - `/overview/` - General information, FAQ, support
  - `/ref/` - Reference documentation
  - `/img/` - Images organized by platform (aws/, azure/, etc.)

### Key Configuration

- `docusaurus.config.js` - Main configuration (site URL, plugins, themes)
- Site URL: `https://kubefirst-pro.konstruct.io`
- Base path: `/docs`
- Search: Typesense integration
- Styling: Tailwind CSS with custom CSS in `/src/css/`

### Content Guidelines

- Use MDX format for documentation files
- Follow conventional commit format: `type(scope): description`
- Images must have descriptive alt text and be theme-aware
- Markdown linting rules: Line length (MD013) and duplicate headers (MD024) are disabled
- Vale style guide is enforced via CI

### Deployment
- Containerized with multi-stage Dockerfile (Node 20 Alpine)
- Helm chart in `/charts/` for Kubernetes deployment
- Serves static content on port 80 with `/docs/` prefix
- CI/CD via GitHub Actions for validation and publishing

## Development Tips

1. When adding new documentation pages, they will be auto-discovered by Docusaurus if placed in the correct directory structure
2. Use `npm run clear` if you encounter caching issues during development
3. All commits must follow conventional commit format or CI will fail
4. Images should be placed in `/docs/img/[platform]/` directories
5. The site uses Tailwind CSS - utility classes are available in MDX files
6. Custom React components can be added to `/src/components/`

## Important Files
- `CONTRIBUTING.md` - Detailed contribution guidelines
- `sidebars.js` - Auto-generated navigation (don't edit manually)
- `.github/workflows/` - CI/CD pipeline definitions

## Documentation Style Guide

When writing or updating documentation, follow these principles:

### Writing Style
- **Brief and direct**: Keep pages short, focused on one topic
- **Simple English**: Use straightforward language, avoid jargon
- **Action-oriented**: Start with verbs, focus on what users need to do
- **Numbered steps**: Use numbered lists for all procedures

### Page Structure
1. **Separate prerequisites**: Create dedicated `*-prereq.md` files
2. **Standard sections**:
   - Summary (brief overview)
   - Prerequisites (link to separate page)
   - Main content with numbered steps
   - What's Next? (next steps)
   - Getting Support (if applicable)
3. **Formatting**:
   - Bold for UI elements: **Create Cluster**
   - Code blocks with language specified
   - Tables for structured data
   - Tips/warnings using Docusaurus admonitions

### Examples of Good Style
- ❌ "Execute the subsequent command"
- ✅ "Run the following command"

- ❌ "Upon successful completion of the installation process"
- ✅ "After installing"

- ❌ Long paragraphs explaining concepts
- ✅ Brief summary, then numbered action steps