// Préfixe un chemin avec le BASE_URL de l'environnement (pour GitHub Pages)
export function siteUrl(path: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
