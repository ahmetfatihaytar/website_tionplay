/**
 * deploy.mjs — Custom GitHub Pages deploy script (Windows-safe)
 * Avoids gh-pages package ENAMETOOLONG issue on Windows.
 * Copies dist/ into a temp dir, pushes as a fresh orphan commit to gh-pages branch.
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = __dirname
const DIST = path.join(ROOT, 'dist')
const TMP = path.join(ROOT, '.deploy-tmp')
const REPO = execSync('git remote get-url origin', { cwd: ROOT }).toString().trim()
const BRANCH = 'gh-pages'

function run(cmd, cwd = ROOT) {
  console.log(`> ${cmd}`)
  execSync(cmd, { cwd, stdio: 'inherit', shell: true })
}

// Clean tmp
if (fs.existsSync(TMP)) fs.rmSync(TMP, { recursive: true, force: true })
fs.mkdirSync(TMP)

// Copy dist contents to tmp
fs.cpSync(DIST, TMP, { recursive: true })

// Init fresh git repo in tmp and push to gh-pages
run('git init', TMP)
run('git checkout -b gh-pages', TMP)
run('git add -A', TMP)
run('git config user.email "ahmetfatihaytar@gmail.com"', TMP)
run('git config user.name "Tion Play"', TMP)
run('git commit -m "deploy"', TMP)
run(`git push -f ${REPO} gh-pages`, TMP)

// Cleanup
fs.rmSync(TMP, { recursive: true, force: true })
console.log('\n✓ Deployed to gh-pages successfully!')
