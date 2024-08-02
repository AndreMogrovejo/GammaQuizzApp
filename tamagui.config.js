import { createTamagui } from "tamagui";

const config = createTamagui({
  themes: {
    light: {
      background: "#f8f8f8",
      primary: "#FD6D6A",
      secondary: "#E5C6FF",
    },
  },
  tokens: {
    space: {
      $1: 8,
      $2: 16,
      $3: 24,
      $4: 32,
      $5: 40,
      $6: 48,
      true: 16, // Default space value
    },
    size: {
      $1: 12,
      $2: 14,
      $3: 16,
      $4: 18,
      $5: 20,
      $6: 24,
      true: 16, // Default size value
    },
  },
  fonts: {
    heading: {
      size: { $1: 16, $2: 20, $3: 24, $4: 32, $5: 40, $6: 48 },
    },
  },
});

export default config;
