import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom'



const index = () => {
    return (
        <Container>
            <nav>
                <Link to="/" ><h1>Plus Eletronics</h1></Link>
                <div>
                    <Link to="/" ><p>Home</p></Link>
                    <Link to="/cart" ><p><i className="fa-solid fa-cart-shopping"></i></p></Link>
                </div>
            </nav>
        </Container>
    )
}

export default index