'use client'

import * as S from '@/components/Main/styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components.'
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)
export default Main
