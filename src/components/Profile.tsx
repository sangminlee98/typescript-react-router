import React from 'react';
import { useParams } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
type Data = {
  velopert: {name: string, description: string},
  gildong: {name: string, description: string}
};
const data: Data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공'
  }
}
const Profile = () => {
  const {username} = useParams();
  const profile = data[username as keyof Data];
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample/>
    </div>
  );
};

export default Profile;