import { useEffect, useState } from "react";
import { IUser } from "../../@types/indes";
import api from "../../shared/service/api";
import { CardUser } from "../../shared/components/profiles";
import * as S from "./styled";


export const Users = () => {
    const [ user, setUser ] = useState<IUser[]>([]);

    const loadData = async() => {
        await api.get('users')
        .then((response) => {
            setUser(response.data)
        })
    }
    
    useEffect(() => {
        loadData();
    },[])
    return(
        <S.Users>
            <S.Baanner></S.Baanner>
            {
                user.map((item, index) => (
                    <CardUser
                    key={index}
                    id={item.id}
                    name={item.name}
                    username={item.username}
                    email={item.email}
                    phone={item.name}
                    website={item.website}
                    />
                ))
            }
        </S.Users>
    )
}