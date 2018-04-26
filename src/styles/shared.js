import styled from 'styled-components'

export const ContentColumn = styled.div`
  margin: 0 auto 1em;
  max-width: 960px;
  padding: 1em;
`

export const color = {
  biancaWhite: '#fefefb',
}

const fontStack = {
  primary: "'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'sans-serif'",
  mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', monospace",
}

export const font = {
  display2: `500 45px/54px ${fontStack.primary};`,
  display1: `500 34px/40px ${fontStack.primary};`,
  headline: `500 24px/32px ${fontStack.primary};`,
  subheading2: `500 20px/32px ${fontStack.primary};`,
  subheading1: `500 20px/28px ${fontStack.primary};`,
  body2: `400 16px/24px ${fontStack.primary};`,
  body1: `400 16px/20px ${fontStack.primary};`,
  caption: `400 13px/16px ${fontStack.primary};`,
  mono: `400 13px/16px ${fontStack.mono};`,
}

export const Title = styled.h2`
  font: ${font.subheading1};
`

export const TitlePrimary = styled.h1`
  font: ${font.subheading2};
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`

export const DateStamp = styled.div`
  font: ${font.caption};
  text-transform: uppercase;
  margin-bottom: 1em;
`

export const PostPreview = styled.div`
  margin-bottom: 2em;
  overflow: hidden;
  padding: 1em;
`

export const Tag = styled.span`
  font: ${font.caption};
  font-weight: 800;
  padding: 2px 4px;
`

export const Card = styled.div`
  background-color: ${color.biancaWhite};
`
