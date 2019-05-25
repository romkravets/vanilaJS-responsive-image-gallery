import './index.scss';
import { Gallery } from './scripts/Gallery';

const galleryData = [
   {
      title: 'Corrales, United States',
      class: ''

   },
   {
      title: 'Corrales, United States My Australian Cattle Dog, Quigley, sitting up on the couch on the back porch.',
      class: 'item__large'

   },
   {
      title: 'Amsterdam, Netherlands He is Miles',
      class: 'item__medium'

   },
   {
      title: '1221 Monterey Rd, South Pasadena, United States',
      class: 'item__medium'

   },
   {
      title: 'Lima Region, Peru La mirada hacia el futuro',
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

