import React from 'react';
import { useCart } from 'react-use-cart'
import { Container, Title, TotalFinal } from "./style"


const index = () => {
    // // Usando a função isEmpty - Verificando se o carrinho esta vazio!
    const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart()


    return (
        <Container>
            <div className='container-cart'>
                <h5>Carrinho ({totalUniqueItems}) total: ({totalItems}) </h5>
                <table>
                    <tbody>
                        {items.map((item) => {
                            return (
                                <div className='container-produtos'>
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.image} alt="" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>R$: {item.price},00</td>
                                        <td>Quantidade({item.quantity})</td>
                                        <td>
                                            <button className='btn-sub' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn-add' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn-remove' onClick={() => removeItem(item.id)}>Remover itens</button>
                                        </td>
                                    </tr>
                                </div>
                            )
                        })}
                    </tbody>
                </table>
                <TotalFinal>
                    <div>
                        <h2>Total: R$ {cartTotal},00 </h2>
                    </div>
                    <div>
                        <button className='limpar-carrinho' onClick={() => emptyCart()}>Limpar carrinho</button>
                        <button>Finalizar compra</button>
                    </div>
                </TotalFinal>
            </div>
        </Container>
    )
}

export default index


