import React from "react";
import * as S from "./styles"

const Card = ({ imageSource, characterStatus, monsterName }) => {
    
    return (
        <S.Div >
            <S.H2>{monsterName}</S.H2>
            <S.Img src={imageSource} alt={`${monsterName} monster`} />
            <S.Div className={`${characterStatus}`}>
                <h3>{characterStatus}</h3>
            </S.Div>
        </S.Div>
    );
};

export default Card;
