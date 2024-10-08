// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

/**
 * Specific data for rectangle.
 */
export type RectangleData = { 
/**
 * Radius of each corner of the rectangle if a single radius is set for all corners
 */
cornerRadius: number, 
/**
 * Array of length 4 of the radius of each corner of the rectangle, starting in the top left
 * and proceeding clockwise
 */
rectangleCornerRadii: [number, number, number, number], 
/**
 * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the
 * default and means that the corner is perfectly circular. A value of 0.6 means the corner
 * matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
 */
cornerSmoothing: number, };
