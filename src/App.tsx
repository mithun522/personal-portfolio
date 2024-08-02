import React, { useRef } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      // Get the height of the fixed header
      const headerHeight = 100; // Adjust this value based on your header's height
  
      // Scroll to the section with an offset
      window.scrollTo({
        top: sectionRef.current.offsetTop - headerHeight,
        behavior: "smooth"
      });
    }
  };
  

  return (
    <Router>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutMeRef,
          technologiesRef,
          contactRef,
          projectsRef,
          educationRef,
          milestonesRef
        }}
      />
      <Routes>
        <Route
          path="/"
          element={<Portfolio refs={{ homeRef, aboutMeRef, technologiesRef, contactRef, projectsRef, educationRef, milestonesRef }} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
