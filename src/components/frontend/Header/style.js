import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 10px;
    
    nav{
        width: 95%;
        margin: 0 auto;
        background-color: #131921;
        padding: 20px;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    div{
        display: flex;
        gap: 50px;
    }
    
    p{
        font-size: 20px;
        font-weight: 500;
        color: #ecf1f8;
        &:hover{
            color: #FA8900;
        }
    }

    h1{
        color: #ecf1f8;
        font-size: 25px;
        &:hover{
            color: #FA8900;
        }
    }
`;
