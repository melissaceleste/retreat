import './tile.css';

interface Props {
  children: React.ReactNode;
  backgroundColor?:string
  color?:string
}

export const Tile = ({children, backgroundColor ='white', color='white'}: Props) => {
  return (
    <div className="flex-horizontal" style={{ backgroundColor , color}}>
      {children}
    </div>
  );
}
