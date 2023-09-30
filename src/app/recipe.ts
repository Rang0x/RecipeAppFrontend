export interface Recipe {
        id?:                  number;
        recipeName:          string;
        ingredients:         string;
        steps?:               string;
        image?:               string;
        dietaryRestrictions?: string;
        createdOn?:           Date;
        popularity?:          number;
        rating?:              number;
        userId?:              number;
        user?:                null;
        categoryName?:        string;
        categoryId?:          number;
        category?:            null;
        reviews?:             null;
        ratings?:             null;
        favoritedByUsers?:    null;

}