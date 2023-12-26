import { Imagem, Titulo } from './styles'
import banner from '../../assets/fundo.png'
import logo from '../../assets/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <img src={logo} alt="logo" />
    </div>
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
)

export default Header
