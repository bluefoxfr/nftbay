import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  background-color: #1B202C;
`

const LogoContainer = styled.div`
  display: flex;
  background-color: #1B202C;
`

const TitleContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  align-self: center;
  position: absolute;
  margin-bottom: 275px;
  margin-left: 250px;
  background: none;
`

const NavBar = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  align-self: center;
  position: absolute;
  margin-top: 39px;
  margin-left: 478px;
  background: none;
  gap: 50px;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 170px;
  line-height: 250px;
  color: #FFB800;
`

const LogoHeader = styled(Image)`
  position: absolute;
  width: 1025.4px;
  height: 827.04px;
  top: 0;
  left: 0;
  margin: auto;
  margin-top: 100px;
  background: none;
`

const ButtonLogin = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3.5px 15px;
  border: 3.57948px solid #00D1FF;
  border-radius: 10.2271px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32.7267px;
  line-height: 41px;
  background: none;
  cursor: pointer;
`

const ButtonShop = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3.5px 15px;
  border: 3.57948px solid #DB00FF;
  border-radius: 10.2271px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32.7267px;
  line-height: 41px;
  background: none;
  cursor: pointer;
`

const ButtonFaq = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3.5px 15px;
  border: 3.57948px solid #FF9900;
  border-radius: 10.2271px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32.7267px;
  line-height: 41px;
  background: none;
  cursor: pointer;
`

const Home: NextPage = () => {
  const router = useRouter();


  return (
    <Wrapper>
      <TitleContainer>
        <Title>NFT BAY</Title>
      </TitleContainer>
      <LogoContainer>
        <LogoHeader src='/logohudhome.svg' alt='logo' width='1025' height='827' />
      </LogoContainer>
      <NavBar>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonShop onClick={() => router.push('/shop')}>Shop</ButtonShop>
        <ButtonFaq>Faq</ButtonFaq>
      </NavBar>
      </Wrapper>
  )
}

export default Home
