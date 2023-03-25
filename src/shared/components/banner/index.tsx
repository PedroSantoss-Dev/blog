import * as S from "./styled";
import banner from "../../assets/banner.png"
import { Menu } from "../bar";

export const Banner = () => {
    return(
        <S.Container>
            <Menu/>
            <S.Banner src={banner}/>
        </S.Container>
    )
}