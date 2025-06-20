import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Github, Linkedin, Mail, Phone, Award, Code, Smartphone, Globe, User, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Portfolio = () => {
  const [selectedCertCategory, setSelectedCertCategory] = useState('Technical');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('Websites');
  const [visibleOverlay, setVisibleOverlay] = useState(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [hasVisitedContact, setHasVisitedContact] = useState(false);

  const fullText = "Web Developer • Android Developer";
  const profilePhotoUrl = "/images/vina.png";
  const aboutPhotoUrl = "/images/about.jpg";
  const backgroundImageUrl = "/images/freepik__adjust__84865.png";
  const criminal = "/images/criminal.png";
  const quiz = "/images/quiz.png";
  const craft = "/images/craft.png";
  const pf = "/images/portfolio.png";
  const infogate = "/images/infogate.jpg";
  const sangini = "/images/sangini.jpg";
  const dd = "/images/digitaldetox.jpg";
  const biot = "/images/BlockchainIOT.jpg";
  const ss = "/images/SoulSattva.jpg";
  const mm = "/images/moodmelodies.png";
  const nf = "/images/nutrifit.png";
  const achievementPaper = "/images/statelevelcertif.jpg";
  const achievementInternship = "/images/internshipcertif.jpg";
  const volunteerPhoto1 = "/images/v1.jpg";
  const volunteerPhoto2 = "/images/v2.jpg";

  const certificates = {
    'Technical': [
      {
        title: 'C',
        image: '/images/c.jpg',
      },
      {
        title: 'C++',
        image: '/images/cpp.jpg',
      },
      {
        title: 'Java',
        image: '/images/java.jpg',
      },
      {
        title: 'Javascript',
        image: '/images/javascript.jpg',
      },
      {
        title: 'Php',
        image: '/images/php.jpg',
      },
      {
        title: 'Android Development',
        image: '/images/anndroid.jpg',
      }
    ],
    'Non-Technical': [
      {
        title: 'GK Quiz',
        image: '/images/gk.jpg',
      },
      {
        title: 'Art Exhibition',
        image: '/images/art.jpg',
      },
      {
        title: 'Treasure Hunt',
        image: '/images/th.jpg',
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-[#C5C6C7] p-4 sm:p-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-6 shadow-2xl overflow-hidden ring-4 ring-[#1F2833]/50">
            {!imageErrors['profile'] ? (
              <img 
                src={process.env.PUBLIC_URL + profilePhotoUrl}
                alt="Vinita Patil"
                className="w-full h-full object-contain"
                onError={() => {
                  console.log("Profile image failed to load:", profilePhotoUrl);
                  setImageErrors(prev => ({ ...prev, profile: true }));
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0B0C10] to-[#1F2833] flex items-center justify-center">
                <User size={48} className="text-[#C5C6C7] sm:w-16 sm:h-16" />
              </div>
            )}
          </div>
          <h2 className="text-4xl font-bold mb-3 sm:mb-4 text-center text-[#66FCF1]">Vinita Patil</h2>
          <div className="text-xl font-semibold h-8 text-center">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-[#C5C6C7] p-4 sm:p-8">
          <Globe size={48} className="text-[#1F2833] mb-4 sm:mb-6 sm:w-16 sm:h-16" />
          <h2 className="text-4xl font-bold mb-3 sm:mb-4 text-center text-[#66FCF1]">Web Development</h2>
          <p className="text-xl font-semibold text-center text-[#C5C6C7]/80 leading-relaxed text-sm sm:text-base">
          Crafting responsive, user-friendly websites that deliver dynamic, real-world solutions with modern technology.
          </p>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-[#C5C6C7] p-4 sm:p-8">
          <Smartphone size={48} className="text-[#1F2833] mb-4 sm:mb-6 sm:w-16 sm:h-16" />
          <h2 className="text-4xl font-bold mb-3 sm:mb-4 text-center text-[#66FCF1]">Android Development</h2>
          <p className="text-xl font-semibold text-center text-[#C5C6C7]/80 leading-relaxed text-sm sm:text-base">
          Building sleek, intuitive Android apps that create engaging mobile experiences with innovative design.
          </p>
        </div>
      )
    }
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'My Services', id: 'services' },
    { name: 'My Work', id: 'work' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Volunteer Work', id: 'volunteer' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const navButtons = document.querySelectorAll(`button[data-scroll-to="${item.id}"]`);
          navButtons.forEach((button) => {
            button.addEventListener('click', () => scrollTo(item.id));
          });
        }
      });
    };

    if (document.readyState === 'complete') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      return () => document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }
  }, []);

  const projectCategories = [
    'Websites',
    'Blockchain',
    'Android Applications',
    'Machine Learning',
    'Ongoing Projects'
  ];

  const projects = {
    Websites: [
      {
        title: 'Criminal Management System',
        description: 'This Project aims to create a centralized database for tracking and managing criminal records.',
        image: criminal,
      },
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects and skills, built with React and Tailwind CSS.',
        image: pf,
      },
      {
        title: 'Quiz Web Application',
        description: 'The purpose of the project is to build an application to reduce the manual work for managing the MCQ quiz.',
        image: quiz,
      },
      {
        title: 'Handmade Craft Marketplace',
        description: 'Discover unique, handcrafted treasures from global artisans at our Handmade Craft Marketplace, celebrating creativity and individuality.',
        image: craft,
      },
      {
        title: 'NutriFit Tracker',
        description: 'NutriFit Tracker is an all-in-one fitness and nutrition website designed to help you achieve your health goals with ease and precision.',
        image: nf,
      }
    ],
    Blockchain: [
      {
        title: 'Infogate',
        description: 'InfoGate is an Android application designed to provide users with instant access to computer-related information within college premises.',
        image: infogate,
      },
      {
        title: 'Technical Paper',
        description: 'Fortifying IOT: Harnessing Blockchain for Enhanced Security.',
        image: biot,
      }
    ],
    'Android Applications': [
      {
        title: 'Infogate',
        description: 'InfoGate is an Android application designed to provide users with instant access to computer-related information within college premises.',
        image: infogate,
      },
      {
        title: 'SoulSattva',
        description: 'The SoulSattva app aims to provide a comprehensive platform for individuals interested in Ayurveda and holistic health.',
        image: ss,
      },
      {
        title: 'Sangini',
        description: 'An empowering Android app delivering real-time safety tools and alerts, designed to protect women with user-friendly, reliable features.',
        image: sangini,
      },
      {
        title: 'Digital Detox',
        description: 'A smart Android app designed to promote mindful tech use, helping users reduce screen time and enhance well-being with intuitive features.',
        image: dd,
      }
    ],
    'Machine Learning': [
      {
        title: 'Mood Melodies',
        description: 'Mood Melodies presents mood based music playlists by analyzing your mood through camera-captured facial expressions.',
        image: mm,
      },
      {
        title: 'NutriFit Tracker',
        description: 'NutriFit Tracker is an all-in-one fitness and nutrition website designed to help you achieve your health goals with ease and precision.',
        image: nf,
      }
    ],
    'Ongoing Projects': [
      {
        title: 'AI Chatbot',
        description: 'An ongoing project to build an AI-powered chatbot using NLP and React for the frontend.',
        image: nf,
      },
      {
        title: 'Handmade Craft Marketplace',
        description: 'Discover unique, handcrafted treasures from global artisans at our Handmade Craft Marketplace, celebrating creativity and individuality.',
        image: craft,
      }
    ]
  };

  const projectRefs = useRef([]);
  const achievementRefs = useRef([]);
  const contactRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInSlide');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`;
            entry.target.classList.add('animate-fadeInSlideUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    achievementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      achievementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasVisitedContact) {
            entry.target.classList.add('animate-fadeInSlideUp');
            setHasVisitedContact(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    contactRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      contactRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [hasVisitedContact]);

  const toggleOverlay = (index) => {
    setVisibleOverlay(visibleOverlay === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] relative overflow-hidden">
      <style>
        {`
          .animate-fadeInSlide {
            animation: fadeInSlide 0.7s ease-out forwards;
          }
          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-tap {
            animation: tapEffect 0.3s ease-in-out;
          }
          @keyframes tapEffect {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
          }
          .animate-fadeInSlideUp {
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          @keyframes fadeInSlideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 640px) {
            #volunteer .volunteer-image {
              width: 60%;
              height: 135px;
              object-fit: cover;
              position: relative;
              top: -15px;
              left: 20px;
            }
            #volunteer .volunteer-text h3 {
              font-size: 1.25rem;
              margin-top:0.6rem;
            }
            #volunteer .volunteer-text p {
              font-size: 0.875rem;
              text-align: justify;
            }
            #volunteer .volunteer-text div p {
              font-size: 0.875rem;
              text-align: justify;
            }
            #about .text-[#C5C6C7] h3 {
              font-size: 1.25rem;
            }
            #about .text-[#C5C6C7] p {
              font-size: 0.875rem;
              text-align: justify;
            }
            #volunteer .bg-gradient-to-br {
              height: auto;
              min-height: 200px;
            }
            .read-more-text {
              display: ${isReadMore ? 'block' : 'none'};
            }
            
          @media (min-width: 641px) and (max-width: 1024px) {
            #volunteer .volunteer-image {
              width: 200px;
              height: 200px;
            }
            #volunteer .bg-gradient-to-br {
              height: auto;
              min-height: 350px;
            }
          }
          @media (min-width: 641px) {
            #volunteer .volunteer-image {
              width: 300px;
              height: 300px;
            }
          }
        `}
      </style>
      <div 
        className="fixed w-8 h-8 rounded-full bg-[#66FCF1]/20 pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{ 
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`,
          boxShadow: '0 0 20px rgba(102,252,241,0.5)'
        }}
      />
      <nav className="fixed top-0 w-full bg-[#0B0C10]/80 backdrop-blur-md z-40 border-b border-[#1F2833]/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#66FCF1]">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                data-scroll-to={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-[#C5C6C7]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B0C10]/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                data-scroll-to={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 text-[#C5C6C7] hover:bg-[#1F2833]/30 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
      <section 
  id="home" 
  className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 relative overflow-hidden"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: '#0B0C10',
  }}
>
  <div className="absolute inset-0 bg-[#0B0C10]/50 z-0"></div>
  <div className="container mx-auto relative z-10 w-full">
    <div className="relative max-w-4xl mx-auto w-full">
      
      {/* Desktop 3D Carousel - Hidden on Mobile */}
      <div className="hidden sm:block">
        <div className="relative h-80 sm:h-96" style={{ perspective: '1000px' }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide ? 'opacity-100 z-30' : 'opacity-0 z-10'
              } transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(69,162,158,0.6)] transition-all duration-300`}
              style={{
                transform: index === currentSlide 
                  ? 'translateZ(100px) scale(1)' 
                  : index === (currentSlide - 1 + slides.length) % slides.length
                  ? 'translateX(-100%) translateZ(-100px) scale(0.8)'
                  : 'translateX(100%) translateZ(-100px) scale(0.8)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="bg-gradient-to-br from-[#0B0C10] to-[#1F2833] backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#C5C6C7]/20 shadow-2xl h-full">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#0B0C10]/50 hover:bg-[#1F2833]/70 active:bg-[#1F2833] rounded-full p-2 sm:p-3 transition-all duration-300 z-40 touch-manipulation transform hover:scale-105 hover:shadow-[0_0_10px_rgba(69,162,158,0.7)]"
        >
          <ChevronLeft size={20} className="text-[#C5C6C7] sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#0B0C10]/50 hover:bg-[#1F2833]/70 active:bg-[#1F2833] rounded-full p-2 sm:p-3 transition-all duration-300 z-40 touch-manipulation transform hover:scale-105 hover:shadow-[0_0_10px_rgba(69,162,158,0.7)]"
        >
          <ChevronRight size={20} className="text-[#C5C6C7] sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Mobile Horizontal Swipe Carousel - Visible only on Mobile */}
      <div className="block sm:hidden w-full">
        {/* Main Carousel Container */}
        <div className="relative h-80 w-full">
          {/* Slides Container */}
          <div className="relative h-full overflow-hidden rounded-2xl">
            <div 
              className="flex h-full transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                touchAction: 'pan-y pinch-zoom'
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="w-full h-full flex-shrink-0 px-2"
                >
                  <div className="bg-gradient-to-br from-[#0B0C10]/95 to-[#1F2833]/95 backdrop-blur-lg rounded-2xl border border-[#C5C6C7]/20 shadow-xl h-full overflow-hidden">
                    {/* Card Header Indicator */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#66FCF1] to-[#45A29E]"></div>
                    
                    {/* Card Content */}
                    <div className="p-4 h-full flex flex-col justify-center mobile-card-content">
                      <div className="text-center space-y-3">
                        {slide.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#0B0C10]/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-30 active:scale-95 transition-all duration-200"
            style={{ touchAction: 'manipulation' }}
          >
            <ChevronLeft size={18} className="text-[#C5C6C7]" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0B0C10]/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-30 active:scale-95 transition-all duration-200"
            style={{ touchAction: 'manipulation' }}
          >
            <ChevronRight size={18} className="text-[#C5C6C7]" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#66FCF1] w-6' 
                  : 'bg-[#C5C6C7]/30 active:bg-[#C5C6C7]/50'
              }`}
              style={{ touchAction: 'manipulation' }}
            />
          ))}
        </div>

      
        {/* Mobile CSS Styles */}
        <style jsx>{`
          @media (max-width: 640px) {
            .mobile-card-content h1,
            .mobile-card-content h2 {
              font-size: 1.75rem !important;
              line-height: 2rem !important;
              margin-bottom: 0.75rem !important;
            }
            
            .mobile-card-content h3 {
              font-size: 1.5rem !important;
              line-height: 1.75rem !important;
              margin-bottom: 0.5rem !important;
            }
            
            .mobile-card-content p {
              font-size: 0.875rem !important;
              line-height: 1.25rem !important;
              margin-bottom: 0.5rem !important;
            }
            
            .mobile-card-content .text-lg {
              font-size: 0.875rem !important;
              line-height: 1.25rem !important;
            }
            
            .mobile-card-content .text-xl {
              font-size: 1rem !important;
              line-height: 1.5rem !important;
            }
            
            .mobile-card-content .text-2xl {
              font-size: 1.25rem !important;
              line-height: 1.75rem !important;
            }
            
            .mobile-card-content .text-3xl {
              font-size: 1.5rem !important;
              line-height: 2rem !important;
            }
            
            .mobile-card-content .text-4xl {
              font-size: 1.75rem !important;
              line-height: 2rem !important;
            }
            
            .mobile-card-content .text-5xl {
              font-size: 2rem !important;
              line-height: 2.25rem !important;
            }
            
            .mobile-card-content * {
              max-width: 100% !important;
              word-wrap: break-word !important;
            }
          }
        `}</style>
      </div>

      {/* Desktop Pagination Dots */}
      <div className="hidden sm:flex justify-center mt-6 sm:mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-[#66FCF1] shadow-lg' 
                : 'bg-[#C5C6C7]/30 hover:bg-[#C5C6C7]/50 active:bg-[#C5C6C7]/60'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>
      <section 
        id="about" 
        className="py-16 sm:py-20 px-4 relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: '#0B0C10',
        }}
      >
        <div className="absolute inset-0 bg-[#0B0C10]/50 z-0"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-8 sm:mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B0C10] to-[#1F2833] backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#C5C6C7]/20 shadow-[0_10px_20px_rgba(69,162,158,0.5)] transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(69,162,158,0.6)] transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-[#C5C6C7] order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3 sm:mb-4 text-[#C5C6C7]">Hi, I'm Vinita Patil,</h3>
                <p className="text-[#C5C6C7]/80 mb-3 sm:mb-4 text-sm sm:text-base">
                A dedicated computer engineering student with a focus on AI and Machine Learning. I’m passionate about creating impactful solutions through web and Android development, blending creativity with cutting-edge technology.
                </p>
                <p className="text-[#C5C6C7]/80 text-sm sm:text-base">
                From building responsive websites to developing innovative mobile apps and exploring blockchain for enhanced security, I thrive on turning ideas into reality. Driven by curiosity, I’m always eager to tackle real-world challenges with code.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden ring-4 ring-[#1F2833]/50">
                  {!imageErrors['about'] ? (
                    <img 
                      src={process.env.PUBLIC_URL + aboutPhotoUrl}
                      alt="Vinita Patil - About"
                      className="w-full h-full object-contain"
                      onError={() => {
                        console.log("About image failed to load:", aboutPhotoUrl);
                        setImageErrors(prev => ({ ...prev, about: true }));
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0B0C10] to-[#1F2833] flex items-center justify-center">
                      <User size={80} className="text-[#C5C6C7] sm:w-32 sm:h-32" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-16 sm:py-20 px-4 bg-[#000814]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-8 sm:mb-12">My Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Modern, responsive websites and web applications' },
              { icon: Smartphone, title: 'Mobile Development', desc: 'Native Android apps with great UX' },
              { icon: Code, title: 'Full Stack Solutions', desc: 'End-to-end development services' }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2a6f97] to-[#212529] backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#0B0C10]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_#47C7D6] transition-all duration-300">
                <service.icon size={40} className="text-[#C5C6C7] mb-4 sm:w-12 sm:h-12" />
                <h3 className="text-xl font-semibold text-[#C5C6C7] mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-[#F5F5DC] text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="work" className="py-16 sm:py-20 px-4 bg-[#000814]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-8 sm:mb-12">My Work</h2>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-[#F5F5DC] text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              My work is centered around providing tailored solutions that drive meaningful results. With a focus on quality, innovation, and client satisfaction, I have successfully completed projects across various domains. Here’s a snapshot of what I do:
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative text-[#C5C6C7] text-sm sm:text-base font-semibold px-2 py-1 transition-all duration-300 transform hover:scale-105 hover:text-[#66FCF1] ${
                    selectedCategory === category ? 'text-[#66FCF1]' : ''
                  }`}
                >
                  {category}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#66FCF1] transform origin-left transition-transform duration-300 ${
                      selectedCategory === category ? 'scale-x-100' : 'scale-x-0'
                    } hover:scale-x-100`}
                  />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects[selectedCategory].map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="opacity-0 transition-all duration-700"
                >
                  <div 
                    className={`relative w-full rounded-lg group cursor-pointer animate-tap transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(69,162,158,0.6)] ${
                      selectedCategory === 'Android Applications' ? 'h-64 sm:h-72 max-w-md' : 'h-48 sm:h-56 max-w-sm'
                    }`}
                    onClick={() => toggleOverlay(index)}
                  >
                    {!imageErrors[`project-${index}`] ? (
                      <>
                        <img
                          src={process.env.PUBLIC_URL + project.image}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-lg transition-all duration-300 group-hover:brightness-50"
                          onError={() => {
                            console.log(`Project image failed to load: ${project.image}`);
                            setImageErrors(prev => ({ ...prev, [`project-${index}`]: true }));
                          }}
                        />
                        <div 
                          className={`absolute inset-0 bg-[#1F2833]/80 rounded-lg flex flex-col items-center justify-center px-4 py-2 opacity-0 transition-opacity duration-300 ${
                            visibleOverlay === index ? 'opacity-100 md:opacity-0' : 'group-hover:opacity-100'
                          }`}
                        >
                          <h3 className="text-xl font-semibold text-[#66FCF1] mb-1 text-center">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-[#C5C6C7] text-center line-clamp-3">{project.description}</p>
                        </div>
                      </>
                    ) : (
                      <div className="h-full w-full bg-[#1F2833]/30 rounded-lg flex items-center justify-center">
                        <Briefcase size={48} className="text-[#C5C6C7] sm:w-16 sm:h-16" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="achievements" className="py-20" style={{ backgroundColor: '#1A1A1D' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-6">Achievements</h2>
          <p className="text-[#F5F5DC] text-lg text-center mb-12">Here are some of my notable achievements:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'State Level Technical Paper Presentation Competition',
                description: 'I won the 1st prize in the State Level Technical Paper Presentation Competition. My winning paper, "Fortifying IOT: Harnessing Blockchain for Enhanced Security," showcased my exceptional technical expertise and research abilities.',
                image: achievementPaper,
              },
              {
                title: 'Internship',
                description: 'During this period, I had the opportunity to immerse myself in the dynamic world of software development, gaining hands-on experience in various aspects of the software lifecycle. Under the mentorship of seasoned professionals, I honed my skills in Python + Django, and gained insights into industry best practices. This internship and training not only expanded my technical expertise but also instilled in me a deep appreciation for innovation and collaboration within the software industry.',
                image: achievementInternship,
              }
            ].map((achievement, index) => (
              <div 
                key={index} 
                ref={(el) => (achievementRefs.current[index] = el)}
                className="rounded-lg p-4 border border-[#0B0C10]/20 flex flex-col space-y-3 transform hover:scale-105 transition-all duration-300 opacity-0"
                style={ 
                  { 
                    background: 'linear-gradient(to bottom right, #2E073F 70%, #7A1CAC 30%)',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
                  }
                }
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 20px #47C7D6'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)'}
              >
                <div className="flex items-center space-x-3">
                  <Award size={24} className="text-[#F5F5DC]" />
                  <h3 className="text-xl font-semibold text-[#C5C6C7]">{achievement.title}</h3>
                </div>
                <div className="w-48 h-48 rounded-lg overflow-hidden mx-auto">
                  {!imageErrors[`achievement-${index}`] ? (
                    <img 
                      src={process.env.PUBLIC_URL + achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain"
                      onError={() => {
                        console.log(`Achievement image failed to load: ${achievement.image}`);
                        setImageErrors(prev => ({ ...prev, [`achievement-${index}`]: true }));
                      }}
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-[#2E073F] to-[#7A1CAC] flex items-center justify-center">
                      <Award size={48} className="text-[#F5F5DC]" />
                    </div>
                  )}
                </div>
                <p className="text-[#F5F5DC] text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="volunteer" className="py-20 bg-[#000814] overflow-hidden">
        <div className="container mx-auto px-0">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-12 animate-fadeInSlideUp">Volunteer Work</h2>
          <div className="relative w-screen -mx-4">
            <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-2xl shadow-lg p-8 overflow-visible">
              <div className="flex flex-col sm:flex-row items-center px-4 gap-4 sm:gap-6">
                <div className="relative volunteer-image w-80 h-80 sm:w-300 sm:h-300 -mt-4 sm:-ml-4 mr-4 sm:mr-6">
                  {!imageErrors['volunteer1'] ? (
                    <img 
                      src={process.env.PUBLIC_URL + volunteerPhoto1}
                      alt="Volunteer Activity 1"
                      className="w-full h-[150%] object-cover rounded-lg shadow-2xl"
                      style={{ 
                        position: 'absolute',
                        top: '-25%',
                        bottom: '-25%'
                      }}
                      onError={() => {
                        console.log("Volunteer image 1 failed to load:", volunteerPhoto1);
                        setImageErrors(prev => ({ ...prev, volunteer1: true }));
                      }}
                    />
                  ) : (
                    <div className="w-full h-[150%] bg-gradient-to-br from-[#2a6f97] to-[#212529] flex items-center justify-center rounded-lg shadow-2xl"
                         style={{ position: 'absolute', top: '-25%', bottom: '-25%' }}>
                      <Heart size={64} className="text-[#C5C6C7]" />
                    </div>
                  )}
                </div>
                <div className="volunteer-text text-[#F5F5DC] space-y-3 w-full sm:w-1/2 text-left animate-fadeInSlideUp pl-2 sm:pl-4">
                  <div className="flex items-center justify-start space-x-3 mb-3">
                    <Heart size={32} className="text-[#66FCF1]" />
                    <h3 className="text-2xl font-bold text-[#66FCF1]">Student Coordinator for State-Level Event</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    As a Student Coordinator, I organized a prestigious state-level event issued by the Maharashtra State Board of Technical Education at our college. This role involved:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Coordinating event logistics, including scheduling, venue preparation, and resource allocation.",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start justify-start space-x-2 animate-fadeInSlideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-2 h-2 bg-[#66FCF1] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="read-more-text">
                    {isReadMore && (
                      <div className="space-y-2 mt-2">
                        {[
                          "Leading a team of volunteers to ensure smooth execution of activities and sessions.",
                          "Managing communications with participants, speakers, and college officials.",
                          "Contributing to the successful promotion and marketing of the event, enhancing its reach and impact."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start justify-start space-x-2 animate-fadeInSlideUp" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                            <div className="w-2 h-2 bg-[#66FCF1] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
                        <p className="text-sm leading-relaxed pt-2 border-t border-[#66FCF1]/20">
                          Students from all over Maharashtra came to present their technical papers, showcasing their innovative ideas and projects. This experience honed my leadership, organizational, and communication skills, and provided me with invaluable insights into event management and teamwork.
                        </p>
                      </div>
                    )}
                  </div>
                  {!isReadMore ? (
                    <button
                      onClick={() => setIsReadMore(true)}
                      className="text-[#66FCF1] text-sm font-semibold hover:underline mt-2"
                    >
                      Read More
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsReadMore(false)}
                      className="text-[#66FCF1] text-sm font-semibold hover:underline mt-2"
                    >
                      Read Less
                    </button>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="education" className="py-20 bg-[#000814]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-12">Education & Certifications</h2>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-[#C5C6C7] text-center mb-8">Educational Journey</h3>
            <div className="relative">
              {/* Timeline Line - Left on mobile, center on desktop */}
              <div className="timeline-line absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#66FCF1] to-[#45A29E] rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Bachelor's Degree */}
                <div className="timeline-item relative flex items-center group">
                  {/* Mobile: Timeline dot on left, content on right */}
                  <div className="timeline-dot absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#66FCF1] rounded-full border-4 border-[#000814] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(102,252,241,0.5)]"></div>

                  {/* Mobile Layout */}
                  <div className="md:hidden ml-16 w-full">
                    <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#66FCF1]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(102,252,241,0.3)] transition-all duration-500 group-hover:border-[#66FCF1]/40">
                      <h4 className="text-xl font-bold text-[#66FCF1] mb-2">2024 - 2027</h4>
                      <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Bachelor's Degree in AI & ML</h5>
                      <p className="text-sm text-[#F5F5DC] mb-2 font-medium">PES Modern College of Engineering, Pune</p>
                      <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                        Gaining in-depth knowledge of intelligent systems, data science, and machine learning algorithms.
                        The curriculum integrates core computer science principles with AI-focused modules and hands-on projects.
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex md:items-center md:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#66FCF1]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(102,252,241,0.3)] transition-all duration-500 group-hover:border-[#66FCF1]/40">
                        <h4 className="text-xl font-bold text-[#66FCF1] mb-2">2024 - 2027</h4>
                        <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Bachelor's Degree in AI & ML</h5>
                        <p className="text-sm text-[#F5F5DC] mb-2 font-medium">PES Modern College of Engineering, Pune</p>
                        <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                          Gaining in-depth knowledge of intelligent systems, data science, and machine learning algorithms.
                          The curriculum integrates core computer science principles with AI-focused modules and hands-on projects.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>

                {/* Diploma */}
                <div className="timeline-item relative flex items-center group">
                  {/* Mobile: Timeline dot on left, content on right */}
                  <div className="timeline-dot absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#45A29E] rounded-full border-4 border-[#000814] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(69,162,158,0.5)]"></div>

                  {/* Mobile Layout */}
                  <div className="md:hidden ml-16 w-full">
                    <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#45A29E]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(69,162,158,0.3)] transition-all duration-500 group-hover:border-[#45A29E]/40">
                      <h4 className="text-xl font-bold text-[#45A29E] mb-2">2021 - 2024</h4>
                      <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Diploma in Computer Engineering</h5>
                      <p className="text-sm text-[#F5F5DC] mb-2 font-medium">Government Polytechnic Jalgaon</p>
                      <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                        Gained comprehensive understanding of theoretical and practical aspects of computing.
                        Strong foundation in core computer science principles with hands-on experience through projects and labs.
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex md:items-center md:w-full">
                    <div className="flex-1 pr-8"></div>
                    <div className="flex-1 pl-8">
                      <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#45A29E]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(69,162,158,0.3)] transition-all duration-500 group-hover:border-[#45A29E]/40">
                        <h4 className="text-xl font-bold text-[#45A29E] mb-2">2021 - 2024</h4>
                        <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Diploma in Computer Engineering</h5>
                        <p className="text-sm text-[#F5F5DC] mb-2 font-medium">Government Polytechnic Jalgaon</p>
                        <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                          Gained comprehensive understanding of theoretical and practical aspects of computing.
                          Strong foundation in core computer science principles with hands-on experience through projects and labs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* School */}
                <div className="timeline-item relative flex items-center group">
                  {/* Mobile: Timeline dot on left, content on right */}
                  <div className="timeline-dot absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#C5C6C7] rounded-full border-4 border-[#000814] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(197,198,199,0.5)]"></div>

                  {/* Mobile Layout */}
                  <div className="md:hidden ml-16 w-full">
                    <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#C5C6C7]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(197,198,199,0.3)] transition-all duration-500 group-hover:border-[#C5C6C7]/40">
                      <h4 className="text-xl font-bold text-[#C5C6C7] mb-2">2011 - 2021</h4>
                      <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Secondary Education</h5>
                      <p className="text-sm text-[#F5F5DC] mb-2 font-medium">Godavari English Medium CBSE School</p>
                      <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                        Developed strong academic foundation, participated in various extracurricular activities,
                        and honed skills in leadership and teamwork.
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex md:items-center md:w-full">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-gradient-to-br from-[#2a6f97] to-[#212529] rounded-xl p-6 border border-[#C5C6C7]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(197,198,199,0.3)] transition-all duration-500 group-hover:border-[#C5C6C7]/40">
                        <h4 className="text-xl font-bold text-[#C5C6C7] mb-2">2011 - 2021</h4>
                        <h5 className="text-lg font-semibold text-[#C5C6C7] mb-2">Secondary Education</h5>
                        <p className="text-sm text-[#F5F5DC] mb-2 font-medium">Godavari English Medium CBSE School</p>
                        <p className="text-xs text-[#F5F5DC]/80 leading-relaxed">
                          Developed strong academic foundation, participated in various extracurricular activities,
                          and honed skills in leadership and teamwork.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Certificates Section */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-[#C5C6C7] text-center mb-8">Certificates & Achievements</h3>

            {/* Certificate Categories */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-[#1F2833]/30 rounded-full p-2 space-x-2">
                {['Technical', 'Non-Technical'].map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCertCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${selectedCertCategory === category
                        ? 'bg-[#66FCF1] text-[#0B0C10] shadow-lg'
                        : 'text-[#C5C6C7] hover:bg-[#1F2833]/50 hover:text-[#66FCF1]'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Certificate Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certificates[selectedCertCategory].map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#222222]/70 rounded-xl p-1 border border-[#66FCF1]/20 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(102,252,241,0.2)] transition-all duration-500 group cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex flex-col items-center">
                    {!imageErrors[`cert-${index}`] ? (
                      <img
                        src={process.env.PUBLIC_URL + cert.image}
                        alt={cert.title}
                        className="w-48 h-48 object-contain rounded-lg mb-2 shadow-md"
                        onError={() => {
                          console.log(`Certificate image failed to load: ${cert.image}`);
                          setImageErrors(prev => ({ ...prev, [`cert-${index}`]: true }));
                        }}
                      />
                    ) : (
                      <div className="w-48 h-48 bg-[#222222]/70 flex items-center justify-center rounded-lg mb-2 shadow-md">
                        <Award size={64} className="text-[#66FCF1]" />
                      </div>
                    )}
                    <p className="text-center text-xl font-bold text-[#C5C6C7] group-hover:text-[#66FCF1] transition-colors duration-300">
                      {cert.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-[#000814]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-12">Contact Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div
                ref={(el) => (contactRefs.current[0] = el)}
                className="bg-[#222222]/70 backdrop-blur-md rounded-2xl p-8 border border-[#0B0C10]/20 transform hover:scale-105 hover:shadow-[0_10px_30px_#47C7D6] transition-all duration-300 opacity-0"
              >
                <h3 className="text-xl font-semibold text-[#C5C6C7] mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail size={24} className="text-[#C5C6C7]" />
                    <span className="text-[#F5F5DC]">patilvinita787@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone size={24} className="text-[#C5C6C7]" />
                    <span className="text-[#F5F5DC]">9075259313</span>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <Github size={24} className="text-[#C5C6C7] hover:text-[#F5F5DC] cursor-pointer transition-colors" />
                    <Linkedin size={24} className="text-[#C5C6C7] hover:text-[#F5F5DC] cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (contactRefs.current[1] = el)}
                className="bg-[#222222]/70 backdrop-blur-md rounded-2xl p-8 border border-[#0B0C10]/20 transform hover:scale-105 hover:shadow-[0_10px_30px_#47C7D6] transition-all duration-300 opacity-0"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#222222]/50 border border-[#0B0C10]/20 rounded-lg px-4 py-3 text-[#C5C6C7] placeholder-[#C5C6C7]/60 focus:outline-none focus:border-[#F5F5DC]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#222222]/50 border border-[#0B0C10]/20 rounded-lg px-4 py-3 text-[#C5C6C7] placeholder-[#C5C6C7]/60 focus:outline-none focus:border-[#F5F5DC]"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-[#222222]/50 border border-[#0B0C10]/20 rounded-lg px-4 py-3 text-[#C5C6C7] placeholder-[#C5C6C7]/60 focus:outline-none focus:border-[#F5F5DC]"
                  ></textarea>
                  <button
                    onClick={() => alert('Message sent!')}
                    className="w-full bg-[#222222]/70 hover:bg-[#5459AC] text-[#C5C6C7] py-3 rounded-lg transition-colors font-semibold border border-[#0B0C10]/20 transform hover:scale-105 hover:shadow-[0_0_15px_#47C7D6]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#000814] py-8 text-center text-[#F5F5DC]">
        <p>© 2025 Vinita Patil. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;