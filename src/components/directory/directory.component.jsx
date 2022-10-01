import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer, DirectoryHero, MainContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://github.com/nima-karami/boring-wear/blob/main/src/assets/cap.png?raw=true',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://github.com/nima-karami/boring-wear/blob/main/src/assets/jacket.png?raw=true',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://github.com/nima-karami/boring-wear/blob/main/src/assets/sneaker.png?raw=true',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://github.com/nima-karami/boring-wear/blob/main/src/assets/shirt.png?raw=true',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    
    <MainContainer>
      <DirectoryHero/>
      <DirectoryContainer>
        
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </MainContainer>
    
  );
};

export default Directory;
