import '../styles/Gallery.scss';

export class Gallery {
   constructor(rootElement, galleryData) {
      this.rootElement = rootElement;
      this.galleryData = galleryData;
      this.sectionGrid;
      this.grid;
      this.render();
   }

   render() {
      this.sectionGrid = document.createElement('section');
      this.sectionGrid.classList.add('section');
      this.grid = document.createElement('div');
      this.grid.classList.add('grid');
      this.rootElement.appendChild(this.sectionGrid);
      this.sectionGrid.appendChild(this.grid);

      this.galleryData.forEach(element => {
         const data = `
         <a class="item ${element.class}" href="#">
            <div class="item__details">
            ${element.title}
            </div>
         </a>
         `
         this.grid.innerHTML += data;
      });
   }
}