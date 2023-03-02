import { FunctionComponent } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  children?: any
  name: string;
}

const ExploreContainer: FunctionComponent<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
