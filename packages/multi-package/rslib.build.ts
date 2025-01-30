import { defineBuildConfig } from "@workleap/rslib-configs";
import path from "node:path";

export default defineBuildConfig({
    tsconfigPath: path.resolve("./tsconfig.build.json"),
    bundle: true,
    entry: {
        index: ["./src/index.ts"]
        // index: ["./src/widget-a.ts", "./src/widget-b.ts"]
    },

    // entry: {
    //     index: [
    //         path.resolve("./src/widget-a.ts"),
    //         path.resolve("./src/widget-b.ts")
    //     ]
    // }
    transformers: [
        (config, context) => {
            config.output = {
                ...config.output,
                externals: ["@repo/widget-a", "@repo/widget-b"]
            }
            // config.lib[0].bundle = true;
            return config;
        }
    ]
});