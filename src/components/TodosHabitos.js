/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import HabitosDiarios from "./HabitosDiarios";
import {deletarHabito} from "./chamadaAxios";
import UserContext from "../contexts/UserContext";

export default function TodosHabitos({ habito, habitoUsuario }) {
	const { usuario } = useContext(UserContext);
	const semana = ["D","S","T","Q","Q","S","S"];
	const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));

	function apagarHabito(habito){
		if (window.confirm(`Deseja realmente apagar o hábito "${habito.name}"?`)){
			const configurar = { headers: { Authorization: `Bearer ${usuario.token || usuarioLocal}` } };
			const id = habito.id;
			const req = deletarHabito(id, configurar);

			req.then(() => habitoUsuario());
			req.catch(() => alert("Tente novamente."));
		}
	}

	console.log(habito)
	return (
		<Container>
			<Titulo>
			<p>{habito.name}</p>
				<BsTrash color="#666" size="16px" onClick={() => apagarHabito(habito)}/>
			</Titulo>
			<Dias>
				{semana.map((w,i) => (
					<HabitosDiarios key={i} day={w} markedDay={habito.days.includes(i)} />
				))}
			</Dias>
		</Container>
	);
}

const Container = styled.div`
	background-color: #FFF;
    margin: 0 auto 10px auto;
    height: 90px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    p {
        font-size: 20px;
        line-height: 25px;
        color: #666;
    }
`;

const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Dias = styled.div`
    display: flex;
`;
