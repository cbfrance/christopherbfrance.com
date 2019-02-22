import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { font, color, Title, PostPreview, Tag } from '../styles/shared-deprecated'
import { resumeData } from '../data/resume.js'

const borderWidth = '3px'

const ResumePage = styled.div`
  color: black;
  font: ${font.caption};
  a {
    color: black;
  }
`

const Grid = styled.div`
  @media all and (min-width: 700px) {
    display: grid;
    grid-gap: 2em;
    align-items: start;
    grid-template-areas:
      'A  A  A  01'
      'B  B  C  D'
      'B  B  E  E'
      'B  B  02  02'
      'F  F  F  F';
  }
  padding: 1em 0;
`

const TitleResume = styled.div`
  color: black;
  font: ${font.subheading2};
  padding: 3rem 0;
`

export const DateStamp = styled.div`
  font: ${font.mono};
  text-transform: uppercase;
  line-height: 2rem;
  font-size: 12px;
`

const PageHeader = styled.h1`
  font: ${font.display2};
`

const SectionHeader = styled.div`
  font: ${font.body1};
  font-weight: bold;
  font-weight: 900;
  border-bottom: ${borderWidth} solid black;
  line-height: 3rem;
  margin-bottom: calc(1rem - ${borderWidth});
`

const Header = styled.div`
  font: ${font.body1};
  font-weight: bold;
  color: black;
  line-height: inherit;
`

const SubHeader = styled.div`
  font: ${font.mono};
  font-weight: 500;
  line-height: 2rem;
  color: ${color.monzaRed};
`

const Description = styled.div`
  font: ${font.body1};
  line-height: inherit;
  ${props => (props.padTop ? `padding-top: ${props.padTop}` : '')};
`

const Item = styled.div`
  ${props => (props.area ? `grid-area: ${props.area}` : 'A')};
  padding: 1rem 0 2rem;
  line-height: 1.5;
`

const parsedResumeData = JSON.parse(resumeData)

export default function Resume({ data }) {
  return (
    <ResumePage>
      <Item area="X1">
        <TitleResume>
          <PageHeader>{parsedResumeData.basics.name}</PageHeader>
          <SubHeader>{parsedResumeData.basics.label}</SubHeader>
        </TitleResume>
      </Item>
      <Grid>
        <Item area="A">
          <Description>{parsedResumeData.basics.summary}</Description>
        </Item>

        <Item area="B">
          <SectionHeader>Work experience</SectionHeader>
          {parsedResumeData.work.map((job, index) => (
            <Item>
              <Header>{job.company}</Header>
              <SubHeader>{job.position}</SubHeader>
              <DateStamp>
                {job.startDate} - {job.endDate}
              </DateStamp>
              <Description>{job.summary}</Description>
            </Item>
          ))}
        </Item>

        <Item area="C">
          <SectionHeader>Education</SectionHeader>
          {parsedResumeData.education.map((school, index) => (
            <Item>
              <Header>{school.institution}</Header>
              <SubHeader>{school.area}</SubHeader>
              <DateStamp>
                {school.startDate} - {school.endDate}
              </DateStamp>
              <Description>{school.studyType}</Description>
            </Item>
          ))}
        </Item>

        <Item area="D">
          <SectionHeader>Speaking</SectionHeader>
          <Description padTop="1rem">{parsedResumeData.speaking.summary}</Description>
        </Item>
        <Item area="E">
          <SectionHeader>Awards</SectionHeader>
          {parsedResumeData.awards.map((award, index) => (
            <Item>
              <Header>{award.awarder}</Header>
              <DateStamp>{award.date}</DateStamp>
              <SubHeader>{award.title}</SubHeader>
              <Description>{award.summary}</Description>
            </Item>
          ))}
        </Item>
        <Item area="F">
          <Description>
            {parsedResumeData.basics.phone} • {parsedResumeData.basics.email} • {parsedResumeData.basics.location.postalCode} •
            {parsedResumeData.basics.location.city} • {parsedResumeData.basics.location.region}, {parsedResumeData.basics.location.countryCode}
          </Description>
        </Item>
      </Grid>
    </ResumePage>
  )
}
