interface Props{
  color?: string;
}

export const WaveUp1 = ({color='white'}: Props) => {
  return (
    <div style={{zIndex: 2}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="wave1"
    >
      <path
        fill={color}
        fillOpacity="1"
        d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    </div>
  );
}
