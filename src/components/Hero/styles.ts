import styled from 'styled-components'
import { Imagem } from '../../components/Header/styles'

export const Fundo = styled(Imagem)`
  height: 200px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;

  img {
    max-width: 125px;
    height: 58px;
    position: absolute;
    display: flex;
  }

  .container {
    top: 0;
    justify-content: space-between;
    color: #e66767;

    a {
      color: #e66767;
    }
  }
`

export const Apresentacao = styled(Imagem)`
  height: 300px;
  margin-bottom: 56px;
  object-fit: cover;

  .container {
    display: block;
  }
`

export const Titulo = styled.h3`
  position: absolute;
  top: 0px;
  font-size: 32px;
  font-weight: 100;
  color: #fff;
`
export const Titulo2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  top: 180px;
  color: #fff;
  position: absolute;
`

export const CartButton = styled.span`
  cursor: pointer;
`
