// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { BlendMode } from "./BlendMode";
import type { Color } from "./color/Color";
import type { EffectType } from "./EffectType";
import type { VariableAlias } from "./VariableAlias";
import type { Vector } from "./Vector";

/**
 * A visual effect such as a shadow or blur
 */
export type Effect = { 
/**
 * Type of effect as a string enum
 */
effectType: EffectType, 
/**
 * Is the effect active?
 */
visible: boolean, 
/**
 * Radius of the blur effect (applies to shadows as well)
 */
radius: number, 
/**
 * The following properties are for shadows only:
 * The color of the shadow
 */
color: Color, 
/**
 * Blend mode of the shadow
 */
blendMode: BlendMode, 
/**
 * How far the shadow is projected in the x and y directions
 */
offset: Vector, 
/**
 * How far the shadow spreads
 */
spread: number, 
/**
 * default : 0
 * Whether to show the shadow behind translucent or transparent pixels (applies only to drop
 * shadows)
 */
showShadowBehindNode: boolean, 
/**
 * A mapping of field to the VariableAlias of the bound variable.
 */
boundVariables: { [key in string]?: VariableAlias }, };
