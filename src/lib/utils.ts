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
  if (item && typeof item === 'object' && langKey in item) {
    return item[langKey];
  }
  return item?.[key] || item?.[fallbackKey || ''] || '';
}
