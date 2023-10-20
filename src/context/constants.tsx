export type PostTypesSlugs = 'pages' | 'works' | 'exhibitions'

export const BASE_URL = '/wp-json/wp/v2/'

export const POST_TYPES: {
  [key: string]: { slug: PostTypesSlugs; title: string; description: string }
} = {
  PAGES: { slug: 'pages', title: 'Pages', description: '' },
  WORKS: {
    slug: 'works',
    title: 'Works',
    description: 'Selection of works made by Fleur Delaville',
  },
  EXHIBITIONS: {
    slug: 'exhibitions',
    title: 'Exhibitions',
    description:
      'Selection of exhibitions featuring works made by Fleur Delaville',
  },
}
