import styled from '@emotion/styled'
import { BODY_FONT, SPACING, mq } from 'context/stylesConstants'
import React from 'react'

interface Props {
  isHomePage?: boolean
}

const Loader: React.FC<Props> = ({ isHomePage }) => {
  const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${SPACING * 3}rem;
    ${mq.desktop} {
      justify-content: ${isHomePage ? 'flex-end' : 'center'};
    }
  `
  const Title = styled.h1`
    font-size: 1.8rem;
    text-align: center;
    font-family: ${BODY_FONT};
    font-weight: normal;
    color: #000000e2;
    ${mq.desktop} {
      margin-bottom: ${isHomePage ? '5rem' : 'initial'};
    }
  `
  const Cube = styled.div`
    margin-top: 5rem;
    font-size: 3.2rem;
    height: 1em;
    width: 1em;
    position: relative;
    transform: rotatex(30deg) rotatey(45deg);
    transform-style: preserve-3d;
    animation: cube-spin 2s infinite ease-in-out alternate;
  `
  const CubeFace = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform-style: preserve-3d;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000e2;
      transform: translatez(0.5em);
      animation: cube-explode 2s infinite ease-in-out;
      opacity: 0.5;
    }

    &:nth-child(1) {
      transform: rotatey(90deg);
    }

    &:nth-child(2) {
      transform: rotatey(180deg);
    }

    &:nth-child(3) {
      transform: rotatey(270deg);
    }

    &:nth-child(4) {
      transform: rotatey(360deg);
    }

    &:nth-child(5) {
      transform: rotatex(90deg);
    }

    &:nth-child(6) {
      transform: rotatex(270deg);
    }
  `
  return (
    <Main>
      <Cube>
        <CubeFace></CubeFace>
        <CubeFace></CubeFace>
        <CubeFace></CubeFace>
        <CubeFace></CubeFace>
        <CubeFace></CubeFace>
        <CubeFace></CubeFace>
      </Cube>
      <Title>loading</Title>
    </Main>
  )
}

export default Loader
