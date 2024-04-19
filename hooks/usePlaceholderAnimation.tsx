// usePlaceholderAnimation customHook

import { config, useSpring } from "@react-spring/native";

const usePlaceholderAnimation = () => {
  return useSpring({
    from: { backgroundColor: "hsl(0, 0%, 61%)" },
    to: async next => {
      await next({ backgroundColor: "hsl(0, 0%, 89%)" });
      await next({ backgroundColor: "hsl(0, 0%, 61%)" });
    },
    loop: true,
    config: config.gentle
  });
};

export default usePlaceholderAnimation;
