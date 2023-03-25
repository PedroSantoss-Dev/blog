import * as S from "./styled";

export const Menu = () => {
    return(
        <S.Menu>
            <S.Btn to="/"><S.Home/> Home</S.Btn>
            <S.Btn to="/users"><S.Users/> Users</S.Btn>
        </S.Menu>
    )
};