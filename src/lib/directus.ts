import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('http://directus.dev.testen2go.de').with(rest());

export default directus;