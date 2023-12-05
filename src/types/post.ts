export interface Post {
  title: { rendered: string }
  content: { rendered: HTMLCollection }
  slug: string
  link: string
  _embedded: {
    ['wp:featuredmedia']: { source_url: string }[]
  }
  ['work-types']: number[]
  acf: {
    description: string
    title_color: string
    mobile_vertical: string
  }
}
