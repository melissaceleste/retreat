import './tile.css';

interface Props {
  children: React.ReactNode;
  backgroundColor?:string
  color?:string
  fontSize?:string
}

export const Tile = ({children, backgroundColor, color='white', fontSize }: Props) => {
  return (
    <div className="tile" style={{ backgroundColor , color, fontSize}}>
      {children}
    </div>
  );
}
