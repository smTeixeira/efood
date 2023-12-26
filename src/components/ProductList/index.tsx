import Product from '../Product'
import { Container, List } from './styles'
import Cardapio from '../../models/Cardapio'

export type Props = {
  background: 'branco' | 'rosa'
  cardapios: Cardapio[]
}

const ProductList = ({ background, cardapios }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {cardapios.map((cardapio) => (
          <Product
            key={cardapio.id}
            title={cardapio.title}
            tag={cardapio.tag}
            image={cardapio.image}
            description={cardapio.description}
            nota={cardapio.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
