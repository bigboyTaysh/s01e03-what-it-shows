import { writeFileSync } from 'node:fs';
import { render } from 'svelte/server';
import Page from './src/routes/kb/incidents/4471-two-causes/+page.svx';

const { head, body } = render(Page as never);
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${head}
</head>
<body>
${body}
</body>
</html>
`;

const out = 'src/routes/kb/incidents/4471-two-causes/as-the-desk-sees-it.html';
writeFileSync(out, html);
console.log(`wrote ${out} (${html.length} bytes)`);
