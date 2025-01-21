// Import the types we need from @types/leaflet
import type { LatLngExpression as LatLngExpressionType, 
  MapOptions as MapOptionsType, 
  TileLayerOptions as TileLayerOptionsType } from '@types/leaflet';

// Export them for use in your application
export type LatLngExpression = LatLngExpressionType;
export type MapOptions = MapOptionsType;
export type TileLayerOptions = TileLayerOptionsType;

// Also keep the module declaration
declare module 'leaflet' {
export * from '@types/leaflet';
export { default } from '@types/leaflet';
}