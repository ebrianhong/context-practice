import React from 'react'
import { useContext } from 'react';
import FamilyMemberContext from './FamilyMemberContext'; 

const Sister = () => {
  const familyMember = useContext(FamilyMemberContext);
  console.log('familyMember', familyMember);
  return (
    <div>Sister</div>
  )
}

export default Sister