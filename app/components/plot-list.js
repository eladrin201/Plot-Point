import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(point) {
      alert(point);
    }
  }
});
