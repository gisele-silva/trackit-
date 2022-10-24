import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../components/assets/logo.png";
import UserContext from "../contexts/UserContext";
import { ImagemLogo, Container, Input, Botao } from "../layouts/LoginIncreverSe";
import { inscreverSe } from "../components/chamadaAxios";
import { Circles } from "react-loader-spinner";

export default function Login() {
	
	const { setUser } = useContext(UserContext);
	const user = localStorage.getItem("user");
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [botao, setBotao] = useState(true);

	useEffect(() => {
		user ? navigate("/hoje") : setUser(null);	
	}, [navigate, user, setUser]);

	function login(e){
		e.preventDefault();
		setBotao(false);

		const body = {email, password};
		const req = inscreverSe(body);

		req.then(res => {
			const novoUsuario = {
				id: res.data.id, 
				name: res.data.name, 
				token: res.data.token, 
				image: res.data.image
			};
			setUser(novoUsuario);
			localStorage.setItem("user", JSON.stringify(res.data.token));
			navigate.push("/hoje");
		});
		req.catch(() => {
			alert("Email ou senha incorretos");
			setBotao(true);
		});
	}

	return (
		<>
			<ImagemLogo>
				<img src={logo} alt="TrackIt"/>
			</ImagemLogo>
			<Container>
				<form onSubmit={login}>
					<Input 
						type="text" 
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
					<Botao type="submit" disabled={botao===true ? "" : "disabled"}>
						{botao===true ? "Entrar" : <Circles type="ThreeDots" color="#FFF" height={50} width={50} />}
					</Botao>
				</form>
				<Link to="/inscreverSe">
					<p>Não tem uma conta? Cadastre-se!</p>
				</Link>
			</Container>
		</> 
	);
}