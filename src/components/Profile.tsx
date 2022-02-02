import React from 'react';
import { RouteComponentProps } from 'react-router';

type Data = {
  velopert: {name: string, description: string},
  gildong: {name: string, description: string}
}
type MatchParams = {
  username: string;
}
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
const Profile = ({match}: RouteComponentProps<MatchParams>) => {
  const { username } = match.params;
  const profile = data[username as keyof Data];
  if(!profile) <div>존재하지 않는 사용자입니다.</div>
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;