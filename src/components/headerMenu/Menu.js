/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import Porcentagem from "../../contexts/Porcentagem";

export default function Menu(){
	const { porcento } = useContext(Porcentagem);

	return(
		<Footer>
			<div>
				<Link to="/habits">
					<Botao>Hábitos</Botao>
				</Link>
				<Link to="/hoje">
					<BotaoCircular>
						<CircularProgressbar value={porcento} text={"Hoje"} backgroundPadding={5} styles={buildStyles({textAlign:"center", textSize: "22px", textColor: "#FFF", trailColor: "#52B6FF", pathColor: "#FFF"})}/>
					</BotaoCircular>
				</Link>
				<Link to="/historico">
					<Botao>Histórico</Botao>
				</Link>
			</div>
		</Footer>
	);
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    div {
        width: 85%;
        display: flex;
        justify-content: space-around;
    }
`;

const BotaoCircular = styled.button`
    width: 90px;
    height: 90px;
    border: none;
    background-color: #52B6FF;
    border-radius: 50%;
    position: fixed;
    z-index: 2;
    bottom: 8px;
    right: calc(50% - 45px);
`;

const Botao = styled.a`
    border: none;
    font-size: 18px;
    color: #52B6FF;
    text-align: center;
`;

