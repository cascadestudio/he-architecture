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
