import React, { Fragment } from 'react';
import { Column, Button, Icon, Title } from "rbx";
import { FaCrosshairs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

import "../../styles/home.scss";
 
const Home = () => (
  <Column.Group centered>
    <Column size="half"  textAlign="centered" id="home">
      <img src={logoImg} className="status_img" alt="new"/>
      <Title size={4}>Delivery de comida rápido e fácil</Title>
      <Title subtitle size={4}>Dos melhores restaurantes, direto para a sua casa!</Title>
      <Title subtitle size={6}>Conheça nossos restaurantes</Title>
      <Link to='/restaurants'>
        <Button size="medium" color="custom-orange">
          <Icon size="small" color="white">
            <FaCrosshairs />
          </Icon>
          <span class="has-text-white">ENCONTRAR AGORA</span>
        </Button>
      </Link>
    </Column>
  </Column.Group>
)
 
export default Home;