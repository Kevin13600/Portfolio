import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ohmyfoodImg from '../assets/Ohmyfood.webp';
import printItImg from '../assets/Print_it.webp';
import kasaImg from '../assets/kasa.webp';
import ninaCarducciImg from '../assets/Nina-Carducci.webp';
import sophieImg from '../assets/sophie.webp';
import eventsImg from '../assets/724events.webp';
import argentBankImg from '../assets/argentbank.webp';
import bookiImg from '../assets/booki.webp';
import worksSvg from '../assets/works.svg';
import transportImg from '../assets/transport.webp';

const WorksSection = styled.section`
  background-color: #f8f8f8;
  padding: 60px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const BackgroundSvg = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20%;
  height: 100%;
  background-image: url(${worksSvg});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #FF4A57;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const CarouselWrapper = styled.div`
  .slick-dots {
    bottom: -40px;
    li {
      width: 50px;
      height: 5px;
      margin: 0 5px;
      button {
        &:before {
          content: '';
          width: 100%;
          height: 100%;
          background-color: #666;
          opacity: 0.25;
        }
      }
      &.slick-active button:before {
        background-color: #FF4A57;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    .slick-dots {
      bottom: -30px;
      li {
        width: 30px;
        margin: 0 3px;
      }
    }
  }
`;

const ProjectCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.06),
    0 3px 6px rgba(0, 0, 0, 0.08);
  height: 400px;
  transition: all 0.3s ease-in-out;

  &:hover {
    0 10px 20px rgba(0, 0, 0, 0.08),
    0 6px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 992px) {
    height: auto;
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    gap: 5px;
  }
`;

const TechTag = styled.span`
  background-color: #e0e0e0;
  color: #333;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF4A57;
    color: white;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 3px 8px;
  }
`;

const GithubLink = styled.a`
  color: #333;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF4A57;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const projects = [
    {
      title: "Ohmyfood",
      description: "Une application mobile-first de réservation de restaurants avec des animations CSS.",
      image: ohmyfoodImg,
      techStack: ["HTML", "CSS", "Sass"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_4_Ameliorez_l_interface_d-un_site_mobile_avec_des_animations_CSS_10042024"
    },
    {
      title: "Print It",
      description: "Une application web pour une entreprise d'impression avec des fonctionnalités interactives.",
      image: printItImg,
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_5_Premiers_pas_sur_le_langage_javaScript_23052024"
    },
    {
      title: "Kasa",
      description: "Une plateforme moderne de location immobilière construite avec React.",
      image: kasaImg,
      techStack: ["React", "CSS", "React Router"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_7_Creez_une_application_web_de_location_immobiliere_avec_React_16072024"
    },
    {
      title: "Portfolio Nina Carducci",
      description: "Site web portfolio d'un photographe avec optimisation des images.",
      image: ninaCarducciImg,
      techStack: ["HTML", "CSS", "JavaScript", "SEO"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_8_Optimisez_le_referencement_d_un_site_de_photographe_01082024"
    },
    {
      title: "Portfolio Sophie Bluel",
      description: "Portfolio d'architecte avec gestion dynamique du contenu.",
      image: sophieImg,
      techStack: ["HTML", "CSS", "JavaScript", "Intégration API"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_6_Creez_une_-page_web_dynamique_avec_JavaScript_30052024"
    },
    {
      title: "724 Events",
      description: "Site web de planification d'événements avec fonctionnalités interactives.",
      image: eventsImg,
      techStack: ["React", "CSS", "Débogage"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_9_Debuggez_le_site_d_une_agence_d_evenementiel_22082024"
    },
    {
      title: "Argent Bank",
      description: "Application bancaire avec authentification utilisateur et gestion de compte.",
      image: argentBankImg,
      techStack: ["React", "Redux", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_10_Implementez_le_front_end_d_une_application_bancaire_avec_React_13092024"
    },
    {
      title: "Booki",
      description: "Site web de réservation de voyages avec design responsive.",
      image: bookiImg,
      techStack: ["HTML", "CSS", "Design Responsive"],
      githubLink: "https://github.com/Kevin13600/Uyttenbroeck_Kevin_3_Creez_la_page_d_accueil_d_une_agence_de_voyage_avec_HTML_CSS_220224"
    },
    {
      title: "Efraïm Transport",
      description: "Site web de réservation de transports multilangues.",
      image: transportImg,
      techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Nodemailer"],
      githubLink: "https://github.com/Kevin13600/Efra-m-transport"
    }
  ];

  const Works = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
    };
  
    return (
        <WorksSection id="works">
          <BackgroundSvg />
          <Container>
            <Title>Projets</Title>
            <CarouselWrapper>
              <Slider {...settings}>
                {projects.map((project, index) => (
                  <div key={index}>
                    <ProjectCard>
                      <ProjectImage src={project.image} alt={project.title} />
                      <ProjectContent>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <TechStack>
                          {project.techStack.map((tech, techIndex) => (
                            <TechTag key={techIndex}>{tech}</TechTag>
                          ))}
                        </TechStack>
                        <GithubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                        </GithubLink>
                      </ProjectContent>
                    </ProjectCard>
                  </div>
                ))}
              </Slider>
            </CarouselWrapper>
          </Container>
        </WorksSection>
      );
    };
    
    export default Works;