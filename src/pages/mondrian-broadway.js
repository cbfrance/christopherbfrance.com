import React from 'react'
import styled from 'styled-components'
import ReactCursorPosition from 'react-cursor-position';
import PositionLabel from '../components/PositionLabel';
import DrawRectangle from '../components/DrawRectangle';


const Title = styled.h1`
  font-size: 2em;
  padding: 2em 0;
`;

const Container = styled.div`
  width: var(--container-width);
  height: var(--container-height);
  position: relative;
  cursor: crosshair;
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

const Variables = styled.div`
  /* Settings */
  & {
    --columns: 240;
    --baseline: 4px;
    --line-thickness: 1px;
    --visual-grid-color: hsla(204, 80%, 72%, 0.25);
    --container-height: 60em;
    --container-width: 60em;
  }


  /* Helper variables */
  & {
    --repeating-width: calc(var(--container-width) / var(--columns));
    --repeating-height: calc(var(--container-width) / var(--columns));
    --background-columns: repeating-linear-gradient(
      to right,
      var(--visual-grid-color),
      transparent var(--line-thickness),
      transparent var(--repeating-width)
    );
    --background-baseline: repeating-linear-gradient(
      to bottom,
      var(--visual-grid-color),
      transparent var(--line-thickness),
      transparent var(--repeating-height)
    );
  }
`;

const GridVisual = styled.div`
  & {
    position: absolute;
    width: 100%;
    height: var(--container-height);
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    min-height: 100%;
    content: '';
    background-image: var(--background-columns), var(--background-baseline);  
    background-size: 100% 100%;
    background-position: 0;
    z-index: 1000;
    pointer-events: none;
  }
`;

const topLeftCoordinates = areaString => `${areaString.split("/")[0]}/${areaString.split("/")[1]}`
const bottomRightCoordinates = areaString => `${areaString.split("/")[2]}/${areaString.split("/")[3]}`

const Block = styled.div`
  grid-area: ${props => props.area ? props.area : "1 / 1 / 2 / 2"};
  ${props => props.yellow ? "background-color: orange;" : ""};
  ${props => props.blue ? "background-color: blue;" : ""};
  ${props => props.red ? "background-color: red;" : ""};
  ${props => props.grey ? "background-color: grey;" : ""};
  ${props => props.nudgeRight ? "margin-right: -2px;" : ""};
  ${props => props.nudgeLeft ? "margin-left: -2px;" : ""};
  ${props => props.nudgeUp ? "margin-top: -2px;" : ""};
  ${props => props.nudgeDown ? "margin-bottom: -2px;" : ""};
  position: relative;

  &::before, &::after {
    display: block;
    position: absolute;
    font-size: 5px;
    color: aqua;
  }

  &::before {
    content: '${props => props.area ? topLeftCoordinates(props.area) : "null"}';
    border-top: ${props => props.nudgeUp ? "2px" : "1px"} solid aqua;
    border-left: ${props => props.nudgeLeft ? "2px" : "1px"} solid aqua;
  }

  &::after {
    content: '${props => props.area ? bottomRightCoordinates(props.area) : "null"}';
    border-bottom: ${props => props.nudgeDown ? "2px" : "1px"} solid aqua;
    border-right: ${props => props.nudgeRight ? "2px" : "1px"} solid aqua;
    bottom: 0;
    right: 0;
  }
`;

const ParentGrid = styled.div`
  opacity: 0.4;
  display: grid;
  grid-template-columns: repeat(var(--columns), 4px);
  grid-template-rows: repeat(var(--columns), 4px);
  height: 100%;
  width: 100%;
`;

const IndexPage = () => (
  <Variables>
    <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
    <DrawRectangle>
      <Container>
          
        <Reference />
        <ReactCursorPosition>
          <PositionLabel/>
          <GridVisual />
          <ParentGrid>
            {/* Yellow columns */}
            <Block area="1/7/80/12" yellow />
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
            <Block area="175/15/180/-1" yellow />
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

            {/* Blue blocks, first columnish */}
            <Block area="6/7/11/12" blue />
            <Block area="24/7/28/12" blue nudgeUp/>
            <Block area="165/6/171/12" blue nudgeRight />
            <Block area="52/7/57/12" blue />
            <Block area="85/15/90/20" blue nudgeUp nudgeDown nudgeRight />
            <Block area="105/15/110/20" blue nudgeUp />
            <Block area="135/15/141/20" blue nudgeRight nudgeDown />
            <Block area="187/7/192/13" blue nudgeRight nudgeDown />

            {/* Blue blocks, second columnish */}
            <Block area="206/16/211/20" blue nudgeLeft nudgeRight />

            {/* Blue blocks, third columnish */}
            <Block area="6/37/11/42" blue />
            <Block area="23/29/28/34" blue />
            <Block area="38/29/44/34" blue nudgeLeft />
            <Block area="48/21/61/34" blue nudgeLeft />
            <Block area="80/29/85/34" blue nudgeLeft />
            <Block area="90/29/95/34" blue nudgeLeft />
            <Block area="123/29/129/34" blue nudgeLeft />
            <Block area="135/29/141/34" blue nudgeLeft nudgeUp />
            <Block area="151/29/156/34" blue nudgeLeft nudgeUp nudgeDown />
            <Block area="162/21/175/34" blue nudgeLeft nudgeUp /> {/* Big */}
            <Block area="187/29/192/34" blue nudgeLeft nudgeUp />
            <Block area="206/29/211/34" blue />
            <Block area="214/29/218/34" blue />
            <Block area="228/29/233/34" blue /> {/* Contains signature */}

            {/* Blue blocks, fourth columnish */}
            <Block area="23/55/28/60" blue />
            <Block area="34/55/38/60" blue />
            <Block area="52/55/57/60" blue />
            <Block area="85/55/90/60" blue />
            <Block area="105/55/110/60" blue nudgeUp nudgeLeft/>
            <Block area="135/55/141/60" blue nudgeLeft />
            <Block area="175/55/180/60" blue nudgeLeft />
            <Block area="206/55/211/60" blue nudgeLeft />
            <Block area="228/55/233/60" blue nudgeLeft />

            <Block area="38/72/44/78" blue nudgeLeft />
            <Block area="84/81/90/86" blue nudgeLeft />

            {/* Red blocks, first columnish */}
            <Block area="1/15/6/20" red nudgeRight />
            <Block area="38/7/44/12" red />
            <Block area="65/7/70/12" red />
            <Block area="85/7/90/12" red nudgeUp nudgeDown />
            <Block area="105/6/110/10" red nudgeLeft nudgeUp />
            <Block area="213/8/218/14" red nudgeDown />


            {/* Red blocks, second columnish */}
            <Block area="23/15/28/20" red />
            <Block area="121/15/126/20" red nudgeRight nudgeDown />
            <Block area="151/15/157/20" red nudgeRight nudgeUp />
            <Block area="165/15/170/20" red nudgeRight />
            <Block area="175/15/180/20" red nudgeRight nudgeDown />
            <Block area="188/16/193/20" red nudgeLeft nudgeRight nudgeDown />
            <Block area="228/15/233/20" red nudgeRight />
            <Block area="65/29/70/34" red nudgeLeft />
            <Block area="85/34/90/39" red nudgeLeft nudgeUp nudgeDown />
            <Block area="105/29/110/34" red nudgeLeft />
            <Block area="119/34/135/54" red nudgeRight nudgeDown /> {/* Big */}
            <Block area="175/29/180/34" red nudgeLeft nudgeDown/>
            <Block area="195/29/199/34" red nudgeLeft />

            {/* Red blocks, third columnish */}
            <Block area="1/55/6/60" red nudgeDown />
            <Block area="38/49/44/55" red nudgeDown />
            <Block area="65/55/70/60" red />
            <Block area="151/55/156/60" red nudgeLeft nudgeDown />
            <Block area="188/55/193/60" red nudgeLeft />
            <Block area="206/43/211/49" red />
            <Block area="214/55/219/60" red nudgeLeft />
            <Block area="228/44/233/49" red />

            {/* Red blocks, fourth columnish */}
            <Block area="11/38/23/49" red />
            <Block area="28/38/38/49" red />

            {/* Red blocks, fifth columnish */}
            <Block area="11/63/32/81" red /> {/* Big */}
            <Block area="11/63/32/81" red />

            {/* Grey blocks */}
            <Block area="11/7/15/12" grey />
            <Block area="80/7/85/12" grey />
            <Block area="135/10/141/15" grey />
            <Block area="151/11/157/15" grey />
            <Block area="206/7/211/13" grey />
            <Block area="233/10/228/15" grey />
            <Block area="23/38/28/49" grey />
            <Block area="32/63/38/81" grey /> {/* Wide */}

          </ParentGrid> 
        </ReactCursorPosition>
      </Container>
    </DrawRectangle>
  </Variables>
)

export default IndexPage
