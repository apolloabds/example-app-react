import { useRef, useState } from 'react';
import { AbdsBadge, AbdsButton } from '@abds/react-bindings';

export const ShoppingList = () => {
  const [itemCount, setItemCount] = useState(0);

  const shoppingListRef = useRef(null);

  const addItem = () => {
    const item = document.createElement('li');

    item.innerHTML = `
      <abds-checkbox></abds-checkbox>
      <input placeholder="enter text here"/>
    `;

    shoppingListRef.current.appendChild(item);
    setItemCount(itemCount + 1);
  };

  const subtractItems = () => {
    const checkboxes = shoppingListRef.current.querySelectorAll('abds-checkbox[checked]');

    if (checkboxes.length) {
      setItemCount(itemCount - checkboxes.length);

      for (let item of checkboxes) {
        const liElement = item.parentElement;

        liElement.remove();
      }
    }
  };

  return (
    <section id="shopping-list">
      <h2>
        Shopping list <AbdsBadge palette="warning"> Item count: {itemCount}</AbdsBadge>
      </h2>

      <ul ref={shoppingListRef}></ul>

      <div className="flex gap-x-2 items-center justify-center mt-2">
        <AbdsButton icon-start="subtract" onClick={subtractItems} palette="brand">
          Remove Completed
        </AbdsButton>
        <AbdsButton icon-start="add" onClick={addItem} palette="brand">
          Add Item
        </AbdsButton>
      </div>
    </section>
  );
};
