import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';
const CustomLink: React.FC<LinkProps> = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let classNameFinal = `px-5 py-2 bg-slate-50 border rounded-full ml-0 m-2 ${
    match ? 'border-indigo-500 ' : 'border-slate-300 '
  }`;

  if (className) {
    classNameFinal += ` ${className}`;
  }

  return (
    <Link className={classNameFinal} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
