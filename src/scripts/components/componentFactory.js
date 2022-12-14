//import Header from './Header';
import Scrolly from './Scrolly';
import Form from './Form';
import Video from './Video';
import Hamburger from './Hamburger';
import Accueil from './Accueil';
import Apropos from './Apropos';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      //     Header,
      Scrolly,
      Form,
      Hamburger,
      Accueil,
      Apropos,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
