// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
// See https://typed-ember.gitbook.io/glint/using-glint/ember/authoring-addons
import type ToucanFormComponent from './components/toucan-form';

export default interface Registry {
  ToucanForm: typeof ToucanFormComponent;
}
