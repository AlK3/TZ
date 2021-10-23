import React from 'react';
import { useSelector } from 'react-redux';
import { Heading } from '../../components/Heading/Heading.styles';
import { RootState } from '../../store';
import { StyledProfile } from './Profile.styles';

export const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <StyledProfile>
      <Heading>{user}</Heading>
    </StyledProfile>
  );
}