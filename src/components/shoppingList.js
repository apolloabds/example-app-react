import { useEffect, useState } from 'react';
import { AbdsBadge, AbdsButton, AbdsCheckbox, AbdsInput } from '@abds/react-bindings';
import { guid } from '../utils';

export const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(items.length);

  useEffect(() => {
    setItemCount(items.length);
  }, [items]);

  const onAbdsCheckboxClick = (event) => {
    setItems((items) =>
      items.map((item) => {
        const { checked, id } = item;

        if (id === event.target.parentElement.id) item.checked = !checked;

        return item;
      })
    );
  };

  const onAbdsInputKeyUp = (event) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === event.target.parentElement.id) item.value = event.target.value;

        return item;
      })
    );
  };

  return (
    <section id="shopping-list">
      <h2>
        Shopping list <AbdsBadge palette="warning"> Item count: {itemCount}</AbdsBadge>
      </h2>

      <ul>
        {items.map(({ checked, id, value }) => (
          <li id={id} key={id}>
            <AbdsCheckbox checked={checked} onClick={onAbdsCheckboxClick} />
            <AbdsInput onKeyUp={onAbdsInputKeyUp} placeholder="Enter item" value={value} />
          </li>
        ))}
      </ul>

      <div className="flex gap-x-2 items-center justify-center mt-2">
        <AbdsButton
          icon-start="subtract"
          onClick={() => {
            setItems((items) => items.filter(({ checked }) => !checked));
          }}
          palette="brand"
        >
          Remove Completed
        </AbdsButton>
        <AbdsButton
          icon-start="add"
          onClick={() => {
            setItems((items) => [
              ...items,
              {
                checked: false,
                id: guid(),
                value: '',
              },
            ]);
          }}
          palette="brand"
        >
          Add Item
        </AbdsButton>
      </div>
    </section>
  );
};
