import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const TiltEffect = ({
  children,
  options: {
    max = 15,
    perspective = 1000,
    scale = 1,
    speed = 300,
    easing = 'cubic-bezier(.03,.98,.52,.99)',
  } = {},
}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    const handleMouseMove = (event) => {
      const rect = tiltNode.getBoundingClientRect();
      const width = tiltNode.offsetWidth;
      const height = tiltNode.offsetHeight;
      const left = rect.left;
      const top = rect.top;

      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;

      const tiltX = (max / 2 - x * max).toFixed(2);
      const tiltY = (y * max - max / 2).toFixed(2);

      tiltNode.style.transform = `perspective(${perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${scale})`;
    };

    const handleMouseEnter = () => {
      tiltNode.style.transition = `transform ${speed}ms ${easing}`;
    };

    const handleMouseLeave = () => {
      tiltNode.style.transition = `transform ${speed}ms ${easing}`;
      tiltNode.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(${scale})`;
    };

    tiltNode.addEventListener('mousemove', handleMouseMove);
    tiltNode.addEventListener('mouseenter', handleMouseEnter);
    tiltNode.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tiltNode.removeEventListener('mousemove', handleMouseMove);
      tiltNode.removeEventListener('mouseenter', handleMouseEnter);
      tiltNode.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, perspective, scale, speed, easing]);

  return (
    <div ref={tiltRef} className="tilt-effect">
      {children}
    </div>
  );
};

TiltEffect.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    max: PropTypes.number,
    perspective: PropTypes.number,
    scale: PropTypes.number,
    speed: PropTypes.number,
    easing: PropTypes.string,
  }),
};

export default TiltEffect;