import React from 'react';

interface AttributeBookDetailProps {
  title: string;
  content: string | React.ReactNode;
}
const AttributeBookDetail: React.FC<AttributeBookDetailProps> = ({ title, content }) => {
  return (
    <div>
      <p className='text-3xl text-medium py-3 border-b border-slate-300'>{title}</p>
      {typeof content === 'string' ? <p className='text-xl py-3'>{content}</p> : content}
    </div>
  );
};

export default AttributeBookDetail;
