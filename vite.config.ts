import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dynamic base for GitHub Pages:
// - User/org site  → andersonmdn.github.io       → base: '/'
// - Project site   → andersonmdn.github.io/repo  → base: '/repo/'
//
// GITHUB_REPOSITORY is set automatically by GitHub Actions as "owner/repo".
// For a user site, either leave GITHUB_REPOSITORY unset or set VITE_BASE=/ manually.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITE_BASE ?? (repo ? `/${repo}/` : '/')

export default defineConfig({
  plugins: [react()],
  base,
})
