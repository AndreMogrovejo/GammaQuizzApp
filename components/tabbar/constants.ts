import { Dimensions } from "react-native";

export const { width: WIDTH } = Dimensions.get("window");
const TAB_NUMBER = 3;
export const BOTTOM_BAR_HEIGHT = 60;
export const PADDING_HORIZONTAL = 20;
export const BOTTOM_BAR_WIDTH = WIDTH - PADDING_HORIZONTAL * TAB_NUMBER;
export const BOTTOM_BAR_ITEM_WIDTH = BOTTOM_BAR_WIDTH / TAB_NUMBER;
export const CURVE_START = BOTTOM_BAR_ITEM_WIDTH / 2 - 42;
export const CURVE_END = BOTTOM_BAR_ITEM_WIDTH / 2 + 48;
export const CURVE_HEIGHT = 38;

// Control points for the curve
export const cpx1 = CURVE_START - 12;
export const cpy1 = 0;

export const cpx2 = CURVE_START;
export const cpy2 = 0;

export const cpx3 = CURVE_START;
export const cpy3 = CURVE_HEIGHT + 10;

export const cpx4 = CURVE_END;
export const cpy4 = CURVE_HEIGHT + 10;

export const cpx5 = CURVE_END;
export const cpy5 = 0;

export const cpx6 = CURVE_END + 12;
export const cpy6 = 0;
