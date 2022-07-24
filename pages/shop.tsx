import type { NextPage } from 'next'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1B202C;
  height: 100%;
  width: 100%;
`

const TopContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 1000px;
`

const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 100%;
height: 100%;
`

const Title = styled.h1`
font-family: 'Lexend';
font-style: normal;
font-weight: 700;
font-size: 51.5725px;
line-height: 71px;
color: #FFB800;
cursor: pointer;
`

const PanierIcon = styled.img`
width: 52.48px;
height: 45.88px;
`

const SplineContainer = styled.div`
width: 345.29px;
height: 470.53px;
`

const DescContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 90px;
gap: 10px;
width: 469.43px;
height: 254.3px;
background: rgba(0, 0, 0, 0.47);
border: 5px solid #FFFFFF;
border-radius: 23px;
`

const TitleNft = styled.h1`
width: 316px;
height: 68px;
font-family: 'Lexend';
font-style: normal;
font-weight: 700;
font-size: 54.5538px;
line-height: 68px;
margin: 0;
padding: 0;
`

const DescNft = styled.p`
width: 314.54px;
height: 42px;
font-family: 'Lexend';
font-style: normal;
font-weight: 500;
font-size: 17.0481px;
line-height: 21px;
`

const PriceNft = styled.p`
width: 81px;
height: 21px;
font-family: 'Lexend';
font-style: normal;
font-weight: 300;
font-size: 17.0481px;
line-height: 21px;
padding: 0;
margin: 0;
`

const ButtonBuy = styled.button`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2.83273px 13px;
gap: 4.05px;
border: 3.32323px solid #FFFFFF;
border-radius: 9.49495px;
font-family: 'Lexend';
font-style: normal;
font-weight: 700;
font-size: 25.8993px;
line-height: 32px;
background: none;
cursor: pointer;
`

const Shop: NextPage = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopContainer>
        <Title onClick={() => router.push('/')}>NFTBAY</Title>
        <PanierIcon src='/panier.svg' alt='paniericon'/>
      </TopContainer>
      <ContentContainer>
        <SplineContainer>
          <Spline scene='https://prod.spline.design/WK0TSCy7DEwo3Il4/scene.splinecode'/>
        </SplineContainer>
        <DescContainer>
          <TitleNft>Saphir NFT</TitleNft>
          <DescNft>A red precious saphir NFT that you can buy now. In gemstone collection.</DescNft>
          <PriceNft>0,039 ETH</PriceNft>
          <ButtonBuy>BUY</ButtonBuy>
        </DescContainer>
      </ContentContainer>
    </Wrapper>
  )
}

export default Shop
