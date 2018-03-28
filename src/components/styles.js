import styled from 'styled-components'

export const gridUnit = 4;

export const Title = styled.h1`
  font-size: 2em;
  padding: 2em 0;
`;

export const Container = styled.div`
  width: var(--container-width);
  height: var(--container-height);
  position: relative;
  cursor: crosshair;
`;

export const Reference = styled.div`
  background: url("./static/reference/mondrian-broadway.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
`;

export const Variables = styled.div`
  /* Settings */
  & {
    --columns: 240;
    --baseline: ${gridUnit}px;
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

export const GridVisual = styled.div`
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

export const topLeftCoordinates = areaString => `${areaString.split("/")[0]}/${areaString.split("/")[1]}`
export const bottomRightCoordinates = areaString => `${areaString.split("/")[2]}/${areaString.split("/")[3]}`

export const Block = styled.div`
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

export const ParentGrid = styled.div`
  opacity: 0.4;
  display: grid;
  grid-template-columns: repeat(var(--columns), ${gridUnit}px);
  grid-template-rows: repeat(var(--columns), ${gridUnit}px);
  height: 100%;
  width: 100%;
`;
