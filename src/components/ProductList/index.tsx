import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  background: 'branco' | 'rosa'
  cardapios: Cardapio[]
  id?: string
}

const ProductList = ({ background, cardapios, id }: Props) => (
  <Container id={id} background={background}>
    <div className="container">
      <List>
        {cardapios &&
          cardapios.map((cardapios) => (
            <li key={cardapios.id}>
              <Product
                id={cardapios.id}
                titulo={cardapios.titulo}
                capa={cardapios.capa}
                descricao={cardapios.descricao}
                avaliacao={cardapios.avaliacao}
                destacado={cardapios.destacado}
                tipo={cardapios.tipo}
              />
            </li>
          ))}
      </List>
    </div>
  </Container>
)

export default ProductList
