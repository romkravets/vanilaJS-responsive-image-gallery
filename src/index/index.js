import './index.scss';
import { Gallery } from './scripts/Gallery';

const galleryData = [
   {
      title: 'Corrales, United States',
      class: ''
   },
   {
      title: 'Corrales, United States',
      class: 'item__large'
   },
   {
      title: 'Amsterdam, Netherlands',
      class: 'item__medium'
   },
   {
      title: 'South Pasadena, United States',
      class: 'item__medium'
   },
   {
      title: 'Lima Region, Peru La mirada',
      class: 'item__medium'
   },
   {
      title: 'Corrales, United States',
      class: 'item__medium'
   },
   {
      title: 'Corrales, United States',
      class: 'item__medium'
   },
   {
      title: 'Corrales, United States',
      class: ''
   },
]

new Gallery(document.querySelector('#sectionGallery'), galleryData);

