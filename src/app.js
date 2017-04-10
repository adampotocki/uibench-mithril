import m from 'mithril';
import Main from './components/main';

uibench.init('Mithril', '1.1.1');

document.addEventListener('DOMContentLoaded', e => {
  let container = document.getElementById('App');

  uibench.run(
    state => {
      return m.render(container, m(Main, { data: state }));
    },
    samples => {
      return m.render(container, m('pre', JSON.stringify(samples, null, ' ')));
    }
  );
});
