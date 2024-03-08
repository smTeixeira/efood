import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'cardapios'>>`
  margin-bottom: 120px;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosa' ? cores.rosa : cores.branca};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  li {
    margin-bottom: 48px;
  }
`
