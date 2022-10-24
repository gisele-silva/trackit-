import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Porcentagem from "../contexts/Porcentagem";
import GlobalStyle from "../layouts/GlobalStyle";
import Login from "../telas/Login";
import InscreverSe from "../telas/InscreverSe";
import Hoje from "../telas/Hoje";
import Habitos from "../telas/Habitos";
import Historico from "../telas/Historico";

export default function App() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const [porcentagem, setPorcentagem] = useState(0);

	return (
		<>
			<UserContext.Provider value={{user, setUser}}>
				<Porcentagem.Provider value={{porcentagem, setPorcentagem}}>
					<BrowserRouter>
						<GlobalStyle />
						<Routes>
							<Route>
								<Route path="/" element={<Login />} />
								<Route path="/inscreverSe" element={<InscreverSe />} />
								<Route path="/habits" element={<Habitos />} />
								<Route path="/hoje" element={<Hoje />} />
								<Route path="/historico" element={<Historico />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</Porcentagem.Provider>
			</UserContext.Provider>
		</>
	);
}