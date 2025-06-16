import './flex-horizontal.css';

interface Props {
  children: React.ReactNode;
  backgroundColor?:string
  marginTop?:string | number;
}

export const FlexHorizontal = ({children, backgroundColor, marginTop }: Props) => {
  return (
    <div className="flex-horizontal" style={{ backgroundColor, marginTop }}>
      {children}
    </div>
  );
}
