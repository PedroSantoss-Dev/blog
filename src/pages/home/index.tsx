import {useState, useEffect } from "react";
import { Post } from "../../shared/components/post"
import { IPost } from "../../@types/indes";
import api from "../../shared/service/api";

import * as S  from "./styled";
import { Banner } from "../../shared/components/banner";

export const Home = () => {
    const [post, setPost] = useState<IPost[]>()
    
    const loadData = async () => {
        await api.get('posts')
        .then((response) => {
            setPost(response.data)
        })
    }
    useEffect(() => {
        loadData()
    },[])
    return(
        <S.Main>
            <Banner/>
        {
            post?.map((item, index) => (
                <Post
                key={index}
                userId={item.userId}
                id = {item.id}
                title = {item.title}
                body = {item.body}
                />
            ))
        }
        
        </S.Main>
    )
}