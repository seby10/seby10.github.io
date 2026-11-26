import es, { datos } from './es';
import en from './en';

export type Lang = 'es' | 'en';
export const textos = (lang: Lang) => (lang === 'en' ? en : es);
export { datos };
