import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineType({
  name: "project",
  title: "Projets",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "title", title: "Titre", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),

    defineField({
      name: "projectType",
      title: "Type de projet",
      description: "Exemple : 'Réhabilitation de l'ensemble du bâtiment'",
      type: "string",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "clientName",
      title: "Maître d'ouvrage",
      type: "string",
    }),
    defineField({ name: "city", title: "Ville", type: "string" }),
    defineField({ name: "mission", title: "Mission", type: "string" }),
    defineField({
      name: "budget",
      title: "Montant des travaux",
      type: "string",
    }),
    defineField({
      name: "gallery",
      title: "Galerie d'images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "caption",
              title: "Légende",
              type: "string",
              description: "Optionnelle",
            },
          ],
          preview: { select: { title: "caption", media: "image" } },
        },
      ],
    }),
  ],
});
