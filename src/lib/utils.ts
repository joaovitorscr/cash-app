import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function numberToDollar(n: number) {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(n)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
