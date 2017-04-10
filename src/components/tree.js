import m from 'mithril';

const TreeLeaf = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data.id !== old.attrs.data.id;
  },
  view(vnode) {
    return m('li.TreeLeaf', vnode.attrs.data.id);
  }
};

const TreeNode = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data.children !== old.attrs.data.children;
  },
  view(vnode) {
    const items = vnode.attrs.data.children;
    let children = new Array(items.length),
        i = 0, item = null;

    for (i; i < items.length; i++) {
      item = items[i];
      children[i] = item.container ?
        m(TreeNode, { key: item.id, data: item })
      :
        m(TreeLeaf, { key: item.id, data: item })
    }

    return m('ul.TreeNode', children);
  }
};

const Tree = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data.root !== old.attrs.data.root;
  },
  view(vnode) {
    return m('div.Tree', m(TreeNode, { data: vnode.attrs.data.root }));
  }
};

export default Tree;