import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ApplicationComponent extends Component {
  @service floorManager;

  @action handleUp(fromFloor) {
	this.floorManager.updateLiftPosition("up", fromFloor);
  }

  @action handleDown(fromFloor) {
	this.floorManager.updateLiftPosition("down", fromFloor);
  }
}
