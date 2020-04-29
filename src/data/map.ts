import MapView from 'esri/views/MapView';
import Map from 'esri/Map';
import TileLayer from 'esri/layers/TileLayer';
import Layer from 'esri/layers/Layer';
import Expand from 'esri/widgets/Expand';
import Legend from 'esri/widgets/Legend';

const tilelayer = new TileLayer({
    url: 'http://113.140.66.226:33225/arcgis/rest/services/TDTSxBaseMap_XX/MapServer'
});
const baseLayers: Array<Layer> = [tilelayer];

export const map = new Map({
    basemap: { baseLayers: baseLayers }
});

export const view = new MapView({
    container: 'viewDiv',
    map: map
});

// add a legend widget instance to the view
// and set the style to 'card'. This is a
// responsive style, which is good for mobile devices
export const legend = new Expand({
    content: new Legend({
        view,
        style: 'card'
    }),
    view,
    expanded: true
});
view.ui.add(legend, 'bottom-left');

/**
 * Assigns the container element to the View
 * @param container
 */
export const initialize = (container: HTMLDivElement) => {
    view.container = container;
    view.when()
        .then(_ => {
            console.log('Map and View are ready');
        })
        .catch(error => {
            console.warn('An error in creating the map occured:', error);
        });
};
