import React from 'react';

interface ReadBookProps {
  nextChapter: JSX.Element;
  title: string;
  content: string;
}

const ReadBook: React.FC<ReadBookProps> = ({ title, content, nextChapter }) => {
  return (
    <section className='max-w-2xl min-w-[42rem] mx-auto flex flex-1 flex-col'>
      <header className='text-center mt-10 mb-5'>
        <p>{title}</p>
      </header>
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <p>{content}</p>
        </div>
        {nextChapter && nextChapter}
      </div>
    </section>
  );
};

export default ReadBook;
