import React from 'react'
import styled from 'styled-components'

const borderSize = "14px";
const border = `solid black ${borderSize}`;
const grey = "#d7e2e5";
const red =  "#d62610";
const blue = "#00509c";
const yellow = "#ffdc46";
const black = "#101312";

const Title = styled.h1`
  font-size: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
`;

const Container = styled.div`
  width: 762px;
  height: 1203px;
  position relative;
`;

const Reference = styled.div`
  background: url("./static/reference/mondrian-composition.jpg");
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0; // change to 1 to show reference
`;

const Block = styled.div`
  grid-area: ${props => props.area ? props.area : "A1"};
  background-color: ${props => props.color ? props.color : black};
  border-right: ${props => props.borderRight ? border : "none"};
  border-bottom: ${props => props.borderBottom ? border : "none"};
`;

const P = styled.p`
  padding-top: ${props => props.padTop ? "80px" : null};
  margin: 0;
`;

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: 72px 140px 410px 118px 22px;
  grid-template-rows: 96px 394px 218px 60px 202px 232px;
  grid-template-areas: "A1 A1 A2 A2 A3"
                       "B1 B1 A2 A2 A3"
                       "B1 B1 C1 C1 C2"
                       "D1 D2 D3 D4 C2"
                       "E1 E2 D3 D4 C2"
                       "E1 E2 F1 F2 F2";

  &, & > * {
    box-sizing: border-box;
  }
`;

const IndexPage = () => (
  <div>
    <Title>Composition with Large Blue Plane, Red, Black, Yellow, and Gray (1921) by Piet Mondrian</Title>
    <Container>
      <Reference />
      <ParentGrid>
        <Block area="A1" color={black} borderRight />
        <Block area="A2" color={red} borderBottom />
        <Block area="A3" color={red} borderBottom />
        <Block area="B1" color={grey} borderRight borderBottom />
        <Block area="C1" color={grey} borderRight borderBottom />
        <Block area="C2" color={grey} borderBottom />
        <Block area="D1" color={black} borderRight />
        <Block area="D2" color={grey} borderRight />
        <Block area="D3" color={grey} borderBottom />
        <Block area="D4" color={grey} borderRight borderBottom />
        <Block area="E1" color={yellow} borderRight />
        <Block area="E2" color={grey} borderRight />
        <Block area="F1" color={grey} borderRight borderBottom />
        <Block area="F2" color={blue} borderBottom />
      </ParentGrid>
    </Container>


    <P padTop>“Art is higher than reality and has no direct relation to reality. To approach the spiritual in art, one will make as little use as possible of reality, because reality is opposed to the spiritual. We find ourselves in the presence of an abstract art. Art should be above reality, otherwise it would have no value for [humans].”</P>

    <P padTop>Pieter Cornelis "Piet" Mondriaan, after 1906 Mondrian (/ˈmɔːndriˌɑːn, ˈmɒn-/; Dutch: [ˈpit ˈmɔndrijaːn], later [ˈmɔndrijɑn]; 7 March 1872 – 1 February 1944), was a Dutch painter. Mondrian was a contributor to the De Stijl art movement and group, which was founded by Theo van Doesburg. He evolved a non-representational form which he termed neoplasticism. This consisted of white ground, upon which he painted a grid of vertical and horizontal black lines and the three primary colors. Mondrian's arrival in Paris from the Netherlands in 1911 marked the beginning of a period of profound change. He encountered experiments in Cubism and with the intent of integrating himself within the Parisian avant-garde removed an 'a' from the Dutch spelling of his name (Mondriaan).</P>

      <P padTop>— <a href="https://en.wikipedia.org/wiki/Piet_Mondrian">Wikipedia</a></P>
  </div>
)

export default IndexPage
