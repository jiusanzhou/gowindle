import { h } from 'preact';
/** @jsx h */

import empty from './empty';
import minimal from "./minimal";
import _default from './default';

// multi layout
const _layouts = {
  empty,
  minimal,
  default: _default,
};

export default ({ layout = 'empty', ...props }) => {
  // if layout is string create with or { name }
  let name;
  let _props = {};
  switch (typeof layout) {
    case 'string':
      name = layout
      _props = { ...props }
      break;
    case 'object':
      name = layout.name
      _props = { ...layout, ...props, name: null }
      break;
    default:
      break;
  }

  // create children in here???
  return h(_layouts[name] || empty, _props)
};
