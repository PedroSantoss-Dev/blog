import * as S from "./styled";
import banner from "../../assets/banner.png"

export const Banner = () => {
    return(
        <S.Container>
            <S.Title>BLOG</S.Title>
            <S.Banner src={banner}/>
        </S.Container>
    )
}