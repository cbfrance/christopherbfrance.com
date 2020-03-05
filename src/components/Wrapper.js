import styled from 'styled-components'
import theme from 'theme'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${theme.maxWidth}) 1fr;
  padding: 0 1rem;
`

export default Wrapper
