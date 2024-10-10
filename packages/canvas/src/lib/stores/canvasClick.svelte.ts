import type { Vector } from "@fig/types/properties/Vector";
import { navigation } from "$lib/stores/navigation.svelte";

type CanvasClickStates = {
  single: boolean;
  double: boolean;
  pressed: boolean;
  clickPoint: Vector | null;
};

class CanvasClickSvelte {
  private states: CanvasClickStates = $state({
    single: false,
    double: false,
    pressed: false,
    clickPoint: null,
  });

  constructor() {}

  get single() {
    return this.states.single;
  }

  get double() {
    return this.states.double;
  }

  get pressed() {
    return this.states.pressed;
  }

  get realClickPoint() {
    let point = this.states.clickPoint;
    return point ? point : { x: 0, y: 0 };
  }

  get virtualClickPoint() {
    let point = this.states.clickPoint
      ? this.states.clickPoint
      : { x: 0, y: 0 };
    return navigation.toVirtualPoint(point);
  }

  public setClickPoint(point: Vector) {
    this.states.clickPoint = point;
  }

  public setSingleClick(click: boolean, point: Vector) {
    this.states.single = click;
    this.states.clickPoint = point;
  }

  public setDoubleClick(click: boolean, point: Vector) {
    this.states.double = click;
    this.states.clickPoint = point;
  }

  public setPress(click: boolean, point: Vector) {
    this.states.pressed = click;
    this.states.clickPoint = point;
  }

  public resetClick() {
    this.states.single = false;
    this.states.double = false;
    this.states.pressed = false;
    this.states.clickPoint = null;
  }
}

export const canvasClick = new CanvasClickSvelte();
