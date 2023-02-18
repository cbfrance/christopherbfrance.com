import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
`

export const IconArrowRight = () => (
  <Icon>
    <svg
      width="20"
      height="9"
      viewBox="0 0 20 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_13)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8535 0.146423L19.2071 4.49998L14.8535 8.8535L14.1465 8.1464L17.2929 4.99998H0V3.99998H17.2929L14.1465 0.853533L14.8535 0.146423Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_13">
          <rect width="20" height="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
