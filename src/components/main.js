import m from 'mithril';
import Table from './Table';
import Anim from './Anim';
import Tree from './Tree';

const Main = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data !== old.attrs.data;
  },
  view(vnode) {
    const data = vnode.attrs.data,
          location = data && data.location;

    let component = null;
    if (location === 'table') {
      component = m(Table, { data: data.table });
    } else if (location === 'anim') {
      component = m(Anim, { data: data.anim });
    } else if (location === 'tree') {
      component = m(Tree, { data: data.tree });
    }

    return m('div.Main', component);
  }
};

export default Main;