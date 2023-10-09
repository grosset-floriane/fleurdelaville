export type PostTypesSlugs = 'pages' | 'works' | 'exhibitions'

export const BASE_URL = '/wp-json/wp/v2/'

export const POST_TYPES: {
  [key: string]: { slug: PostTypesSlugs; title: string }
} = {
  PAGES: { slug: 'pages', title: 'Pages' },
  WORKS: { slug: 'works', title: 'Works' },
  EXHIBITIONS: { slug: 'exhibitions', title: 'Exhibitions' },
}
