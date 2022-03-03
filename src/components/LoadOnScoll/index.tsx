import React, { useCallback, useRef } from 'react';

const LoadOnScroll: React.FC<{
  onLoad?: () => void;
  loading?: boolean;
  hashMore?: boolean;
}> = ({ onLoad, loading, hashMore }) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const componentRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer && observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onLoad && onLoad();
          }
        },
        {
          root: null,
          rootMargin: '40px',
          threshold: 1.0,
        }
      );

      if (node) {
        observer.current.observe(node);
        if (!hashMore) observer?.current?.unobserve(node);
      }
    },
    [hashMore, loading, onLoad]
  );

  return <div ref={componentRef} className='h-72'></div>;
};

export default LoadOnScroll;
