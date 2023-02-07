import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #ecf1f8;
    padding: 5px;

    h1{
        color: darkkhaki;
        background-color: blue;
    }
`;

export const ContainerCart = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 5px;
    padding: 25px;
`

export const Card = styled.div`
    width: 250px;
    height: 400px;
    border: 1px solid #ecf1f8 ;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    margin: 15px 15px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        margin-top: 12px;
    }

    button{
        margin-top: 15px;
        cursor: pointer;
        font-size: 23px;
        font-weight: bold;
        border: none;
        height: 50px;
        width: 100%;
        color: #ecf1f8;
        border-radius: 5px;
        background-color: #F7CA00;
        text-transform: uppercase;
        &:hover{
            background-color: #FA8900;
        }
        &:active{
            transform: translateY(5px);
        }
    }

    img{
        width: 100%;
        height: 80%;
        max-width: 300px;
        border-radius: 15px;
        min-height: 200px;
        display: block;
        object-fit: cover;
        margin-top: 15px;
    }
`
