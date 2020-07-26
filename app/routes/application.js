import Route from '@ember/routing/route';

export default class FloorsRoute extends Route {
  async model() {
    let response = await fetch('/floor-setup.json');
    let parsed = await response.json();
    return parsed;
  }
}