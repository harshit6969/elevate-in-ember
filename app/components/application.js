import Component from "@glimmer/component";
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  constructor(...args) {
    super(...args);
    // fetch("/floor-setup.json")
    //   .then((res) => res.json())
    //   .then((floorData) => (this.model = floorData));
  }
  @action
  handleUp() {
      console.log("here")
    alert(`The person's name is!`);
  }
  @action
  handleDown() {
    console.log("here")
    alert(`The person's name is!`);
  }
}

// import Component from '@glimmer/component';
// import { action } from '@ember/object';

// export default class LiftComponent extends Component {
//   @action
//   handleUp(person) {
//     alert(`The person's name is ${person}!`);
//   }
//   @action
//   handleDown(person) {
//     alert(`The person's name is ${person}!`);
//   }
// }
