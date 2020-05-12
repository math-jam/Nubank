import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Top, Logo, Title } from './styled'

import logo from '../../../assets/Logo/Logo.png'

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo}></Logo>
        <Title>Matheus</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  )
}