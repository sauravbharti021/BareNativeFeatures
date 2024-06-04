import { Dimensions, Platform } from "react-native";

import { isWeb } from "../utils";

export const HEADER_HEIGHT = 100;

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window = Platform.OS == "web"
  ? {
    ...Dimensions.get("window"),
    width: 700,
  }
  : Dimensions.get("window");