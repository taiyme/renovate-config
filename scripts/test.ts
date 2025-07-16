import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

async function main() {
  const cwd = fileURLToPath(new URL('..', import.meta.url));

  const files = fs.glob(['**/*.json', '!**/node_modules/**'], { cwd });

  const targetFiles: string[] = [];

  for await (const entry of files) {
    if (await isRenovateConfigureFile(resolve(cwd, entry))) {
      targetFiles.push(entry);
    }
  }

  execSync(
    `pnpm exec renovate-config-validator --strict ${targetFiles.join(' ')}`,
    {
      stdio: 'inherit',
    },
  );
}

async function isRenovateConfigureFile(path: string) {
  if (path.includes('/node_modules/')) return false;
  if (!path.endsWith('.json')) return false;

  try {
    const json = JSON.parse(await fs.readFile(path, { encoding: 'utf8' }));
    // @ts-expect-error キャッチするので安全
    return json.$schema === 'https://docs.renovatebot.com/renovate-schema.json';
  } catch {
    return false;
  }
}

await main();
