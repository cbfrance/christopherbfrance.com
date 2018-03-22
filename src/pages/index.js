import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 30px;
  padding-top: 16px;
`;

const Reference = styled.div`
  background-image: url("./static/reference/mondrian.jpg");
  width: 800px;
  height: 1246px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 72px 150px;
  height: 100%;
  & > div {
    border-right: 14px solid red;
  }
`;

const P = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  padding-top: ${props => props.padTop ? "80px" : null};
`;



const IndexPage = () => (
  <div>
    <Title>Mondrian</Title>
    <Reference>
      <Grid>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </Reference>

    <P padTop>Pieter Cornelis "Piet" Mondriaan, after 1906 Mondrian (/ˈmɔːndriˌɑːn, ˈmɒn-/; Dutch: [ˈpit ˈmɔndrijaːn], later [ˈmɔndrijɑn]; 7 March 1872 – 1 February 1944), was a Dutch painter.Mondrian was a contributor to the De Stijl art movement and group, which was founded by Theo van Doesburg. He evolved a non-representational form which he termed neoplasticism. This consisted of white ground, upon which he painted a grid of vertical and horizontal black lines and the three primary colors.Mondrian's arrival in Paris from the Netherlands in 1911 marked the beginning of a period of profound change. He encountered experiments in Cubism and with the intent of integrating himself within the Parisian avant-garde removed an 'a' from the Dutch spelling of his name (Mondriaan).</P>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
