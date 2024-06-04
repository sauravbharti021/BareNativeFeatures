import React from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { SBImageItem } from "./SBImageItem";
import { SBTextItem } from "./SBTextItem";



export const SBItem = (props) => {
  const { style, showIndex = true, index, pretty, img, testID, ...animatedViewProps } = props;
  const enablePretty = true|| false;
  const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {isPretty || img
          ? (
            <SBImageItem style={style} index={index} showIndex={typeof index === "number" && showIndex} img={img} />
          )
          : (
            <SBTextItem style={style} index={index} />
          )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};