import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[], char:string): any {
    return allRecipes!.filter((recipe) => recipe.recipeName.includes(char));
  }

}
