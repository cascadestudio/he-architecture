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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "projectType",
      title: "Type de projet",
      description: "Exemple : 'Réhabilitation de l'ensemble du bâtiment'",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientName",
      title: "Maître d'ouvrage",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "budget",
      title: "Montant des travaux",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galerie d'images",
      type: "array",
      validation: (Rule) => Rule.max(3).error("Maximum 3 images autorisées"),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
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
