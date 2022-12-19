import { useState } from 'react';

import {
  Container, Item
} from './style';

type Props = {
  items: any
  onTabSelect: any
}

/**
 * The Tabs Atom displays N tabs and trigger tabs selection.
 * It receives tabs data from `items` prop, an array of tabs.
 * Each tab should have a label and an id.
 * When a tab is selected, the `onTabSelect` is called passing
 * the tab selected trough arguments.
 */

const Tabs = ({ items, onTabSelect }: Props) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Container>
      {items.map((item: any) => (
        <Item
          key={item.id}
          
          selected={selected.id === item.id}
          onClick={() => {
            setSelected(item);
            onTabSelect(item);
          }}
        >
          { item.label }
        </Item>
      ))}
    </Container>
  );
}

export default Tabs