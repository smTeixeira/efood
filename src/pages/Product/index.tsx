import banner from '../../assets/fundo.png'
import logo from '../../assets/logo.png'
import macarrao from '../../assets/fundo-macarrao.png'
import { Apresentacao, Fundo, Titulo, Titulo2 } from './styles'
import CardapioList from '../../components/CardapioList'

const Product = () => (
  <>
    <Fundo style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <p>Restaurantes</p>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </Fundo>
    <Apresentacao style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <Titulo>Italiana</Titulo>
        <Titulo2>La Dolce Vita Trattoria</Titulo2>
      </div>
    </Apresentacao>
    <CardapioList />
  </>
)

export default Product
