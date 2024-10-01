// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { NavigationType } from "./NavigationType";

/**
 * The method of navigation. The possible values are:
 * - "NAVIGATE": Replaces the current screen with the destination, also closing all overlays.
 * - "OVERLAY": Opens the destination as an overlay on the current screen.
 * - "SWAP": On an overlay, replaces the current (topmost) overlay with the destination. On a
 *   top-level frame, behaves the same as "NAVIGATE" except that no entry is added to the
 *   navigation history.
 * - "SCROLL_TO": Scrolls to the destination on the current screen.
 * - "CHANGE_TO": Changes the closest ancestor instance of source node to the specified variant.'
 */
export type Navigation = { navigationType: NavigationType, };
