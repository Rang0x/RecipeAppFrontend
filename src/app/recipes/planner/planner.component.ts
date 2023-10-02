import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg, Draggable, EventDragStopArg, EventReceiveArg } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { RecipeService } from 'src/app/recipe.service';
import { PlannerService } from 'src/app/planner.service';
// import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit{
  char:string = '' ;
  list: any[] = [];
  userId = localStorage.getItem('userId');
  mealId = '';
  recipeId = '';
  recipes: Recipe[] = [];
  userEvents: any[] = [];
  calendarOptions?: CalendarOptions;
  ngOnInit(): void {
    this.getUserPlanner(this.userId!);
    console.log(this.userEvents);
    
    this.recipesService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log(this.recipes);
    });

    let draggableEl = document.getElementById('recipes-events');
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin, listPlugin],
      editable: true,
      height: 600,
      droppable: true,
      drop: this.sendEvent.bind(this),
      eventDrop: this.editEvent.bind(this),
      eventClick: this.deleteEvent.bind(this)
    }
    
    new Draggable(draggableEl!, {
      itemSelector: '.recipeCard',
      eventData: function(eventEl: any) {
        return {
          title: eventEl.innerText
        };
      },
      
    });
  }
  handleEventDragStop(info:any) {
    console.log( info);
  }
  sendEvent(info:any){
    this.recipeId = info.draggedEl.getAttribute('id');
    console.log(this.recipeId);
    console.log(this);
    this._plannerService.postUserPlanner(info.dateStr, info.draggedEl.getAttribute('id'), this.userId!).subscribe((res) => {
        this.mealId = res.mealPlanId;
        console.log(res);
      }
    )
  };
  editEvent(info:any){
    console.log(`heyy ${this.mealId}`);
    this._plannerService.editUserPlanner(this.mealId, info.event._instance.range.start, this.recipeId).subscribe((res) => console.log(res)
    )
  }
  getUserPlanner(userId:string){
    console.log('userPlannnerrr');
    this._plannerService.getUserPlanner(userId).subscribe((res) => {
      console.log(res);
      for (const object of res) {
        const convertedObject = {
          title: object.mealName,
          date: new Date(object.date),
          backgroundColor: '#ffb6a9',
          mealId : object.mealPlanId
        };  
        this.userEvents.push(convertedObject);
      }
      console.log(this.userEvents);
      this.calendarOptions!.events = this.userEvents
    }
    )
  }
  deleteEvent(info:any){
    console.log(info);
    this._plannerService.deleteEvent(info.event._def.extendedProps.mealId).subscribe((res) => {
      console.log(res);
      this.getUserPlanner(this.userId!)
    })
  }
  constructor(private recipesService : RecipeService, private _plannerService : PlannerService){}
}


// function handleDateClick(arg: any, DateClickArg: any) {
//   throw new Error('Function not implemented.');
// }
// postPlan(){
//   this._plannerService.postUserPlanner(dateStr, this.recipeId, userID)
// }


// eventAllow: function(dropInfo, draggedEvent) {
//   if (true) {
//     return dropInfo.start < new Date(2023, 9, 29); // a boolean
//   }
//   else {
//     return true;
//   }
// },


// function(info) {
//   console.log(info.dateStr);
//   console.log(info.draggedEl.getAttribute('id'));





  // availableProducts: any[] | undefined;

  // selectedProducts: any[] | undefined;

  // draggedProduct: any | undefined | null;


  
//   ngOnInit() {
//       this.selectedProducts = [];
//       this.availableProducts = [
//           {id:'1', name: 'Black Watch'},
//           {id:'2', name: 'Bamboo Watch'}
//       ]
//   }

//   dragStart(product: any) {
//       this.draggedProduct = product;
//   }

//   drop() {
//       if (this.draggedProduct) {
//           let draggedProductIndex = this.findIndex(this.draggedProduct);
//           this.selectedProducts = [...(this.selectedProducts as any[]), this.draggedProduct];
//           this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
//           this.draggedProduct = null;
//       }
//   }

//   dragEnd() {
//       this.draggedProduct = null;
//   }

//   findIndex(product: any) {
//       let index = -1;
//       for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
//           if (product.id === (this.availableProducts as any[])[i].id) {
//               index = i;
//               break;
//           }
//       }
//       return index;
//   }
