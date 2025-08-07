import errors from './errors'

export const dev = process.env.NODE_ENV === 'development'
export const vercelPreview = process.env.VERCEL_ENV === 'preview'

if (!process.env.NEXT_PUBLIC_BASE_URL) {
	console.warn(errors.missingBaseUrl)
}

export const BASE_URL = dev
	? 'http://localhost:3000'
	: process.env.NEXT_PUBLIC_BASE_URL || 'https://your-production-domain.com'

export const BLOG_DIR = 'blog'
