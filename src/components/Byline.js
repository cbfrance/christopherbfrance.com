import React from 'react'
import theme from 'theme'
import styled from 'styled-components'
import christopherImage from 'assets/christopher3-overlay-213768.png'
import resume from 'data/resume.json'

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
    <div>
      <p>
        Reflections on business and design strategy by Christopher France, a
        digital product developer living in Oakland, CA.
      </p>

      <div style={{ marginTop: '0.5rem' }}>
        <a href={resume.basics.linkedin}>LinkedIn</a> • 
        <a href="/Christopher-France-Resume.pdf">Resume</a>
      </div>
    </div>
  </Wrapper>
)

export default Byline
