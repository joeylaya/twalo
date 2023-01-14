import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0 4px 36px 0px rgba(0, 0, 0, 0.05)"
      }
    },
    fontFamily: {
      "sans": ["Poppins", "Arial", "sans-serif"],
      "display": ["Josefin Sans", "Poppins", "Arial", "sans-serif"]
    }
  }
} as Options;
