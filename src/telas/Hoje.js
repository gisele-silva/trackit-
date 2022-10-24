import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitosDoDia from "../components/HabitosDoDia";
import { meusHabitosDiarios } from "../components/chamadaAxios";
import UserContext from "../contexts/UserContext";
import Porcentagem from "../contexts/Porcentagem";
import Header from "../components/headerMenu/Header";
import Menu from "../components/headerMenu/Menu";

export default function Hoje() {
	const { user } = useContext(UserContext);
	const { porcentagem, setPorcentagem } = useContext(Porcentagem);
	const [habitos, setHabitos] = useState([]);
	const usuarioLocal = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		habitosDeHoje();
	},[]);
	
	function habitosDeHoje(){
		const config = { headers: { Authorization: `Bearer ${user.token || usuarioLocal}` } };
		const req = meusHabitosDiarios(config);

		req.then(res => {
			setHabitos(res.data);
			value(res.data);
		});
		req.catch(() => alert("Tente novamente"));
	}

	function value(data){
		const done = data.filter(d => d.done===true);
		setPorcentagem((done.length/data.length)*100);
	}

	return (
		<>
			<Header />
			<Container>
				<h1>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h1>
				{habitos.find(h => h.done!==false) ? 
					<Text color={porcentagem}>{porcentagem%1===0 ? porcentagem.toFixed(0) : porcentagem.toFixed(2)}% dos hábitos concluídos</Text>
					:
					<h2>Nenhum hábito concluído ainda</h2>
				}
				{habitos.map(h => (
					<HabitosDoDia key={h.id} habit={h} habitosDeHoje={habitosDeHoje}/>
				))}
			</Container>
			<Menu />
		</>
	);
}

const Container = styled.div`
	background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

	h1 {
		font-size: 23px;
		line-height: 29px;
		color: #126ba5;
  	}

	h2 {
		font-size: 18px;
		line-height: 22px;
		color: #BABABA;
		margin-bottom: 28px;
	}
`;

const Text = styled.p`
	font-size: 18px;
	line-height: 22px;
	color: ${props => (props.color === 100 ? "#8FC549" : "#BABABA")};
	margin-bottom: 28px;
`;