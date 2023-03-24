import { useEffect, useState } from "react";
import { IAvatar, IComments } from "../../../@types/indes";
import * as S from "./styled";
import axios from "axios";


export const Comments = ({name,email,body,id,postId}:IComments) => {
    const [ avatar, setAvatar ] = useState<any>([])

    const Avatar = async() => {
         await axios.get('https://dog.ceo/api/breeds/image/random')
         .then((response) => {
            setAvatar(response.data)
        })
    }
    useEffect(() =>{
        Avatar()
    },[])
    return(
        <S.Container>
            <S.Box>
            <S.avatar src={avatar.message}/>
                <div className="perfil">
                <S.Email>{email}</S.Email>
                <S.Name>{name}</S.Name>
                </div>
            </S.Box>
            <S.Body>{body}</S.Body>
        </S.Container>
    )
}