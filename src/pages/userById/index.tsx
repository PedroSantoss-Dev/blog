import { useEffect, useState } from "react";
import api from "../../shared/service/api";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import { IUser } from "../../@types/indes";
import axios from "axios";


export const UserById = () => {
    const [ user, setUser ] = useState<IUser>();
    const [ avatar, setAvatar ] = useState<any>([])


    const {id} = useParams();
    const getUserById = async() => {
        await api.get(`users/${id}`)
        .then((response) => {
            setUser(response.data)
        })
    }
    const Avatar = async() => {
        await axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
           setAvatar(response.data)
       })
    }
    useEffect(() => {
        getUserById();
        Avatar()
    },[])
    return(
        <S.Container>
            <S.avatar src={avatar.message}/>
            <h1>{user?.username}</h1>
           
        </S.Container>
    )
}