import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [typescript, dts({ respectExternal: true })],
  },
];
