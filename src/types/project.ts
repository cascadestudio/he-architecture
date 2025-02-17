export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  projectType: string;
  description: string;
  city: string;
  client: string;
  mission: string;
  budget: string;
  mainImage: {
    asset: {
      url: string;
      _ref?: string;
      _type: "reference";
    };
  };
  gallery: GalleryItem[];
}

export interface GalleryItem {
  image: {
    asset: {
      url: string;
      _ref?: string;
      _type: "reference";
    };
  };
  caption?: string;
}
