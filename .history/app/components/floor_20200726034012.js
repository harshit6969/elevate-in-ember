import Component from "@glimmer/component";
import fade from "ember-animated/transitions/fade";
import { action } from "@ember/object";

export default Component.extend({
  transition: fade,

  guests: 1,

  actions: {
    addGuest() {
      if (this.guests < 6) {
        this.incrementProperty("guests");
      }
    },

    removeGuest() {
      if (this.guests > 1) {
        this.decrementProperty("guests");
      }
    },
  },
});
