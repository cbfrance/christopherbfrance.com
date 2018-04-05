import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled, { injectGlobal } from 'styled-components'
import DrawingTools from './DrawingTools'
import Tooltip from './Tooltip'
import { colors, Title, Container } from './styles'

injectGlobal`
  * {
    outline: none;
    box-sizing: border-box;
  }
`

const MondrianBroadway = () => (
    <div>
        <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
        <Container>
            <ReactCursorPosition>
                <Tooltip />
                <DrawingTools />
            </ReactCursorPosition>
        </Container>
    </div>
)

export default MondrianBroadway
