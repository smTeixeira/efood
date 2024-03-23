import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { BotaoAdicionar } from '../Card/styles'
import * as S from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl, getTotalPrice } from '../../utils/index'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
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
        {!payment && items.length > 0 ? (
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
            <BotaoAdicionar
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => setPayment(true)}
            >
              Continuar com a entrega
            </BotaoAdicionar>
          </>
        ) : (
          items.length === 0 && (
            <span>
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </span>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
