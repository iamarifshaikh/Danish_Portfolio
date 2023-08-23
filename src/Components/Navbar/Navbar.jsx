import React, { useState } from 'react'
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from 'styled-components';
import {SiAndroidauto} from 'react-icons/si'
import {CgMenuRight} from 'react-icons/cg';

const Nav = styled.div`
background-color:${({ theme }) => theme.cardLight};
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;

const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height:60px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1200px;
`;

const NavLogo = styled(LinkR)`
width:80%;
padding: 0 6px;
display:flex;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
align-items:center;

@media screen and (max-width:640px){
    padding: 0 0px;
}
`;

const MobileIcon = styled.div`
display:none;
@media screen and (max-width:768px){
display:block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%,50%);
font-size:1.5rem;
cursor:pointer;
color:${({ theme }) => theme.textPrimary}
}
`;

const NavItems = styled.ul`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap: 32px;
padding: 0 6px;
list-style:none;
 
@media screen and (max-width:768px){
    display:none
}
`;

const NavLink = styled.a`
color:${({ theme }) => theme.white};
padding:0 10px;
cursor:pointer;
text-decoration:none;
transition: all 0.3s ease-in;
&:hover {
    color:${({ theme }) => theme.primary};
}
`;

const ButtonContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
height:100%;
padding:0 6px;

@media screen and (max-width:640px){
    display:none;
}
`;

const GithubButton = styled.div`
border:1.8px solid ${({theme}) => theme.primary};
color: ${({ theme }) => theme.primary};
border-radius: 20px;
justify-content: center;
align-items: center;
padding: 8px 20px ;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
height:70%;
transition: all 0.8s;
&:hover{
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white}
}

@media screen and (max-width:640px){
    font-size:0.8rem;
}
`;

export const Span = styled.div`
padding:0 4px;
font-weight: bold;
font-size: 18px;
`;
 
const MobileMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
position: absolute;
top: 80;
right: 0;
width: 100%;
padding: 12px 40px 24px 40px;
background: ${({theme}) => theme.cardLight+99};
transition: all 0.3s ease-in-out;
transform: ${({open}) => open ? 'translateX(0%)' : 'translateX(100%)'};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0,0,0,0.3);
opacity: ${({open}) => (open ? "1" : "0")};
z-index: ${({open}) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(LinkR)`
color:${({theme}) => theme.textPrimary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover{
    color: ${({theme}) => theme.primary};
}
`;

const Navbar = () => {
    
    const [open,setOpen] = useState(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a style={{display:"flex",alignItems:'center',color:"white",marginBottom:"20",cursor:"pointer"}}>
                        {!open && (<><SiAndroidauto /><Span>Danish</Span></>)}
                    </a>
                </NavLogo>
                <MobileIcon><CgMenuRight onClick={() => {setOpen(!open)}}/></MobileIcon>
                <NavItems>
                    <NavLink href='about'>About</NavLink>
                    <NavLink href='skills'>Skills</NavLink>
                    <NavLink href='experience'>Experience</NavLink>
                    <NavLink href='projects'>Projects</NavLink>
                    <NavLink href='education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton>GitHub Profile</GithubButton>
                </ButtonContainer>
                {open && (
                    <MobileMenu open={open}>
                        <MobileMenuLinks href="about" onClick={() => {setOpen(!open)}}>About</MobileMenuLinks>
                        <MobileMenuLinks href="skills" onClick={() => {setOpen(!open)}}>Skills</MobileMenuLinks>
                        <MobileMenuLinks href="experience" onClick={() => {setOpen(!open)}}>Experience</MobileMenuLinks>
                        <MobileMenuLinks href="projects" onClick={() => {setOpen(!open)}}>Projects</MobileMenuLinks>
                        <MobileMenuLinks href="education" onClick={() => {setOpen(!open)}}>Education</MobileMenuLinks>
                        <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="/" target="_blank">Github Profile</GithubButton>
                    </MobileMenu>
                )}
            </NavContainer>
        </Nav>
    )
};

export default Navbar;