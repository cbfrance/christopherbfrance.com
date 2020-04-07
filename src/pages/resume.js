import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import resumeData from '../data/resume.json'
import { Layout, Wrapper } from '../components'

const borderWidth = '2px'

const Content = styled.div`
  font-size: 0.9rem;
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 5rem;
  color: black;
  @media print {
    box-shadow: none;
    padding: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const TitleResume = styled.div`
  color: black;
  padding: 1rem 0;
`

export const DateStamp = styled.div`
  font-family: ${theme.fontFamily.mono};
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.7);
`

const PageHeader = styled.h1``

const SectionHeader = styled.div`
  font-weight: 600;
  border-bottom: ${borderWidth} solid black;
  line-height: 2rem;
  margin-bottom: calc(1rem - ${borderWidth});
  @media print {
    line-height: 2rem;
  }
`

const LinksItem = styled.div``

const LinksItemTitle = styled.div`
  display: inline-block;
  width: 100px;
  font-weight: 600;
`

const Header = styled.div`
  font-weight: 600;
  color: black;
  line-height: inherit;
  @media print {
    padding-top: 1rem;
    font-weight: 400;
  }
`

const SubHeader = styled.div`
  line-height: 1;
  padding-top: 0.4rem;

  @media print {
    color: black;
  }
`

const Description = styled.div`
  line-height: inherit;
  ${props => (props.padTop ? `padding-top: ${props.padTop}` : '')};
`

const Item = styled.div`
  padding: 1rem 0;
  line-height: 1.5;
  @media print {
    font-size: 0.8rem;
    padding: 0.2rem 0 0.5rem;
  }
`

export default function Resume({ location }) {
  return (
    <Layout location={location}>
      <Wrapper>
        <Content>
          <Item>
            <TitleResume>
              <PageHeader>{resumeData.basics.name}</PageHeader>
              <SubHeader>{resumeData.basics.label}</SubHeader>
            </TitleResume>
          </Item>

          <Item>
            <SectionHeader>Links</SectionHeader>
            <LinksItem>
              <LinksItemTitle>Website</LinksItemTitle>
              {resumeData.basics.website}
            </LinksItem>
            <LinksItem>
              <LinksItemTitle>Portfolio</LinksItemTitle>
              {resumeData.basics.portfolio}
            </LinksItem>
            <LinksItem>
              <LinksItemTitle>LinkedIn</LinksItemTitle>
              {resumeData.basics.linkedin}
            </LinksItem>
          </Item>

          <Item>
            <SectionHeader>Experience</SectionHeader>
            {resumeData.work.map((job, index) => (
              <Item>
                <Header>{job.company}</Header>
                <DateStamp>
                  {job.position}: {job.startDate} - {job.endDate}
                </DateStamp>
                <Description>{job.summary}</Description>
              </Item>
            ))}
          </Item>

          <Item>
            <SectionHeader>Education</SectionHeader>
            {resumeData.education.map(school => (
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

          <Item>
            <SectionHeader>Speaking and awards</SectionHeader>
            <Description padTop="1rem">
              {resumeData.speaking.summary} {resumeData.awards.summary}
            </Description>
          </Item>
          <Item style={{ textAlign: 'center', fontSize: '0.7rem' }}>
            <Description padTop="1rem">
              {resumeData.basics.website} • {resumeData.basics.phone} • 
              {resumeData.basics.email} • 
              {resumeData.basics.location.city}
              {', '}
              {resumeData.basics.location.region}
            </Description>
          </Item>
        </Content>
      </Wrapper>
    </Layout>
  )
}
