import groq from "groq";

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(orderRank) {
    title,
    projectType,
    mainImage{
      asset->{
        url
      }
    },
    slug{
      current
    }
  }
`;

export const PROJECT_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    mainImage{
      asset->{
        url
      }
    },
    projectType,
    description,
    city,
    clientName,
    mission,
    budget,
    gallery[] {
      image{
        asset->{
          url
        }
      },
      caption
    }
  }
`;
