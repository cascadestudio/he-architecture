import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "projectType",
      title: "Type de projet",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "string",
    }),
    defineField({
      name: "budget",
      title: "Budget",
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
          preview: {
            select: {
              title: "caption",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
});
