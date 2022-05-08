import React, { forwardRef } from "react";
import * as S from "./styles.js";

const Header = forwardRef( ({ clickHandler } , ref)  => {

  return (
    <S.Div>
      <h1>Status dos Personagens por Episódio</h1>
      <S.Div className="input-holder">
        <S.Input
          type="number"
          placeholder="Ingresse o número do episódio"
          ref={ref}
        />
        <button type="button" onClick={clickHandler}>
          Ver
        </button>
      </S.Div>
    </S.Div>
  );
});

export default Header;
