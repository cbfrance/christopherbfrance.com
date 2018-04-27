import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, PostPreview, Tag, Card, GridItem, DateStamp } from '../styles/shared'

const ResumePage = styled.div`
  color: black;
  font: ${font.caption};
  a {
    color: black;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2em;
  padding: 1em;

  grid-template-areas:
    'X1 X1 01 01'
    '02 02 A1 A1'
    '03 03 03 03'
    '04 04 04 04'
    'X2 X2 X3 X4'
    'B2 B2 C1 D1'
    'B3 B3 C2 D1'
    'B4 B4 C2 D1'
    'B5 B5 X5 X5'
    'B6 B6 E1 E1'
    'B7 B7 11 11'
    'B8 B8 55 55'
    'B9 B9 33 33'
    'B9 B9 22 22';
`
const TitleResume = styled.div`
  color: black;
  font: ${font.subheading2};
  padding: 6rem 0;
`
const Header = styled.div`
  font: ${font.body1};
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`

const SectionHeader = styled.div`
  font: ${font.body1};
  font-weight: bold;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
`

const SubHeader = styled.div`
  font: ${font.caption};
  font-weight: 700;
`
const Description = styled.div`
  font: ${font.caption};
`
export default function Resume({ data }) {
  return (
    <ResumePage>
      <GridItem area="X1">
        <TitleResume>
          <p>Chris Gerald Blow</p>
          <p>Oakland, California 94611</p>
        </TitleResume>
      </GridItem>
      <Grid>
        <GridItem area="A1">
          <p>
            Hello, I’m Chris, a designer living in the San Francisco Bay Area. I work for Meedan, where I've been practicing design strategy for 10
            years. I have experience in product design, user experience research, front-end programming and investigative journalism. My work
            typically involves themes of collaborative work and cross-language communication. I am especially interested in user research for the
            advancement improvement of journalism and civil society.
          </p>
        </GridItem>

        <GridItem area="X2">
          <SectionHeader>Work experience</SectionHeader>
        </GridItem>
        <GridItem area="B2">
          <Header>Meedan</Header>
          <DateStamp>March 2008 - Current</DateStamp>
          <SubHeader>Director of User Experience</SubHeader>
          <Description>
            At Meedan I am a user experience researcher, front-end programmer and a product designer. I support a design team creating social networks
            and new media projects.
          </Description>
        </GridItem>
        <GridItem area="B3">
          <Header>Bolt | Peters User Experience</Header>
          <DateStamp>July 2007 – September 2008</DateStamp>
          <SubHeader>Researcher, Developer & Designer</SubHeader>
          <Description>
            As a User Experience Researcher was responsible for designing studies, analyzing results, collaborating with clients. I created videos,
            wireframes and sketches. I also helped design and build Ethnio, a Rails app for the user experience industry.
          </Description>
        </GridItem>
        <GridItem area="B4">
          <Header>Blast Internet Services and Web Design</Header>
          <DateStamp>March 2006 – July 2007</DateStamp>
          <SubHeader>Director of Operations & Sales</SubHeader>
          <Description>
            I revitalized their web consulting business with user-centric voice. I designed contracts and won budgets to implement an Agile
            development methodology and a modern Rails stack.
          </Description>
        </GridItem>
        <GridItem area="B5">
          <Header>Evaluation, Assessment and Policy Connections (EvAP)</Header>
          <p>UNC-Chapel Hill</p>
          <DateStamp>2004 – 2006</DateStamp>
          <SubHeader>Program Assistant & Web Developer</SubHeader>
          <Description>
            At EvAP I developed applications for managing stakeholder data, creating educational surveys and gatherinDescription real-time feedback.
          </Description>
        </GridItem>
        <GridItem area="B6">
          <Header>Nonprofit Design </Header>
          <DateStamp>2003 – 2006</DateStamp>
          <SubHeader>Founder and Lead Developer</SubHeader>
          <Description>
            I operated a consultancy with clients such as Duke University and the University of North Carolina at Chapel HilDescription.
          </Description>
        </GridItem>
        <GridItem area="B7">
          <Header>The North Carolina Center on Actual Innocence, Duke and UNC-Chapel Hill</Header>
          <DateStamp>2003 – 2004</DateStamp>
          <SubHeader>Teaching Assistant</SubHeader>
          <Description>
            I was a teaching assistant for investigative journalism course at the UNC-CH School of Journalism, in partnership with Duke University.
          </Description>
        </GridItem>
        <GridItem area="B8">
          <Header>The North Carolina Law Review</Header>
          <DateStamp>2001 – 2003</DateStamp>
          <SubHeader>Website and Database Developer</SubHeader>
          <Description>I helped create a custom database for the Law Review, and I managed their website.</Description>
        </GridItem>

        <GridItem area="X3">
          <SectionHeader>Education</SectionHeader>
        </GridItem>

        <GridItem area="C1">
          <Header>The University of North Carolina at Chapel Hill</Header>
          <DateStamp>2001 — 2003</DateStamp>
          <SubHeader>B.A., Journalism and Mass Communications</SubHeader>
          <Description>Investigative reporting, copy editing, political science</Description>
        </GridItem>
        <GridItem area="C2">
          <Header>The University of North Carolina at Asheville</Header>
          <DateStamp>1998 — 2001</DateStamp>
          <SubHeader>Humanities, music, literature</SubHeader>
        </GridItem>

        <GridItem area="X4">
          <SectionHeader>Speaking</SectionHeader>
        </GridItem>
        <GridItem area="D1">
          <p>
            In the last few years I've given a variety of presentations at events like RightsCon, Global Fact, the Online News Association, DrupalCon,
            the International CrisisMappers Conference, SXSW, the African News Innovation Challenge, the Nonprofit Technology Conference, the NYU
            Interactive Telecommunications Program and the University of Hawaii.
          </p>
        </GridItem>
        <GridItem area="X5">
          <SectionHeader>Awards</SectionHeader>
        </GridItem>
        <GridItem area="E1">
          <p>Online Journalism Award, Planned News/Events (Large Newsroom), Winner 2017 - Electionland</p>
          <p>Online Journalism Award, Planned News/Events (Small Newsroom), Winner 2017 - CrossCheck</p>
          <p>Innovate Africa Innovation Challenge, Winner 2017 - Check</p>
          <p>Knight News Challenge (Prototype), Winner 2014 - Checkdesk</p>
          <p>International Press Institute News Innovation Challenge, Winner 2012 - Checkdesk</p>
          <p>Africa News Innovation Challenge, Finalist 2012 - Checkdesk</p>
        </GridItem>
      </Grid>
    </ResumePage>
  )
}
