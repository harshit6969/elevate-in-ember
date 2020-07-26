import Component from '@glimmer/component';
import fade from 'ember-animated/transitions/fade';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  transition: fade,
  
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}