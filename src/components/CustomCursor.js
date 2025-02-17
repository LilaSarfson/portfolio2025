import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mueve el cursor de acuerdo al mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Detecta si el cursor está sobre un enlace o botón
  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Círculo exterior: Cursor principal */}
      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-white pointer-events-none transition-all duration-300 ease-out z-40 ${
          isHovering ? 'w-16 h-16 opacity-50 bg-white' : 'w-8 h-8 opacity-100'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovering ? 32 : 16)}px, ${position.y - (isHovering ? 32 : 16)}px, 0)`,
        }}
      >
        {/* Punto dentro del círculo */}
        <div
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)', // Centrado en el círculo exterior
          }}
        />
      </div>
    </>

  );
};

export default CustomCursor;
