import { jss } from './jss';

const styles = {
  crossedContent: {
    textDecoration: 'line-through !important',
  },
  visible: {
    opacity: 1,
  },
  displayBlock: {
    display: 'block !important',
  },
  displayNone: {
    display: 'none !important',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();
export const commonClasses = classes;
