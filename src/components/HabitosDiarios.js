/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function HabitosDiarios({ dia, diaCheck }){
	return (
		<Dia diaCheck={diaCheck}>
			{dia}
		</Dia>
	);
}

const Dia = styled.div`
    background-color: ${props => (props.diaCheck ? "#CFCFCF" : "#FFF")};
    width: 30px;
    height: 30px;
    margin-right: 4px;
    font-size: 20px;
    background-color: #FFFFFF;
    border: 1px solid ${props => (props.diaCheck ? "#CFCFCF" : "#D4D4D4")};
    color: ${props => (props.diaCheck ? "#FFF" : "#DBDBDB")};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;    
`;