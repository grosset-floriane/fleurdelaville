export const SPACING = 0.8
export const TITLE_FONT = "'Reenie Beanie', sans-serif"
export const BODY_FONT = "'Lato', sans-serif"

export const STYLES_CHECK_BACKGROUND = `
  &.background--light *, &.background--dark {
    color: #000;
  }
  &.background--dark *, &.background--dark {
    color: #fff;
  }`

const writeMq = (bp: number) => `@media (min-width: ${bp}px)`

export const mq = {
  tablet: writeMq(576),
  desktop: writeMq(992),
  largeDesktop: writeMq(1200),
}
