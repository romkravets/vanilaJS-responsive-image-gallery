import './index.scss';
import { Gallery } from './scripts/Gallery';

const galleryData = [
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: ''

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jel',
      class: 'item__large'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: 'item__medium'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: 'item__medium'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: 'item__medium'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: 'item__medium'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: 'item__medium'

   },
   {
      image: 'https://i.postimg.cc/9XgbWQfS/silvana-carlos-1620879-unsplash.jpg',
      title: 'jelly-o brownie sweet',
      class: ''

   },
]

new Gallery(document.querySelector('#sectionGallery'), galleryData);

