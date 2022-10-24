import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){ 
	const { user } = useContext(UserContext);

	return(
		<Topo>
			<Link to="/hoje">
				<h1>TrackIt</h1>
			</Link>
			<img src={user.image} alt={user.name} />
		</Topo>
	);
}

const Topo = styled.div`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    
    h1{
        color: #FFFFFF;
        font-family: 'Playball';
        font-size: 39px;
    }
    
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;