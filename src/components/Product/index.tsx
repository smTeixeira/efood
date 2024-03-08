import { Link } from 'react-router-dom'
import estrela from '../../assets/estrela.png'
import * as S from './styles'
import Tag from '../Tag'

type Props = {
  titulo: string
  capa: string
  descricao: string
  avaliacao: number
  destacado: boolean
  tipo: string
  id: number
}

const Product = ({
  descricao,
  capa,
  titulo,
  avaliacao,
  destacado,
  tipo,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 290) + '...'
    }
    return text
  }

  const getDestaque = (destacado: boolean) => {
    if (destacado === true) {
      return 'Destaque da semana'
    }
    return destacado
  }

  return (
    <>
      <S.Card
        title={`Clique aqui para ver mais sobre: ${titulo}`}
        to={`/product/${id}`}
      >
        <img src={capa} alt={titulo} />
        <S.Infos>
          <>{destacado ? <Tag>{getDestaque(destacado)}</Tag> : null}</>
          <Tag>{tipo}</Tag>
        </S.Infos>
        <S.CardInfos>
          <S.Container>
            <S.Title>{titulo}</S.Title>
            <S.Nota>
              <p>{avaliacao}</p>
              <img src={estrela} alt="Star" />
            </S.Nota>
          </S.Container>
          <S.Descricao>{getDescription(descricao)}</S.Descricao>
          <S.Button>
            <Link to="/product">Saiba mais</Link>
          </S.Button>
        </S.CardInfos>
      </S.Card>
    </>
  )
}

export default Product
