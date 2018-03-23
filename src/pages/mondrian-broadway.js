import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 2em;
  padding: 2em 0;
`;

const Container = styled.div`
  width: 60em;
  height: 100em;
  position: relative;
`;

const Reference = styled.div`
  background: url("./static/reference/mondrian-broadway.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.3;
`;

const Block = styled.div`
  grid-area: ${props => props.area ? props.area : "1 / 1 / 2 / 2"};
  ${props => props.yellow ? "background-color: orange;" : ""};
  ${props => props.blue ? "background-color: blue;" : ""};
  ${props => props.red ? "background-color: red;" : ""};
  ${props => props.nudgeRight ? "margin-right: -0.2em;" : ""};
`;

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(240, .25em);
  grid-template-rows: repeat(240, .25em);
  height: 100%;
  width: 100%;
`;

const IndexPage = () => (
  <div>
    <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
    <Container>
      <Reference />
      <ParentGrid>
        {/* Yellow columns */}
        <Block area="1/7/-1/12" yellow />
        <Block area="1/15/-1/20" yellow />
        <Block area="1/29/-1/34" yellow />
        <Block area="1/55/-1/60" yellow />
        <Block area="1/130/-1/136" yellow />
        <Block area="1/140/-1/145" yellow />
        <Block area="1/203/-1/208" yellow />
        <Block area="1/212/-1/217" yellow />
        <Block area="1/222/-1/227" yellow />
        <Block area="1/232/-1/237" yellow />

        {/* Yellow rows */}
        <Block area="7/1/11/-1" yellow />
        <Block area="39/1/44/-1" yellow />
        <Block area="85/1/90/-1" yellow />
        <Block area="105/1/110/-1" yellow />
        <Block area="135/1/141/-1" yellow />
        <Block area="151/1/157/-1" yellow />
        <Block area="166/1/171/-1" yellow />
        <Block area="175/1/180/-1" yellow />
        <Block area="187/1/192/-1" yellow />
        <Block area="206/1/211/-1" yellow />
        <Block area="213/1/218/-1" yellow />
        <Block area="228/1/233/-1" yellow />

      </ParentGrid> 
    </Container>
  </div>
)

export default IndexPage
