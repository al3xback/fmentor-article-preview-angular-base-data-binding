import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	@Input() creator: { name: string; link: string };
	@Input() coder: { name: string; gitHubLink: string };
}
