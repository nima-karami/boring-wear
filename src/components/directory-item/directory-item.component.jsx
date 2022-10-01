import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <Body>
        <h2>{title}</h2>
      </Body>
      <BackgroundImage imageUrl={imageUrl} />
      
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
