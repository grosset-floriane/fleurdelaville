import styled from '@emotion/styled'
import React from 'react'

const Title = styled.h1`
  font-family: lato;
  font-weight: 300;
  background-color: #c7d5ff;
  border-radius: 0 0 8px 0;
  padding: 4px 8px 4px 16px;
  margin-left: -16px;
  font-size: 24px;
`

export const ArchiveTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>
}
