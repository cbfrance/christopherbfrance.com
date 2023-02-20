import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  padding-right: 0.5rem;
`

export const IconArrowLeft = () => (
  <Icon>
    <svg
      width="20"
      height="9"
      viewBox="0 0 20 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3_15)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.14645 8.85358L0.7929 4.50002L5.14645 0.146495L5.85355 0.853595L2.7071 4.00002L20 4.00002L20 5.00002L2.7071 5.00002L5.85355 8.14647L5.14645 8.85358Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_15">
          <rect
            width="20"
            height="9"
            fill="white"
            transform="translate(20 9) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
