import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import logo from "../components/assets/logo.png";
import { ImagemLogo, Container, Input, Botao } from "../layouts/LoginIncreverSe";
import { registro } from "../components/chamadaAxios";

export default function InscreverSe() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [botao, setBotao] = useState(true);

	function inscreverSe(e){
		e.preventDefault();

		setBotao(false);

		const body = {
			email,
			name,
			image,
			password
		};
		const req = registro(body);

		req.then(() => navigate("/"));
		req.catch(() =>{
			alert("Erro no preenchimento. Tente novamente.");
			setBotao(true);
		});
	}

	return (
		<>
			<ImagemLogo>
				<img src={logo} alt="TrackIt"/>
			</ImagemLogo>
			<Container>
				<form onSubmit={inscreverSe}>
					<Input 
						type="email" 
						placeholder="email" 
						value={email} 
						onChange={e => setEmail(e.target.value)} required
					/>
					<Input 
						type="password" 
						placeholder="senha" 
						value={password} 
						onChange={e => setPassword(e.target.value)} required
					/>
					<Input 
					type="text" 
						placeholder="nome" 
						value={name} 
						onChange={e => setName(e.target.value)} required
					/>
					<Input 
					type="url" 
						placeholder="foto" 
						value={image} 
						onChange={e => setImage(e.target.value)} required
					/>
					<Botao type="submit" disabled={botao===true ? "" : "disabled"}>
						{botao===true ? "Cadastrar" : <Circles type="ThreeDots" color="#FFF" height={50} width={50} />}
					</Botao>
				</form>
				<Link to="/">
					<p>Já tem uma conta? Faça login!</p>
				</Link>
			</Container>
		</>
	);
}