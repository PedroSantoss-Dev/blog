import * as S from "./styled";

export const Navbar = () => {
    return(
        <S.Header>
            <S.Logo/>
            <S.Nav>
                <S.Btn>users</S.Btn>
                <S.Btn>posts</S.Btn>
            </S.Nav>
        </S.Header>
    )
}