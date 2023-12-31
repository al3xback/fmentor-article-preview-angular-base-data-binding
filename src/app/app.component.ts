import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	project = {
		name: 'Article preview component',
		card: {
			title: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
			description:
				"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
			imageSrc: '/assets/images/drawers.jpg',
			author: {
				name: 'Michelle Appleton',
				imageSrc: '/assets/images/avatar.jpg',
				postDate: new Date(2020, 5, 28)
			}
		},
		creator: {
			name: 'Frontend Mentor',
			link: 'https://www.frontendmentor.io?ref=challenge'
		},
		coder: {
			name: 'al3xback',
			gitHubLink: 'https://github.com/al3xback'
		}
	};
}
