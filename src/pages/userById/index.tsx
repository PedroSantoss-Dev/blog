import { useEffect, useState } from "react";
import api from "../../shared/service/api";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import { IUser } from "../../@types/indes";
import axios from "axios";
import { TabBar } from "../../shared/components/tabsBar";


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
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
             <TabBar
             userId={user?.id}
             city={user?.address.city}
             suite={user?.address.suite}
             street={user?.address.street}
             zipcode={user?.address.zipcode}
             lat={user?.address.geo.lat}
             lng={user?.address.geo.lng}
             name={user?.company.name}
             catchPhrase={user?.company.catchPhrase}
             bs={user?.company.bs}


             
             />
            
        </S.Container>
    )
}