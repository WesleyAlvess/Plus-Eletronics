import React from 'react';
import { useCart } from 'react-use-cart';
import { Container, Card, ContainerCart } from './style'

const index = ({ productItems }) => {

    const { addItem } = useCart()

    return (
        <Container>
            <ContainerCart>
                {productItems.map((item, id) => (
                    <Card key={item.id} >
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                        </div>
                        <p>R$ {item.price},00</p>
                        <button onClick={() => addItem(item)} >Add ao carrinho</button>
                    </Card>
                ))}
            </ContainerCart>
        </Container>
    )
}

export default index 