// TODO
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4000",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
          // TODO
          preset: "client",
          presetConfig: {
            // TODO
            gqlTagName: "gql",
          },
        },
      },
    //   ignoreNoDocuments: true,
};

export default config;