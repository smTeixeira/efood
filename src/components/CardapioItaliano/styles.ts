import styled from 'styled-components'
import { Button, Card, Descricao, Title } from '../Product/styles'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 320px;
  background-color: ${cores.rosa};
  margin-bottom: 32px;
`

export const CardRosa = styled(Card)`
  padding: 8px;
  color: ${cores.branca};
  background-color: ${cores.rosa};
  margin: 0 auto;

  img {
    max-width: 300px;
  }
`

export const ButtonAdicionar = styled(Button)`
  color: ${cores.rosa};
  background-color: ${cores.branca};
  width: 100%;
  font-weight: bold;
`

export const Titulo = styled(Title)`
  font-size: 16px;
  margin-top: 8px;
`

export const Description = styled(Descricao)`
  font-size: 14px;
  margin-top: 8px;
`
