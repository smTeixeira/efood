import { Link } from 'react-router-dom'
import estrela from '../../assets/estrela.png'
import * as S from './styles'

type Props = {
  title: string
  tag: string[]
  image: string
  description: string
  nota?: number
}

const Product = ({ description, image, tag, title, nota }: Props) => {
  return (
    <>
      <S.Card>
        <img src={image} alt={title} />
        <S.Infos>
          {tag.map((tag) => (
            <S.TagContainer key={tag}>{tag}</S.TagContainer>
          ))}
        </S.Infos>
        <S.CardInfos>
          <S.Container>
            <S.Title>{title}</S.Title>
            <S.Nota>
              <p>{nota}</p>
              <img src={estrela} alt="Star" />
            </S.Nota>
          </S.Container>
          <S.Descricao>{description}</S.Descricao>
          <S.Button>
            <Link to="/product">Saiba mais</Link>
          </S.Button>
        </S.CardInfos>
      </S.Card>
    </>
  )
}

export default Product
