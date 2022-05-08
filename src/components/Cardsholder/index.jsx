import React from "react";

import Card from "../Card";
import * as S from "./styles";

const CardsHolder = ({ data }) => {
    
    return (
        <S.Div>
            {data.map(character => (<Card
                    key={character.id.toString()}
                    id={character.id.toString()}
                    imageSource={character.image}
                    monsterName={character.name}
                    characterStatus={character.status}
                />     
            ))}
        </S.Div>
    );
};

export default CardsHolder;