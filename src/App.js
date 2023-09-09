import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import GrammarSection from './GrammarSection'; // Import the GrammarSection component

const Header = () => {
  const [logoWidth, setLogoWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = window.innerWidth * 0.9; // 90% of the window's width
      setLogoWidth(maxWidth);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Call handleResize once when the page loads
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Inside your Header component
const handleGrammarLinkClick = () => {
  const grammarSection = document.getElementById('grammar');
  if (grammarSection) {
    grammarSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// In your JSX, add an onClick handler to the "Grammar" link
<li><a href="#grammar" onClick={handleGrammarLinkClick}>Grammar</a></li>

  return (
    <div className="header">
      <img src="/srfghiwarbgsn.png" alt="Logo" className="logo" style={{ maxWidth: `${logoWidth}px` }} />
      <div className="menu-container">
        <nav>
          <ul className="menu">
           <li><a href="/levels">Levels</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="#grammar" onClick={handleGrammarLinkClick}>Grammar</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/books">Books</a></li>
          </ul>
        </nav>
      </div>
      <div className="image-container">
        <div className="side-image-container">
          <img src="/Design (1).png" alt="" className="side-image" />
        </div>
        <img src="/far7anaanahaha.png" alt="" className="big-image" />
      </div>
      <div className="side-image-container">
        <img src="/Design (2).png" alt="" className="side-image" />
      </div>

      {/* Include the GrammarSection component */}
      <div id="grammar"  className="grammar-container">
        <GrammarSection />
      </div>
    </div>
  );
};

export default Header;
