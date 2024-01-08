import React from 'react';
import styled from 'styled-components';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoTwitter } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLink = styled(Link)`
  color: #525258;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    color: rgb(239, 45, 106);
    transition: 0.3s;
}`;

const SocialMedia = () => {

  return (

    <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', fontSize: '18px', alignItems: 'center'}}>
      <li><SocialLink to="/"><GrFacebookOption /></SocialLink></li>
      <li><SocialLink to="/"><IoLogoTwitter /></SocialLink></li>
      <li><SocialLink to="/"><FaLinkedinIn /></SocialLink></li>
      <li><SocialLink to="/"><FaYoutube /></SocialLink></li>
    </ul>
    
  );
};

export default SocialMedia;
