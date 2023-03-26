import { useState, useEffect } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./tabSlector";
import * as S from "./styled";
import { IProps, IPost} from "../../../@types/indes";
import api from "../../service/api";
 

export const TabBar = ({
 userId,
 city,
 street,
 suite,
 zipcode,
 lat,
 lng,
 name,
 catchPhrase,
 bs
}:IProps) => {
  const [ filterPost, setFilterPost ] = useState<IPost[]>([])
  const [selectedTab, setSelectedTab] = useTabs([
    "Address",
    "Company",
    "Posts",
  ]);
  const getData = async () => {
    await api.get('posts')
    .then((response) => {
        setFilterPost(response.data)
  })
}
console.log(street)
const filterById = filterPost.filter((item) => item.userId === userId )
useEffect(() => {
  getData()
},[])

  return (
    <>
      <S.Nav>
        <TabSelector
          isActive={selectedTab === "Address"}
          onClick={() => setSelectedTab("Address")}
        >
          Address
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "Company"}
          onClick={() => setSelectedTab("Company")}
        >
          Company
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "Posts"}
          onClick={() => setSelectedTab("Posts")}
        >
          Posts
        </TabSelector>
      </S.Nav>
      <div>
        <TabPanel hidden={selectedTab !== "Address"}><S.Container>
          <S.Title><label>City</label>:  {city}</S.Title>
          <S.Body><label>Street</label>: {street}</S.Body>
          <S.Body><label>Suite</label>: {suite}</S.Body>
          <S.Body><label>Zipicode</label>: {zipcode}</S.Body>
          <S.Body><label>Lat</label>: {lat}</S.Body>
          <S.Body><label>Lng</label>: {lng}</S.Body>
          </S.Container></TabPanel>
        <TabPanel hidden={selectedTab !== "Company"}>
          <S.Container>
            <S.Title><label>Name</label>: {name}</S.Title>
            <S.Body><label>Catch Phrase</label>: {catchPhrase}</S.Body>
            <S.Body><label>Bs</label>: {bs}</S.Body>
          </S.Container>
        </TabPanel>
        <TabPanel className="panel" hidden={selectedTab !== "Posts"}>
          {filterById.map((item) => (
          <S.Posts key={item.id} >
            <S.Title>{item.title}</S.Title>
            <S.Text>{item.body}</S.Text>
          </S.Posts>
        ))}</TabPanel>
      </div>
    </>
  );
}