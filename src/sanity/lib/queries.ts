import groq from "groq";

export const PROJECTS_QUERY = groq`
  *[_type == "project"]{
    title,
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
