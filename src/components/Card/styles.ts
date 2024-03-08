import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  padding: 8px 8px 0 8px;
  background-color: ${cores.rosa};
`

export const Card = styled.div`
  position: relative;
  overflow: auto;
`

export const CardContainer = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  margin-bottom: 32px;
  margin-top: -4px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.branca};
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nota = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  color: ${cores.branca};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TagContainer = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  display: inline-block;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  padding: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin: 0 24px 0 0;
  }

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    margin: 0;
  }
`
export const InfosContainer = styled.div`
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  img {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  ${BotaoAdicionar} {
    height: 24px;
    width: 218px;
  }
`
