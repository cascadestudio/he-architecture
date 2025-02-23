import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureBuilder } from "sanity/desk";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      //   orderableDocumentListDeskItem({
      //     type: "project",
      //     title: "Projets",
      //     S,
      //     context: {},
      //   }),
      // Add other document types here if needed
      ...S.documentTypeListItems().filter((item) => item.getId() !== "project"),
    ]);
