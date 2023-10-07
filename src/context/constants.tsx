export type PostTypesSlugs = 'pages' | 'works' | 'exhibitions'

export const POST_TYPES: {
  [key: string]: { slug: PostTypesSlugs; title: string }
} = {
  PAGES: { slug: 'pages', title: 'Pages' },
  WORKS: { slug: 'works', title: 'Works' },
  EXHIBITIONS: { slug: 'exhibitions', title: 'Exhibitions' },
}
