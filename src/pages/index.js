import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { transparentize } from 'polished'

const borderSize = "14px";
const border = `solid black ${borderSize}`;
const grey = "#d7e2e5";
const red =  "#d62610";
const blue = "#00509c";
const yellow = "#ffdc46";
const black = "#101312";

const Title = styled.h1`
  font-size: 30px;
  padding-top: 16px;
`;

const Container = styled.div`
  width: 800px;
  height: 1246px;
`;

const Reference = styled.div`
  background: url("./static/reference/mondrian.jpg") no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  width: 800px;
  height: 1246px;
  opacity: 0.5;
`;

const A1 = styled.div`
  grid-area: A1;
  background-color: ${black};
  border-right: ${border};
`;

const A2 = styled.div`
  grid-area: A2;
  background-color: ${red};
  border-bottom: ${border};
`;

const A3 = styled.div`
  grid-area: A3;
  background-color: ${black};
`;

const B1 = styled.div`
  grid-area: B1;
  background-color: ${grey};
  border-right: ${border};
  border-bottom: ${border};
`;

const B2 = styled.div`
  grid-area: B2;
  background-color: ${black};
`;

const B3 = styled.div`
  grid-area: B3;
  background-color: ${grey};
`;

const C1 = styled.div`
  grid-area: C1;
  background-color: ${grey};
  border-right: ${border};
  border-bottom: ${border};
`;

const C2 = styled.div`
  grid-area: C2;
  background-color: ${grey};
  border-bottom: ${border};
`;

const C3 = styled.div`
  grid-area: C3;
  background-color: ${grey};
  border-bottom: ${border}
`;

const D1 = styled.div`
  grid-area: D1;
  background-color: ${black};
  border-right: ${border};
`;

const D2 = styled.div`
  grid-area: D2;
  background-color: ${grey};
  border-right: ${border};
`;

const D3 = styled.div`
  grid-area: D3;
  background-color: ${grey};
  border-bottom: ${border};
`;

const D4 = styled.div`
  grid-area: D4;
  background-color: ${grey};
  border-bottom: ${border};
  border-right: ${border};
`;

const D5 = styled.div`
  grid-area: D5;
  background-color: ${black};
`;

const E1 = styled.div`
  grid-area: E1;
  background-color: ${yellow};
  border-right: ${border};
`;

const E2 = styled.div`
  grid-area: E2;
  background-color: ${grey};
  border-right: ${border};
`;

const E3 = styled.div`
  grid-area: E3;
  background-color: ${yellow};
`;

const F1 = styled.div`
  grid-area: F1;
  background-color: ${grey};
  border-bottom: ${border};
  border-right: ${border};
`;

const F2 = styled.div`
  grid-area: F2;
  background-color: ${blue};
  border-bottom: ${border};
`;

const G1 = styled.div`
  grid-area: G1;
  background-color: ${black};
`;

const G2 = styled.div`
  grid-area: G2;
  background-color: ${red};
`;

const G3 = styled.div`
  grid-area: G3;
  background-color: ${black};
`;

const P = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  padding-top: ${props => props.padTop ? "80px" : null};
`;

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: 72px 140px 410px 118px 22px 36px;
  grid-template-rows: 96px 394px 218px 60px 202px 232px 44px;
  grid-template-areas: "A1 A1 A2 A2 A2"
                       "B1 B1 A2 A2 A2"
                       "B1 B1 C1 C1 C2"
                       "D1 D2 D3 D4 C2"
                       "E1 E2 D3 D4 C2"
                       "E1 E2 F1 F2 F2"
                       "G1 G1 G2 G2 G2";
  height: 100%;
  width: 100%;
`;

const IndexPage = () => (
  <div>
    <Title>Composition with Large Blue Plane, Red, Black, Yellow, and Gray(1921) by Piet Mondrian</Title>
    <Container>
      <Reference/>
      <ParentGrid>
        <A1/>
        <A2/>

        <B1/>
        <B2/>

        <C1/>
        <C2/>

        <D1/>
        <D2/>
        <D3/>
        <D4/>

        <E1/>
        <E2/>

        <F1/>
        <F2/>
  
        <G1/>
        <G2/>
      </ParentGrid>
    </Container>

    <P padTop>Pieter Cornelis "Piet" Mondriaan, after 1906 Mondrian (/ˈmɔːndriˌɑːn, ˈmɒn-/; Dutch: [ˈpit ˈmɔndrijaːn], later [ˈmɔndrijɑn]; 7 March 1872 – 1 February 1944), was a Dutch painter. Mondrian was a contributor to the De Stijl art movement and group, which was founded by Theo van Doesburg. He evolved a non-representational form which he termed neoplasticism. This consisted of white ground, upon which he painted a grid of vertical and horizontal black lines and the three primary colors.Mondrian's arrival in Paris from the Netherlands in 1911 marked the beginning of a period of profound change. He encountered experiments in Cubism and with the intent of integrating himself within the Parisian avant-garde removed an 'a' from the Dutch spelling of his name (Mondriaan).</P>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
