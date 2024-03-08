import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useGetTiposCardapioQuery } from '../../services/api'

const Home = () => {
  const { data: tiposCardapio, isLoading: isLoadingTipos } =
    useGetTiposCardapioQuery()

  if (tiposCardapio) {
    return (
      <>
        <Header />
        <ProductList cardapios={tiposCardapio} background="branco" />
      </>
    )
  }
  return <h4>carregando</h4>
}

export default Home
