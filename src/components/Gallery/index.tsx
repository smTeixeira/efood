import * as S from './styles'
import { Container } from '../ProductList/styles'
import Card from '../Card'

export type Props = {
  pratos: Prato[]
}

const Gallery = ({ pratos }: Props) => (
  <Container background="branco" className="container">
    <div>
      <S.Items>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Card
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </S.Items>
    </div>
  </Container>
)

export default Gallery
