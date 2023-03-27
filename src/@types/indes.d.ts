import { ReactNode } from "react"

export interface IPost{
userId: number    
id: number
title: string
body: string
};

export interface IComments{
    postId: number
    id: number
    name: string
    email: string
    body: string
};

export interface IAvatar{
    message: string
    status: string
};
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  export interface IUserWithKey extends IUser {
    key: number;
  }
  
export interface ITabBar{
    isActive: boolean
    children: ReactNode
    onClick: () => void
}
export interface IProps{
    userId: number
    street: string
    suite: string
    city: string
    zipcode: string
    lat: string
    lng: string
    name:string
    catchPhrase: string
    bs: string
}

