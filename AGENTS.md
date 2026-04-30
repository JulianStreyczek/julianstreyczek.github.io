# Repository Guidelines

## Project Structure & Module Organization

This is a Jekyll academic website derived from al-folio. Site-wide settings live in `_config.yml`. Content collections are organized by purpose: `_pages/` for standalone pages, `_posts/` for dated blog posts, `_projects/` for project entries, `_news/` for announcements, and `_books/` for book content. Templates and reusable UI live in `_layouts/` and `_includes/`; styling is split between `_sass/` and `assets/css/`. Data-driven content is in `_data/` and `_bibliography/`, while media and downloads live under `assets/`. Generated output goes to `_site/` and should not be edited directly.

## Build, Test, and Development Commands

- `docker compose pull` then `docker compose up`: run the site locally with the maintained al-folio image at `http://localhost:8080`.
- `docker compose up --build`: rebuild the Docker image before serving.
- `bundle exec jekyll serve`: serve with a native Ruby/Bundler setup.
- `bundle exec jekyll build`: build the static site into `_site/`; this is the main smoke test before publishing.
- `npx prettier . --check`: verify formatting used by CI.
- `npx prettier . --write`: format Markdown, Liquid, YAML, CSS, and related files.

## Coding Style & Naming Conventions

Use Prettier as the source of truth, including Liquid via `@shopify/prettier-plugin-liquid`. Keep YAML and Liquid indentation consistent with neighboring files, generally two spaces for nested data and templates. Name posts as `YYYY-MM-DD-slug.md`; project files use ordered prefixes such as `_projects/01_causalforests.md`. Prefer lowercase, hyphenated slugs and descriptive asset names under `assets/img/`, `assets/pdf/`, and related folders.

## Testing Guidelines

There is no dedicated unit test suite. Validate changes with `bundle exec jekyll build` and, for visual/content changes, serve locally and check affected pages. Run `npx prettier . --check` before committing. For accessibility-sensitive UI changes, use the existing Axe workflow or a local scan when practical.

## Commit & Pull Request Guidelines

Recent history uses short, imperative or descriptive commit messages such as `Update CV`, `add post: causal forests`, and `fix header styling, delete unrelated content`. Keep commits focused on one content or code change. Pull requests should include a concise description, affected pages or assets, linked issues when applicable, and screenshots for visible layout changes. Confirm local build and formatting status in the PR notes.

## Agent-Specific Instructions

Do not edit `_site/` directly. Preserve user-authored content and avoid broad theme refactors unless requested. When changing publications, CV data, or social links, update the matching `_data/`, `_bibliography/`, include, and metadata files together so generated pages stay consistent.
