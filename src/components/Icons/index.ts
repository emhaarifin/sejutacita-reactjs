export interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
  className?: string;
}

export { default as Bookmark } from './Bookmark';

export { default as Brand } from './Brand';
