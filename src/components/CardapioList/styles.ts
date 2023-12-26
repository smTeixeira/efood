import styled from 'styled-components'
import { List } from '../ProductList/styles'

export const ContainerCardapio = styled.div`
  margin-bottom: 32px;
`

export const ListItaliano = styled(List)`
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`
