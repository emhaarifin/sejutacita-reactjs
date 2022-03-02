import React from 'react';

interface ImageBookProps {
  alt: string;
  className?: string;
  src: string;
}
const ImageBook: React.FC<ImageBookProps> = ({ alt, className, src }) => {
  return (
    <figure className={className}>
      <img alt={alt} className='rounded-lg h-full bg-slate-200' style={{ aspectRatio: '4/6' }} src={src}></img>
    </figure>
  );
};

export default ImageBook;
