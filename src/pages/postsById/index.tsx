import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import * as S from "./styled";
import { IComments, IPost } from "../../@types/indes";
import api from "../../shared/service/api";
import { Comments } from "../../shared/components/comments";



export const PostsById = () => {
    const [ posts, setPosts ] =  useState<IPost>()
    const [ comments, setComments ] =  useState<IComments[]>()

    const {id} = useParams()
    const getDataById = async() => {
        await api.get(`posts/${id}`)
        .then((response) => {
            setPosts(response.data)
        })
    }
    const getComments = async() => {
        await api.get(`posts/${id}/comments`)
        .then((response) => {
            setComments(response.data)
        })
    }
    useEffect(() => {
        getDataById()
        getComments()
    },[id])
    return(
        <S.Container>
            <S.Posts>
        <S.Title>{posts?.title}</S.Title>
        <S.Body>{posts?.body}</S.Body>
            </S.Posts>
            <S.Comments>
                {comments?.map((item, index) => (
                    <Comments
                    key={index}
                    id={item.id}
                    postId={item.postId}
                    name={item.name}
                    email={item.email}
                    body={item.body}
                    />
                ))}
            </S.Comments>
        </S.Container>
    )
}