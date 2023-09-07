export interface Recipe {
        id?: number;
        recipeName: string;
        ingredients?: string[];
        steps?: string[];
        image?: string;
        dietaryRestriction?: string;
        popularity?: number;
        rating?: number;
}