export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
}

export interface FeatureFlag {
  id: string;
  enabled: boolean;
  featureName: string;
}
