import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';

import { Params , ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	leader : Leader;

  constructor(
				private leaderservice : LeaderService,
  					private route : ActivatedRoute,
  					private location : Location
  				)
  	 { }

  ngOnInit() {
  	let id = +this.route.snapshot.params['id'];
  	this.leader = this.leaderservice.getLeader(id);
  }

  

}
