import {
  install,
  uninstall
} from '@github/hotkey';

const setAndInstall = (node, keys) => {
  node.dataset.hotkey = keys;
  install(node);
};

export const hotkey = (node, keys) => {
  setAndInstall(node, keys);

  return {
    update: (keys) => {
      if (node.dataset.hotkey) {
        uninstall(node);
      }
      if (keys) {
        setAndInstall(node, keys);
      } else {
        delete node.dataset.hotkey;
      }
    },
    destroy: () => {
      uninstall(node);
    }
  };
};