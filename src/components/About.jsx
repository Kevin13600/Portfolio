import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import aboutBackground from '../assets/About.svg';
import aboutProfil from '../assets/About.webp';
import cvPDF from '../assets/CV.pdf';


const AboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-top: -49vh;
  z-index: 2;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: -639px;
  right: 0;
  bottom: 0;
  background-image: url(${aboutBackground});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  transform: rotate(22deg);
  z-index: 1;
  width: 1700px; 
  height: 125vh; 
  overflow: hidden; 
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25vh 5rem 0; 
  z-index: 3;
  position: relative;

  @media (max-width: 1050px) {
    padding: 25vh 2rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 15vh;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 30px;
  box-shadow: 0 0 0 10px #e0e0e0, 0 0 0 11px #d0d0d0;
  transition: transform 0.3s ease;
  margin: 0 auto;
  transform: ${props => props.$isSmallScreen 
    ? props.$transformValue 
    : 'rotate(-5deg)'
  };
  
  @media (min-width: 769px) {  
    &:hover {
      transform: rotate(-25deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: block;
`;

const TextContainer = styled.div`
  flex: 1;
  color: white;
  position: relative;
  backdrop-filter: blur(70px);
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #FF4A57;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #000C24;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #E6323F;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.8rem;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

const About = () => {
  const [transformValue, setTransformValue] = useState('rotate(-5deg)');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setTransformValue('rotate(-5deg)');
      }
    };

    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const scrollPosition = window.scrollY;
        const imagePosition = imageRef.current.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        
        const pivotAmount = ((scrollPosition + windowHeight / 2 - imagePosition) / windowHeight) * 45;
        setTransformValue(`rotateY(${pivotAmount}deg)`);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AboutSection id="about">
      <BackgroundImage />
      <ContentWrapper>
        <ImageContainer>
          <ImageWrapper 
            $isSmallScreen={isSmallScreen} 
            $transformValue={transformValue} 
            ref={imageRef}
          >
            <ProfileImage src={aboutProfil} alt="Profil" />
          </ImageWrapper>
        </ImageContainer>
        <TextContainer>
          <Title>À propos de moi</Title>
          <Description>
            Développeur engagé, formé par OpenClassrooms, je suis prêt à mobiliser mes compétences en développement pour contribuer pleinement à des projets d'équipe, alliant communication efficace et rigueur dans l'exécution.
          </Description>
          <DownloadButton 
            href={cvPDF}
            download="CV_Kevin_Uyttenbroeck.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger CV
          </DownloadButton>
        </TextContainer>
      </ContentWrapper>
      <ScrollIndicator>Défiler</ScrollIndicator>
    </AboutSection>
  );
};

export default About;