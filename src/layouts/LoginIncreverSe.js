import styled from "styled-components";

export const ImagemLogo = styled.div`
    width: 180px;
    height: 179px;
    margin: 15% auto 20px auto;
`;


export const Input = styled.input`
    height: 45px;
    width: 100%;
    margin-bottom: 6px;
    font-size: 20px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    ::placeholder{
        color: #DBDBDB;  
    }
    :focus{
        outline: 0;
        color: #666666;
    }
`;

export const Botao = styled.button`
    background: #52B6FF;
    width: 100%;
    color: #FFF;
    height: 45px;
    font-size: 21px;
    border: none;
    border-radius: 5px;
    margin-bottom: 25px;
    :disabled{
        background-color: #52B6FF;
        opacity: 0.6;
        color: #FFF;
    }
`;

export const Container = styled.div`
    width: 80%;
    height: max-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column; 

    p {
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;