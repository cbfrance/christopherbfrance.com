import React from 'react'
import theme from 'theme'
import styled from 'styled-components'
import christopherImage from 'assets/christopher3-overlay-213768.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  p {
    font-size: 0.9rem;
    color: ${theme.colors.blacks[7]};
  }
`

const BylineImageStyles = styled.div`
  --image-size: 40px;

  border: 1px solid ${theme.colors.blacks[4]};
  display: inline-block;
  border-radius: var(--image-size);
  margin-right: 1rem;
  img {
    margin: 2px;
    width: var(--image-size);
    display: block;
    border-radius: 30px;
  }
`

const Byline = () => (
  <Wrapper>
    <BylineImageStyles>
      <img src={christopherImage} alt="Christopher France" />
    </BylineImageStyles>
    <p>
      Reflections on business and design strategy by Christopher France, a
      digital product developer living in Oakland, CA.
    </p>
  </Wrapper>
)

export default Byline
