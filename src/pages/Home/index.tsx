import ProductList from '../../components/ProductList'
import Cardapio from '../../models/Cardapio'
import imgsushi from '../../assets/sushi.png'
import imgmacarrao from '../../assets/macarrao.png'
import Header from '../../components/Header'

const modelo: Cardapio[] = [
  {
    id: 1,
    title: 'Hioraki Sushi',
    tag: ['Destaque da semana', 'Japonesa'],
    image: imgsushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.6
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    image: imgmacarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    nota: 4.6
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    image: imgmacarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    nota: 4.6
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    image: imgmacarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    nota: 4.6
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    image: imgmacarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    nota: 4.6
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    image: imgmacarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    nota: 4.6
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList cardapios={modelo} background="branco" />
  </>
)

export default Home
