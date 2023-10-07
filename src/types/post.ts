export interface Post {
  title: { rendered: string }
  content: { rendered: HTMLCollection }
  slug: string
  link: string
  _links: {
    ['wp:featuredmedia']: { href: string }[]
  }
  ['work-types']: number[]
}
