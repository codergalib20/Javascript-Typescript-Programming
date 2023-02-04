import { Map } from './UI/Map';
import sanitizeHtml from 'sanitize-html';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.innerHTML = sanitizeHtml(address);
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
  lat: parseFloat(queryParams.get('lat')),
  lng: +queryParams.get('lng')
};
const address = queryParams.get('address');
new LoadedPlace(coords, address);