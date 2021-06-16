# react-lib template

[![Test](https://github.com/MatejBransky/react-lib/actions/workflows/test.yml/badge.svg)](https://github.com/MatejBransky/react-lib/actions/workflows/test.yml)
[![Release](https://github.com/MatejBransky/react-lib/actions/workflows/release.yml/badge.svg)](https://github.com/MatejBransky/react-lib/actions/workflows/release.yml)

A basic React+TS repository with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [GitHub Actions workflow](https://github.com/features/actions) configuration to achieve fully automated package publishing to the NPM registry. As a bonus [Renovate bot](https://github.com/marketplace/renovate) keeps dependencies up to date.

## Features:

- code quality tools (Prettier, ESLint)
- TypeScript
- React
- unit tests with Jest
- demo app
- Github Actions (test, release)
- conventional commits (commitlint in precommit hook, semantic release)
- UMD, ES bundles
- deployment of demo app with Vercel

## Create a new repository from this template

Click the `Use this template` button and provide the new repository details.

## Getting Started

Let's start by setting up the new repository:

1. To perform authenticated operations against the npm registry in your workflow, you'll need to store your npm authentication token as a secret `NPM_TOKEN`. For more information, see "[Creating and using encrypted secrets.](https://docs.github.com/en/actions/reference/encrypted-secrets)" ([source](https://docs.github.com/en/actions/guides/publishing-nodejs-packages#publishing-packages-to-the-npm-registry))

1. Update:

   - [ ] `LICENSE` (author name)
   - [ ] `README.md` (short description, getting started, installation),
   - [ ] `package.json` (attributes: name, url, author, main, module, exports),
   - [ ] `vite.config.ts` (`build.lib.name` and external dependencies),
   - [ ] [demo app](./demo),
   - [ ] [tests](./tests)

## How it works

Each push to `main` branch will generate a version number, git tag, Conventional Changelog, release commit, pushing changes to the origin and publish to the NPM registry.
