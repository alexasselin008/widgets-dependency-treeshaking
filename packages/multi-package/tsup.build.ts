import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/widget-a.ts", "./src/widget-b.ts"],
    splitting: true, // this creates the chunk
});
