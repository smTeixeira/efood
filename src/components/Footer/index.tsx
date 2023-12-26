import footer from '../../assets/footer.png'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import { Container, ImageFooter, RedesSociais, RodaPe } from './styles'

const Footer = () => {
  return (
    <Container>
      <ImageFooter style={{ backgroundImage: `url(${footer})` }}>
        <div className="container">
          <img src={logo} alt="Logo" />
        </div>
        <RedesSociais>
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </RedesSociais>
        <RodaPe>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </RodaPe>
      </ImageFooter>
    </Container>
  )
}

export default Footer
