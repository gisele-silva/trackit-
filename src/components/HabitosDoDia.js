/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";
import { habitoFeito, habitoParaFazer } from "./chamadaAxios";
import UserContext from "../contexts/UserContext";

export default function HabitosDoDia({ habit, habitosDeHoje }){
	const { user } = useContext(UserContext);
	const [color, setColor] = useState(false);
	const usuarioLocal = JSON.parse(localStorage.getItem("user"));

	function feitoOuNao(habit){
		const config = { headers: { Authorization: `Bearer ${user.token || usuarioLocal}` } };
		const id = habit.id;
		let req = "";

		(habit.done) ? (req = habitoParaFazer(id, config)) : (req = habitoFeito(id, config));

		req.then(() => {
			habitosDeHoje();
			setColor(true);
		});
		req.catch(() => alert("Tente novamente."));
	}

	return (
		<> 
			<Container>
				<div>
					<h1>{habit.name}</h1>
					<p>Sequência atual: <Sequencia color={habit.done && color}>{habit.currentSequence} {habit.currentSequence===1 ? "dia" : "dias"}</Sequencia></p>
					<p>Seu recorde: <Sequencia color={habit.highestSequence>0 && habit.highestSequence===habit.currentSequence}>{habit.highestSequence} {habit.highestSequence===1 ? "dia" : "dias"}</Sequencia></p>
				</div>
				<Feito color={habit.done} onClick={() => feitoOuNao(habit)}/>
			</Container>
		</>
	);
}

const Container = styled.div`
    margin: 0 auto;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    div {
        width: max-content;
    }

    h1 {
        font-size: 20px;
        color: #666;
        margin-bottom: 3px;
    }
	Check
    p {
        font-size: 13px;
        color: #666;
        margin-bottom: 2px;
    }
`;

const Feito = styled(AiFillCheckSquare)`
  font-size: 89px;
  color: ${props => (!props.color) ? "#EBEBEB" : "#8FC549"};
`;

const Sequencia = styled.span`
    color: ${props => (!props.color) ? "#666" : "#8FC549"};
`;