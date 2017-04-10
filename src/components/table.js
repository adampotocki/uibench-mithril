import m from 'mithril';

const TableCell = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.text !== old.attrs.text;
  },
  view(vnode) {
    return m('td.TableCell', {
      onclick(e) {
        console.log('Clicked' + vnode.attrs.text);
        e.stopPropagation();
      }
    }, vnode.attrs.text);
  }
};

const TableRow = {
  onbeforeupdate(vnode, old) {
    return vnode.attrs.data !== old.attrs.data;
  },
  view(vnode) {
    let data = vnode.attrs.data,
        classes = 'TableRow';
    if (data.active) {
      classes = 'TableRow active';
    }

    const props = data.props;
    let len = props.length,
        children = new Array(len + 1),
        i = 0, prop = null;

    children[0] = m(TableCell, { key: '-1', text: '#' + data.id });
    for (i; i < len; i++) {
      prop = props[i];
      children[i + 1] = m(TableCell, { text: prop });
    }

    return m(`tr[data-id=${data.id}]`, { class: classes }, children);
  }
};

const Table = {
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
      children[i] = m(TableRow, { key: item.id, data: item });
    }

    return m('table.Table', [
      m('tbody', children)
    ]);
  }
};

export default Table;