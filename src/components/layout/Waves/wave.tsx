import styles from './wave.module.css';

interface Props {
  color: string
}

export const Wave = ({ color }: Props) => {
  return (
    <svg 
      className={styles.wave}
      id="visual" 
      viewBox="0 0 900 170" 
      width="100%" 
      height="170" 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1"
    >
      <path
        d="M0 102L18.8 111.5C37.7 121 75.3 140 112.8 133.2C150.3 126.3 187.7 93.7 225.2 88.7C262.7 83.7 300.3 106.3 337.8 110.2C375.3 114 412.7 99 450.2 88.8C487.7 78.7 525.3 73.3 562.8 83.2C600.3 93 637.7 118 675.2 136.7C712.7 155.3 750.3 167.7 787.8 154.7C825.3 141.7 862.7 103.3 881.3 84.2L900 65L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
        fill={color} 
        stroke-linecap="round" 
        stroke-linejoin="miter"
      ></path>
    </svg>
  );
};
