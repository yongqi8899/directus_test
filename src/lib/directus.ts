import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://direct-green.dev.testen2go.de/').with(rest());

export default directus;