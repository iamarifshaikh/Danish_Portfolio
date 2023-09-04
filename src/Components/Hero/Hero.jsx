import React from 'react'
import styled from "styled-components"
import {bio as info} from '../../Constants/constants'
import Typewriter from "typewriter-effect";
import danish from '../../assets/danish.jpg';
import Animation from '../../Animation';
import { Link as LinkR } from 'react-router-dom';

const HeroContainer = styled.div`
    background-color: ${({theme}) => theme.cardLight};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    } 

    @media screen and (max-width: 640px) {
        padding: 32px 16px;
    }

    z-index: 1;
    clip-path: polygon(0 0,100% 0,100% 100%,70% 95%,0 100%);
`;

const HeroBg = styled.div`
position: absolute;
display: flex;
justify-content: end;
top: 50%;
right: 0;
bottom: 0;
left: 50%;
overflow: hidden;
width: 80%;
height: 100%;
padding: 0 30px;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media screen and (max-width: 960px){
    padding: 0 0px;
    top: 30%;   
    justify-content: center;
}
`;

const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width:960px){
        flex-direction: column;
    }
`;

const HeroLeft = styled.div`
    width: 100%;
    order: 1;

    @media screen and (max-width:960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width:640px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const HeroRight = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;

    @media screen and (max-width:960px){
        order: 1;
        /* display: flex; */
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        margin-bottom: 80px;
    }

    @media screen and (max-width:640px){
        order: 1;
        /* display: flex; */
        /* align-items: center; */
        /* flex-direction: column; */
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size:50px;
    font-weight: 700;
    color: ${({theme}) => theme.textPrimary};
    line-height: 68px;

    @media screen and (max-width:960px){
        text-align: center;
    }

    @media screen and (max-width:640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const Loop = styled.div`
    font-size: 32px;
    font-weight: 600px;
    color: ${({theme}) => theme.textPrimary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width:960px){
        text-align: center;
    }

    @media screen and (max-width:640px){
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: pointer;
`;

const SubTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme.textPrimary+95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width:960px){
     text-align: center;
    }

    @media screen and (max-width:640px){
        font-size: 16px;
        line-height: 32px;
    }

`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 75%;
    max-width: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    color: ${({theme}) => theme.white};
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271,100%,50%,1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634;
        filter: brightness(1);
        }    
            
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

const Image = styled.img`
width: 100%;
height: 100%;
position: relative;
border-radius: 50%;
max-width: 400px;
max-height: 400px;
object-fit: cover;
object-position: center;
border: 2px solid ${({theme}) => theme.primary};

@media screen and (max-width:768px){
    max-width: 300px;
    max-height: 300px;
}

@media screen and (max-width:640px){
    max-width: 250px;
    max-height: 250px;
}
`;

const Hero = () => {
    return (
        <div id='about'>
            <HeroContainer>
                <HeroBg><Animation /></HeroBg>
                <HeroContent>
                    <HeroLeft>
                        <Title>Hi, I am <br /> {info.name}</Title>
                        <Loop>I am a <Span><Typewriter options={{strings:info.roles, autoStart:true,loop:true}}/></Span></Loop>
                        <SubTitle>{info.description}</SubTitle>
                        {/* <ResumeButton to={info.resume}>Resume &nbsp; <FaPaperclip size={15}/></ResumeButton> */}
                    </HeroLeft>
                    <HeroRight>
                        <Image src={danish} alt="Photo Of Mine"/>
                    </HeroRight>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero;