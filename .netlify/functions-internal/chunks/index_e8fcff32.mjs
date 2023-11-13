export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_b5d08b8a.mjs').then(n => n.b);

export { page };
