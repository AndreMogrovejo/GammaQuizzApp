// import {
//   add,
//   Canvas,
//   Circle,
//   LinearGradient,
//   vec,
//   sub,
//   Fill,
//   mix,
//   BackdropFilter,
//   BlurMask,
//   useComputedValue,
// } from "@shopify/react-native-skia";
// import * as React from "react";
// import { Dimensions } from "react-native";

// const { width, height } = Dimensions.get("window");
// const c = vec(width / 2, (height / 2) * 1.5);
// const r = c.x - 32;

// export default function ThemedBlur() {
//   const start = useComputedValue(
//     () => sub(c, vec(0, mix(progress.current, r, r))),
//     [progress]
//   );
//   const end = useComputedValue(
//     () => add(c, vec(0, mix(progress.current, r, r / 2))),
//     [progress]
//   );
//   const radius = useComputedValue(
//     () => mix(progress.current, r, r / 2),
//     [progress]
//   );
//   return (
//     <Circle c={c} r={radius} >
//     <LinearGradient
//         start={start}
//         end={end}
//         colors={['#CDC5FF', '#FFBBC2']}
//     />
//     <BlurMask blur={20} style="normal" />
// </Circle>
//   );
// }
