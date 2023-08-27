import React from 'react'
import styled from "styled-components"
import { skills } from '../../Constants/constants.js'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.textPrimary};

    @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
    }
`;

const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme}) => theme.textSecondary};

    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
`;

const Skill = styled.div`
    width: 100%;
    max-width:500px;
    background-color: ${({theme}) => theme.card};
    border: 0.1px solid #854CE6;
    border-radius: 16px;
    padding: 18px 36px;

    @media (max-width: 768px){
        max-width: 400px;
        padding: 10px 36px;
    }

    @media (max-width:480px){
        max-width: 300px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.textSecondary};
    margin-bottom: 12px;
    text-align: center;
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-size: 16px;
    color: ${({theme}) => theme.textPrimary+80};
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.textPrimary+80};
    padding: 12px 16px;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: 14px;
        padding: 8px 12px;
    }

    @media (max-width:500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Skills</Title>
                <Description>A Collection of Tech Skills I'm Enthusiastically Developing.</Description>
                <SkillContainer>
                    {skills.map((item) => (
                    <Skill>
                        <SkillTitle>{item.title}</SkillTitle>
                        <SkillList>
                            {item.skills.map((skill) => (
                                <SkillItem>
                                    <SkillImage src={skill.image}/>
                                    {skill.name}
                                </SkillItem>
                            ))}
                        </SkillList>
                    </Skill>
                    ))}
                </SkillContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;