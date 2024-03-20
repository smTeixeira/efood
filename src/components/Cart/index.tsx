import { useDispatch, useSelector } from 'react-redux'

import { BotaoAdicionar } from '../Card/styles'
import * as S from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl, getTotalPrice } from '../../utils/index'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <span>
                    <h3>{item.nome}</h3>
                    <S.Preco>{parseToBrl(item.preco)}</S.Preco>
                  </span>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.ContainerPrices>
              <S.Prices>Valor total</S.Prices>
              <S.Prices>{parseToBrl(getTotalPrice(items))}</S.Prices>
            </S.ContainerPrices>
            <BotaoAdicionar>Continuar com a entrega</BotaoAdicionar>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
