import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from 'components'

import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-dom'

const StyledSurface = styled(Surface)`
  width: 100vh;
  height: 100vh;
  position: fixed;
  z-index: -1;
`

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
`

const shaders = Shaders.create({
  test: {
    frag: GLSL`
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform float time;
    uniform vec2 resolution;

    vec2 rot(vec2 p, float a) {
      float s = sin(a);
      float c = cos(a);

      return mat2(c, s, -s, c)*p;
    }

    void main( void ) {
      vec2 p = (2.0*gl_FragCoord.xy - resolution)/resolution.y;

      float s = 1000.0;
      float c = 1000.0;
      float z = 1000.0;

      for(int i = 0; i < 4; i++) {
        p = abs(p)/dot(p, p) - vec2(0.9, 0.7);
        p = rot(p.yx, time);
        s = min(s, abs(p.y));
        c = min(c, abs(p.x));
        if(i < 5) z = min(z, length(p));
      }

      vec3 col = mix(vec3(0.6, 0.34, 0.13), vec3(1.0), s);
      col = mix(col, vec3(2.0), smoothstep(0.3, 1.0, z));



      col=vec3(.020/(c*c))*col*col*col-0.4;
      col = mix(col, vec3(18, 8, 0), smoothstep(0.1, 1.0, c))/4.0;
      gl_FragColor = vec4(col, 1);

    }
`,
  },
})

// Simple animation loop
// https://github.com/gre/gl-react/issues/178
// eslint-disable-next-line react/no-multi-comp
export class GradientsLoop extends React.Component {
  animLoop = null

  speed = 0.001

  state = {
    time: 0,
  }

  componentDidMount() {
    this.loop()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animLoop)
  }

  loop = () => {
    this.setState({
      time: this.state.time + this.speed,
    })
    this.animLoop = requestAnimationFrame(this.loop)
  }

  render() {
    const { time } = this.state
    return (
      <Node
        shader={shaders.test}
        uniforms={{
          time,
          resolution: [1200, 300],
        }}
      />
    )
  }
}

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <StyledSurface width={700} height={100}>
      <GradientsLoop />
    </StyledSurface>
    <Wrapper>
      <Hero>
        <h1>Hi.</h1>
        <p>I’m Christopher Blow France.</p>

        <Link to="/contact">
          <Button big>
            <svg
              width="1792"
              height="1792"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link>
      </Hero>
      <Content>
        <SectionTitle>Portfolio</SectionTitle>
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
