import { Component, Input } from '@angular/core';

import { Card } from '../../shared/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() card: Card;

	getAuthorPostDate() {
		const date = this.card.author.postDate;
		const day = date.getDate();
		const month = date.toLocaleString('en-US', {
			month: 'short'
		});
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	}
}
