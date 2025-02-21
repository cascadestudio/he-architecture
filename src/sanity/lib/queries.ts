import groq from "groq";

export const FEATURED_PROJECT_QUERY = groq`
  *[_type == "project" && featured == true][0]{
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

export const PROJECTS_QUERY = groq`
  *[_type == "project" && !featured]{
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
