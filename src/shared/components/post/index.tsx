import { IPost } from "../../../@types/indes";
import * as S from "./styled";

export const Post = ({title,body}:IPost) => {
    return(
        <S.Post>
            <S.Title>{title}</S.Title>
            <S.Body>{body}</S.Body>
        </S.Post>
    )
}