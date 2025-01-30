import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/widgetA.ts", "./src/widgetB.ts", "./src/widgetC.ts"],
//   esbuildOptions(options) {
//     // Customize Esbuild's splitting behavior
//     options.chunkNames = 'shared'; // Name the shared chunk explicitly
//   },
});
