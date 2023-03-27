import { IPost } from "../../../@types/indes";
import * as S from "./styled";

export const Post = ({title,body,id}:IPost) => {
    return(
        <S.Posts  to={`posts/${id}`}>
            <S.Title>{title}</S.Title>
            <S.Body>{body}</S.Body>        
        </S.Posts>
    )
}