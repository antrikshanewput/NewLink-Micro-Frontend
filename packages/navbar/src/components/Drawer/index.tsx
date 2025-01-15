import { Provider } from '../ui/provider';
import NavDrawer, { NavDrawerProps } from './Drawer';

export default function DrawerComponent({ props }: NavDrawerProps) {
  return (
    <Provider>
      <NavDrawer {...props} />
    </Provider>
  );
}
