import React, { useState, useEffect } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create 200 stars with random positions and sizes
    const createStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1, // Random size between 1-4px
          left: Math.random() * 100, // Random horizontal position
          top: Math.random() * 100, // Random vertical position
          animationDelay: Math.random() * 5, // Random animation delay
        });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, #000000 0%, #0a0a2e 100%)',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            borderRadius: '50%',
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: '0 0 10px white',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;