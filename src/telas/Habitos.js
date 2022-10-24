import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { listarHabitos } from "../components/chamadaAxios";
import Header from "../components/headerMenu/Header";
import Menu from "../components/headerMenu/Menu";
import NovoHabito from "../components/NovoHabito";
import TodosHabitos from "../components/TodosHabitos";
import UserContext from "../contexts/UserContext";


export default function Habitos() {
	const { user } = useContext(UserContext);
	const [box, setBox] = useState(false);
	const [habitos, setHabitos] = useState(null);
	const usuarioLocal = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		habitosUsuario();
	},[]);
    
	function habitosUsuario(){
		const configuracao = { headers: { Authorization: `Bearer ${user.token || usuarioLocal}` } };
		const req = listarHabitos(configuracao);

		req.then(resposta => setHabitos(resposta.data));
		req.catch(() => alert("Tente novamente mais tarde."));
	}

	if (habitos === null){ return null}

	return (
		<>
			<Header />
			<Container>
				<Titulo>
					<h1>Meus hábitos</h1>
					<div onClick={() => setBox(!box)}>+</div>
				</Titulo>
				{box === true ?
					<NovoHabito box={box} setBox={setBox} habitosUsuario={habitosUsuario}/>
					:
					""
				}				
				{habitos.length === 0 ? 
					<p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
					</p>
					:
					habitos.map(h => (
						<TodosHabitos key={h.id} habito={h} habitosUsuario={habitosUsuario}/>
					))
					
				}
			</Container>
			<Menu />
		</>
	);}

const Container = styled.div`
    background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
	h1 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
`;

const Titulo = styled.div`
    display: flex;
	color: #126BA5;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
	margin-bottom: 25px;
    line-height: 29px;
      
    div {
		background-color: #52B6FF;
		color: #FFF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        display: flex;
		align-items: center;
        justify-content: center;
    }
`;