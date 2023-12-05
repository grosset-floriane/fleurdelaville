import styled from '@emotion/styled'
import { mq } from 'context/stylesConstants'
import React from 'react'

interface Props {
  isPrevious: boolean
  onClick: () => void
  titleColor?: string
}

const PrevNext: React.FC<Props> = ({
  isPrevious,
  onClick,
  titleColor = 'black',
}) => {
  const Button = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    opacity: 0.8;

    ${mq.tablet} {
      width: 5rem;
      height: 5rem;
    }

    ${mq.desktop} {
      width: 4rem;
      height: 4rem;
    }

    &:focus-visible {
      outline-offset: 0.3rem;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  `
  const Svg = styled.svg`
    ${isPrevious && 'transform: rotate(180deg);'}

    ${mq.tablet} {
      width: 100%;
      height: 100%;
    }
  `

  return (
    <Button aria-label={isPrevious ? 'Previous' : 'Next'} onClick={onClick}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4ZM0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12ZM12.3516 6.3516C12.5766 6.12664 12.8818 6.00026 13.2 6.00026C13.5182 6.00026 13.8234 6.12664 14.0484 6.3516L18.8484 11.1516C19.0734 11.3766 19.1997 11.6818 19.1997 12C19.1997 12.3182 19.0734 12.6234 18.8484 12.8484L14.0484 17.6484C13.8221 17.867 13.519 17.9879 13.2043 17.9852C12.8897 17.9825 12.5887 17.8563 12.3662 17.6338C12.1437 17.4113 12.0175 17.1103 12.0148 16.7957C12.0121 16.481 12.133 16.1779 12.3516 15.9516L15.1032 13.2H6C5.68174 13.2 5.37652 13.0736 5.15147 12.8485C4.92643 12.6235 4.8 12.3183 4.8 12C4.8 11.6817 4.92643 11.3765 5.15147 11.1515C5.37652 10.9264 5.68174 10.8 6 10.8H15.1032L12.3516 8.0484C12.1266 7.82337 12.0003 7.5182 12.0003 7.2C12.0003 6.8818 12.1266 6.57663 12.3516 6.3516Z"
          fill={titleColor}
        />
      </Svg>
    </Button>
  )
}

export default PrevNext
