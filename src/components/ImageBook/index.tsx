import React from 'react';

interface ImageBookProps {
  alt: string;
  className?: string;
  src: string;
}
const ImageBook: React.FC<ImageBookProps> = ({ alt, className, src }) => {
  return (
    <figure className={className}>
      <img
        alt={alt}
        className='rounded-lg bg-slate-200'
        width={400}
        height={600}
        style={{ aspectRatio: '4/6' }}
        src={src}
      ></img>
    </figure>
  );
};

export default ImageBook;
