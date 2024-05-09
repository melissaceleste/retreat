import './flex-horizontal.css';

interface Props {
  children: React.ReactNode;
  backgroundColor?:string
}

export const FlexHorizontal = ({children, backgroundColor ='white'}: Props) => {
  return (
    <div className="flex-horizontal" style={{ backgroundColor }}>
      {children}
    </div>
  );
}
