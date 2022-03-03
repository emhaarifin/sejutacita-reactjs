import CustomLink from 'components/CustomLink';
import Defer from 'components/Defer';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from 'store';

const LayoutExplore: React.FC = () => {
  const categoriesState = useSelector((state: RootState) => state.categories);
  return (
    <Fragment>
      <header>
        <div>
          <p className='text-xl'>Explore category</p>
        </div>
        <div className='flex w-full overflow-scroll whitespace-nowrap'>
          {categoriesState.categories.length > 0 && (
            <Defer chunkSize={5}>
              {categoriesState.categories.map((category) => (
                <CustomLink className='whitespace-nowrap' key={category.id} to={`explore/${category.id}`}>
                  {category.name}
                </CustomLink>
              ))}
            </Defer>
          )}
        </div>
      </header>
      <div className='my-6'></div>
      <Outlet />
    </Fragment>
  );
};

export default LayoutExplore;
