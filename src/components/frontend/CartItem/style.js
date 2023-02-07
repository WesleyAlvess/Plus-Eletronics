import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    justify-content: flex-end;
    color: dark;
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;


    .container-cart{
        margin-top: 15px;
        max-width: 95%;
        width: 150%;
        border-radius: 15px;
        background-color: white;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h5{
            width: 750px;
            margin: 25px;
            display: flex;
            justify-content: flex-end;
            font-size: 25px;
            color: dark;
        }
        table{
            width: 90%;
            padding: 5px 55px;
        }

        tbody{
            background-color: #ecf1f8;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        
        }

        @media screen and (max-width: 1440px) {
           
        }

        .container-produtos{
            width: 70%;
            padding: 15px;
            border-radius: 10px;
            background-color: white;
            margin: 15px;
            
            @media screen and (max-width: 1450px) {
                .container-produtos{
                    width: 20%;
                }
            }

            Img{
                width: 100px;         
                align-items: center;
                justify-content: center;
                border-radius: 15px;
            }

            tr{
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;
                font-size: 20px;

            td button{
                padding: 4px 10px;
                margin: 5px;
                font-size: 17px;
                border-radius: 5px;
                border: none;
                background-color: #2c9cfe;
                color: white;
                cursor: pointer;
            }
            .btn-add{
                background-color: #50d554;
                color: white;
            }
            .btn-sub{
                background-color: #f22310;
                color: white;
            }
            }
        }
        @media screen and (max-width: 900px) {
          
        }
    }

`
export const TotalFinal = styled.div`
    width: 57%;
    border-radius: 10px;
    background-color: #ececec;
    padding: 25px;
    margin-top: 10px;
    margin-bottom: 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        color: dark;
    }

    button{
        padding: 8px;
        border-radius: 10px;
        border: none;
        margin-left: 10px;
        background-color: #2c9cfe;
        color: white;
        font-size: 17px;
        cursor: pointer;
    }
    
    .limpar-carrinho{
        background-color: #f22310;
        color: white;
    }
    
`