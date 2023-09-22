export interface Recipe {
        id?: number;
        recipeName: string;
        ingredients?: string;
        steps?: string;
        image?: string;
        dietaryRestrictions?: string;
        createdOn?: Date;
        popularity?: number;
        rating?: number;
        categories?: string;
}