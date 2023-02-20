import React from 'react'
import styled from 'styled-components'
import { NavButton } from 'styles/styles'
import theme from 'theme'

const Wrapper = styled.div`
  display: flex;
  /* margin: 6rem auto 0 auto; */
`

const Prev = styled(NavButton)`
  align-items: flex-start;
  @media all and (min-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    left: 8px;
    top: 50vh;
  }
`

const Next = styled(NavButton)`
  margin-left: auto;
  text-align: right;
  align-items: flex-end;
  @media all and (min-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    right: 8px;
    top: 50vh;
  }
`

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev to={prev.fields.slug}>
        <span>Previous</span>
        {prev.frontmatter.title}
      </Prev>
    )}

    {next && (
      <Next to={next.fields.slug}>
        <span>Next</span>
        {next.frontmatter.title}
      </Next>
    )}
  </Wrapper>
)

export default PrevNext
