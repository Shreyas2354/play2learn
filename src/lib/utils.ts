import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLanguageText(
  lang: string,
  item: any,
  key: string,
  fallbackKey?: string
) {
  const langKey = `${key}_${lang}`;
  if (item && typeof item === 'object' && item[langKey]) {
    return item[langKey];
  }
  if (item && typeof item === 'object' && item[key] && item[key][lang]) {
    return item[key][lang];
  }
  return item?.[key]?.[lang] || item?.[key]?.['en'] || item?.[key] || item?.[fallbackKey || ''] || '';
}
