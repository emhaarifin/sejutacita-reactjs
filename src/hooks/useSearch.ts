import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import React from 'react';

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearchParams = searchParams.get('search');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newSearch = formData.get('search') as string;
    if (!newSearch) return navigate(location.pathname);
    setSearchParams({ search: newSearch });
  };

  return {
    setSearchParams,
    handleSubmit,
    searchParams,
    valueSearchParams,
  };
};

export default useSearch;
