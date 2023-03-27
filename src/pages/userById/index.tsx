import { useEffect, useState } from "react";
import api from "../../shared/service/api";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import { IUser, IUserWithKey } from "../../@types/indes";
import { TabBar } from "../../shared/components/tabsBar";


export const UserById = () => {
  const [user, setUser] = useState<IUserWithKey>({
    key:0,
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });
  const [avatar, setAvatar] = useState<string>();
 
  const { id } = useParams<{ id: string }>();

  const getUserById = async () => {
    try {
      const response = await api.get(`users/${id}`);
      setUser({
        key: response.data.id,
        id: response.data.id,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
        address: {
          street: response.data.address.street,
          suite: response.data.address.suite,
          city: response.data.address.city,
          zipcode: response.data.address.zipcode,
          geo: {
            lat: response.data.address.geo.lat,
            lng: response.data.address.geo.lng,
          },
        },
        phone: response.data.phone,
        website: response.data.website,
        company: {
          name: response.data.company.name,
          catchPhrase: response.data.company.catchPhrase,
          bs: response.data.company.bs,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAvatar = async () => {
    try {
      const response = await api.get('https://dog.ceo/api/breeds/image/random');
      setAvatar(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById();
    getAvatar();
  }, []);

  return (
    <S.Container>
      <S.avatar src={avatar} />
      <h1>{user?.username}</h1>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <p>{user?.website}</p>
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
  );
};
