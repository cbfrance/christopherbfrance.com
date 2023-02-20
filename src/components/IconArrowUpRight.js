import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  padding-right: 0.5rem;
`

export const IconArrowUpRight = () => (
  <Icon>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3L3 9"
        stroke="black"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 3H9V8"
        stroke="black"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Icon>
)
