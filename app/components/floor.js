import Component from "@glimmer/component";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationComponent extends Component {
	@service floorManager

	@action handleUp(e) {
		const floorNumber = parseInt(e.target.value, 10);
		this.floorManager.updateLiftPosition('up', floorNumber);
	}

	@action handleDown(e) {
		const floorNumber = parseInt(e.target.value, 10);
		this.floorManager.updateLiftPosition('down', floorNumber);
	}
}
