import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, PostPreview, Tag, Card, GridItem, DateStamp } from '../styles/shared'
import { resumeData } from '../data/resume.js'

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
    'B0 B0 C1 D1'
    'B1 B1 C2 D1'
    'B2 B2 C2 D1'
    'B3 B3 X5 X5'
    'B4 B4 E1 E1'
    'B5 B5 11 11'
    'B6 B6 55 55'
    'B7 B7 33 33'
    'B8 B8 22 22';
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
const parsedResumeData = JSON.parse(resumeData)

export default function Resume({ data }) {
  return (
    <ResumePage>
      <GridItem area="X1">
        <TitleResume>
          <h1>{parsedResumeData.basics.name}</h1>
          <p>
            {parsedResumeData.basics.location.city}, {parsedResumeData.basics.location.postalCode}
          </p>
        </TitleResume>
      </GridItem>
      <Grid>
        <GridItem area="A1">
          <p>{parsedResumeData.basics.summary}</p>
        </GridItem>

        <GridItem area="X2">
          <SectionHeader>Work experience</SectionHeader>
        </GridItem>

        {parsedResumeData.work.map((job, index) => (
          <GridItem area={`B${index}`}>
            <Header>{job.company}</Header>
            <DateStamp>
              {job.startDate} - {job.endDate}
            </DateStamp>
            <SubHeader>{job.position}</SubHeader>
            <Description>{job.summary}</Description>
          </GridItem>
        ))}

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
          <p>Online Journalism Award, </p>
          <p />
          <p />
          <p>International Press Institute News Innovation Challenge, Winner 2012 - Checkdesk</p>
          <p>Africa News Innovation Challenge, Finalist 2012 - Checkdesk</p>
        </GridItem>
      </Grid>
    </ResumePage>
  )
}
