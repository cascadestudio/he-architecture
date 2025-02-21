import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "featured",
      title: "Projet mis en avant",
      type: "boolean",
      description:
        "Un seul projet peut être mis en avant sur la page d'accueil",
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          if (!fieldValue) return true;

          return context
            .getClient({ apiVersion: "2024-03-20" })
            .fetch(`*[_type == "project" && featured == true && _id != $id]`, {
              id: (context.document as any)._id,
            })
            .then(
              (documents) =>
                documents.length === 0 ||
                "Un seul projet peut être mis en avant"
            );
        }),
    }),
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
