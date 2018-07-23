import { Component, OnInit } from '@angular/core';

import{ Dish } from '../shared/dish';

const DISHES: Dish[] =  [
						{
							name:'Uthapizza',
							image:'/assets/images/uthappizza.png',
							category:'mains',
							label:'Hot',
							price:'4.99',
							description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped  		with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and 		Buffalo Paneer.'
						},

						{
							name:'Zucchipakoda',
							image:'/assets/images/zucchipakoda.png',
							category: 'appetizer',
							label:'',
							price:'1.99',
							description:'Deep Fried Zucchini coated with mildly spiced chickpea flour batter     accompained with a sweet-tangy tamarid sauce'	
						},

						{
							name:'Vadonut',
							image:'/assets/images/vadonut.png',
							category: 'appetizer',
							label:'New',
							price:'1.99',
							description:'A quintessential ConFusion experience, is it a vada or donut?'	
						},

						{
							name:'ElaiCheese Cake',
							image:'/assets/images/elaicheesecake.png',
							category: 'dessert',
							label:'dessert',
							price:'2.99',
							description:'A delectable,semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indians cardamoms'	
						}

					 ];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	dishes = DISHES;
	selectedDish: Dish= DISHES[0];

	constructor() { }

	ngOnInit() {
  }

}
