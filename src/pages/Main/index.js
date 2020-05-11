import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/Header'
import { 
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles'

import Tabs from '../../components/Tabs'

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 3548,33</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 20,00 recebida de Matheus J Caixa hoje as 6:00AM
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  )
}