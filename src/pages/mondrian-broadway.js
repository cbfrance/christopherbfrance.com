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
  opacity: 1;
`;

/**
 * @param {string} areaString String of area
 * @return {string} the parsed string 
 */
const topLeftCoordinates = areaString => `${areaString.split("/")[0]}/${areaString.split("/")[1]}`


const Block = styled.div`
  grid-area: ${props => props.area ? props.area : "1 / 1 / 2 / 2"};
  ${props => props.yellow ? "background-color: orange;" : ""};
  ${props => props.blue ? "background-color: blue;" : ""};
  ${props => props.red ? "background-color: red;" : ""};
  ${props => props.grey ? "background-color: grey;" : ""};
  ${props => props.nudgeRight ? "margin-right: -0.1em;" : ""};
  ${props => props.nudgeUp ? "margin-top: -0.1em;" : ""};
  ${props => props.nudgeDown ? "margin-bottom: -0.1em;" : ""};
  border: 1px solid black;
  position: relative;
  &::before {
    content: '${props => props.area ? topLeftCoordinates(props.area) : "null"}';
    display: block;
    position: absolute;
    font-size: 5px;
    border-top: 1px solid aqua;
    border-left: 1px solid aqua;
    color: aqua;
  }
`;

const ParentGrid = styled.div`
  opacity: 0.4;
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
        <Block area="6/1/11/-1" yellow />
        <Block area="38/1/44/-1" yellow />
        <Block area="85/1/90/-1" yellow nudgeUp nudgeDown />
        <Block area="105/1/110/-1" yellow />
        <Block area="135/1/141/-1" yellow />
        <Block area="151/1/157/-1" yellow />
        <Block area="166/1/171/-1" yellow />
        <Block area="175/1/180/-1" yellow />
        <Block area="187/1/192/-1" yellow />
        <Block area="206/1/211/-1" yellow />
        <Block area="213/1/218/-1" yellow />
        <Block area="228/1/233/-1" yellow />

        {/* Yellow blocks */}
        <Block area="15/34/23/55" yellow />
        <Block area="65/34/81/55" yellow />
        <Block area="90/39/105/51" yellow />
        <Block area="192/34/206/55" yellow />
        <Block area="110/70/135/86" yellow />
        <Block area="85/98/114/115" yellow />
        <Block area="128/98/141/115" yellow />

        {/* Blue blocks */}
        <Block area="6/7/11/12" blue />
        <Block area="6/37/11/42" blue />
        <Block area="24/7/28/12" blue nudgeUp/>
        <Block area="52/7/57/12" blue />
        <Block area="85/15/90/20" red />

        {/* Red blocks */}
        <Block area="11/38/23/49" red />
        <Block area="23/15/28/20" red />
        <Block area="28/38/38/49" red />
        <Block area="38/7/44/12" red />
        <Block area="65/7/70/12" red />
        <Block area="85/7/90/12" red />

        {/* Grey blocks */}
        <Block area="23/38/28/49" grey />

      </ParentGrid> 
    </Container>
  </div>
)

export default IndexPage
