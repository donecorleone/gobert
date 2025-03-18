import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "gobert-modehaus",
  title: "Gobert Modehaus",
  projectId: "7t60cuic",
  dataset: "production",
  plugins: [
    structureTool({
      name: "content",
      title: "Inhalte",
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["slider", "hero", "info", "event", "artist"].includes(
                  listItem.getId() as string
                )
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
