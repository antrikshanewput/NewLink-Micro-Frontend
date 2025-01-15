import { colors } from './colors';
import { layout } from './layout';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';
import { zIndices } from './z-index';

const foundations = {
  colors,
  ...typography,
  shadows,
  spacing,
  layout,
  zIndices,
};

export default foundations;
