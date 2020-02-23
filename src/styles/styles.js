import styled from 'styled-components'
import 'typeface-spectral' // eslint-disable-line
// import 'typeface-corben' // eslint-disable-line

import theme from 'theme'

const { space } = theme

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${props =>
    typeof props.flexWrap !== 'undefined' ? props.flexWrap : 'nowrap'};

  & > * {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }

  ${props =>
    props.columnOnMobile &&
    `@media all and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      width: 100%;
    }
  }

  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const FinePrint = styled.div`
  font-size: 0.8em;
  color: ${props => (props.color ? props.color : theme.colors.blacks[8])};
`
