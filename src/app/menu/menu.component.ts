import { Component, OnInit } from '@angular/core';

import{ Dish } from '../shared/dish';
import{ DishDetail } from '../shared/dishdetail';

const DISHDETAILS: DishDetail[] = [
					   {
							
							details:  [
									       {
									           rating: 5,
									           comment: 'Imagine all the eatables, living in conFusion!',
									           author: 'John Lemon',
									           date: '2012-10-16T17:57:28.556094Z'
									       },
									       {
									           rating: 4,
									           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
									           author: 'Paul McVites',
									           date: '2014-09-05T17:57:28.556094Z'
									       },
									       {
									           rating: 3,
									           comment: 'Eat it, just eat it!',
									           author: 'Michael Jaikishan',
									           date: '2015-02-13T17:57:28.556094Z'
									       },
									       {
									           rating: 4,
									           comment: 'Ultimate, Reaching for the stars!',
									           author: 'Ringo Starry',
									           date: '2013-12-02T17:57:28.556094Z'
									       },
									       {
									           rating: 2,
									           comment: 'It\'s your birthday, we\'re gonna party!',
									           author: '25 Cent',
									           date: '2011-12-02T17:57:28.556094Z'
									       }
				   						]
					   }
					 ];
const DISH =   { 
				  name: 'Uthappizza',
				  image: '/assets/images/uthappizza.png',
				  category: 'mains',
				  label: 'Hot',
				  price: '4.99',
				  // tslint:disable-next-line:max-line-length
				  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
				  comments: [
						       {
						           rating: 5,
						           comment: 'Imagine all the eatables, living in conFusion!',
						           author: 'John Lemon',
						           date: '2012-10-16T17:57:28.556094Z'
						       },
						       {
						           rating: 4,
						           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
						           author: 'Paul McVites',
						           date: '2014-09-05T17:57:28.556094Z'
						       },
						       {
						           rating: 3,
						           comment: 'Eat it, just eat it!',
						           author: 'Michael Jaikishan',
						           date: '2015-02-13T17:57:28.556094Z'
						       },
						       {
						           rating: 4,
						           comment: 'Ultimate, Reaching for the stars!',
						           author: 'Ringo Starry',
						           date: '2013-12-02T17:57:28.556094Z'
						       },
						       {
						           rating: 2,
						           comment: 'It\'s your birthday, we\'re gonna party!',
						           author: '25 Cent',
						           date: '2011-12-02T17:57:28.556094Z'
						       }
				   			]
				};					 
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

	dishdetails=DISHDETAILS;

	selectedDishDetail: DishDetail = DISHDETAILS[0];

	

	
	constructor() { }

	ngOnInit() {
  }

}
