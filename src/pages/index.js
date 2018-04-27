import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, DateStamp, PostPreview, Tag, Card, GridItem } from '../styles/shared'

const LandingPage = styled.div`
  color: white;
  font: ${font.caption};
  a {
    color: white;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 1em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 2fr 1fr 1fr 2fr 1fr 1fr;
  grid-template-areas:
    'A0 A0 A0 A1'
    'A2 A2 A3 A4'
    'A2 A2 A3 A5'
    'A2 A2 A3 A5'
    'A6 A7 A8 A8'
    'A6 A10 A8 A8'
    'A9 A10 A11 A12';
`
const TitleLanding = styled.div`
  color: white;
  font: ${font.subheading2};
  padding: 6rem 0;
`

const FeaturedImage = styled.div`
  img {
    margin-bottom: 0;
  }
`

export default function Index({ data }) {
  return (
    <LandingPage>
      <TitleLanding>Unthinkingly</TitleLanding>
      <Grid>
        <GridItem area="A0" />
        <GridItem area="A1">
          <Link to="blog">Posts</Link>
        </GridItem>
        <GridItem area="A2">
          <img width="100%" src="/static/images/cb.jpg" alt="Chris" />
        </GridItem>
        <GridItem area="A3">
          <p>
            We did an introductory <a href="http://wiki.openstreetmap.org/wiki/Mapping_party">mapping party</a> and I explained some of my
            appreciation for OSM, particularly the <a href="http://wiki.openstreetmap.org/wiki/WikiProject_Palestine_Gaza">Gaza mapping</a> ....
          </p>

          <p>
            This, I think, is understandable. That's the tragic part, I suppose: We are humans running on hardware that is incredibly out of date: the
            human brain. We have evolved, biologically and culturally, to get by, to survive, and to take care of our own. We now have influence that
            far exceed out capacity to understand. We experience sometimes deep existential disconnect from each other; there are simple too many
            "Others" to care about; we are atomized the most just when we are bumping into each other the hardest. Even the concept of philanthropy, I
            would say, is in some way fundamentally inhuman in this sense. We were not born to care about others until we have taken care of our own.
          </p>
        </GridItem>
        <GridItem area="A4">Latest in experiments: Testing the limits of CSS Grid.</GridItem>
        <GridItem area="A5">Talks: Graceful failure with continuous integration, Antiviral media, Crisis and interaction design, Design ops</GridItem>
        <GridItem area="A6">This is my website, portfolio, skunkworks.</GridItem>
        <GridItem area="A7">
          <img width="100%" src="/static/images/colorwheel.jpg" alt="Chris" />
        </GridItem>
        <GridItem area="A8">
          <img width="100%" src="/static/images/future-is-now-slate.jpg" alt="Chris" />
        </GridItem>
        <GridItem area="A9">This is my website, portfolio, skunkworks.</GridItem>
        <GridItem area="A10">This is my website, portfolio, skunkworks.</GridItem>
        <GridItem area="A11">This is my website, portfolio, skunkworks.</GridItem>
        <GridItem area="A12">This is my website, portfolio, skunkworks.</GridItem>
      </Grid>
    </LandingPage>
  )
}
