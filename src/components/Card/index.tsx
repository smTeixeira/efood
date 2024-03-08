import { useState } from 'react'

import fechar from '../../assets/close.png'

import * as S from './styles'

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Card = ({ foto, nome, descricao, porcao, preco, id }: Prato) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.Imagem src={foto} alt={nome} />
      <S.CardContainer>
        <S.TituloContainer>
          <S.Titulo>{nome}</S.Titulo>
        </S.TituloContainer>
        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <S.BotaoAdicionar
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          <a>Adicionar ao carrinho</a>
        </S.BotaoAdicionar>
        <S.Modal className={modal.isVisible ? 'visivel' : ''}>
          <S.ModalContent className="container">
            <img
              src={fechar}
              alt="Botão de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img
                src={foto}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <S.InfosContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <S.BotaoAdicionar>
                Adicionar ao carrinho - {formataPreco(preco)}
              </S.BotaoAdicionar>
            </S.InfosContainer>
          </S.ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </S.Modal>
      </S.CardContainer>
    </S.Card>
  )
}

export default Card
