import m from 'mithril';

const AnimBox = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data !== old.attrs.data;
  },
  view(vnode) {
    const data = vnode.attrs.data,
          id = data.id,
          time = data.time;

    return m(`div.AnimBox[data-id=${id}]`, {
      style: {
        borderRadius: `${(time % 10).toString()}px`,
        background: `rgba(0, 0, 0, ${(0.5 + ((time % 10) / 10)).toString()})`
      }
    });
  }
};

const Anim = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data.items !== old.attrs.data.items;
  },
  view(vnode) {
    const items = vnode.attrs.data.items;
    let len = items.length,
        children = new Array(len),
        i = 0, item = null;

    for (i; i < len; i++) {
      item = items[i];
      children[i] = m(AnimBox, { key: item.id, data: item });
    }
    return m('div.Anim', children);
  }
};

export default Anim;