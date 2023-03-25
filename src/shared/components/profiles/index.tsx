import { useEffect, useState } from "react";
import axios from "axios"
import * as S from "./styled";
import { IUser } from "../../../@types/indes"


export const CardUser = ({id,name,username,email,phone,website}:IUser) => {
    const [ avatar, setAvatar ] = useState<any>([]);

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
        <S.Card to={`user/${id}`}>
            <S.Avatar src={avatar.message} />
            <S.Name>{name}</S.Name>
            <S.Email>{email}</S.Email>
        </S.Card>
    )
}