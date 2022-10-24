import React from "react";
import styled from "styled-components";
import Header from "../components/headerMenu/Header";
import Menu from "../components/headerMenu/Menu";

export default function Historico(){
	return (
		<>
			<Header />
			<Container>
				<h1>Histórico</h1>
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</Container>
			<Menu />
		</>        
	);
}

const Container = styled.div`
    background-color: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

    h1 {
        font-size: 22px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
`;