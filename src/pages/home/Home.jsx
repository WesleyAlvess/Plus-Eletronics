import React from 'react'

import Header from "../../components/frontend/Header"
import Products from "../../components/frontend/Products"

import Data from "../../components/backend/Data/Data"
import styled from 'styled-components'

const Home = () => {
    const { productItems } = Data;

    return (
        <>
                <Header />
                <P>Produtos</P>
                <Products productItems={productItems} />
    
        </>
    )
}

export default Home

const P = styled.div`
    margin-left: 2.8%;
    margin-top: 25px;
    font-size: 24px;
    
`