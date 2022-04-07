import './App.css';

import {
  AbdsBadge,
  AbdsButton,
  AbdsCheckbox,
  AbdsModal,
  AbdsRadio,
  AbdsSwitch,
  AbdsTooltip,
} from '@abds/react-bindings';

import logo from './logo.svg';
import { useEffect, useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  /**
   * If a boolean attribute is set in the markup and that markup
   * then updates on rerender, the attribute will be true on each
   * rerender. One way to workaround this is to use useEffect to
   * set the attribute only one time on the initial render.
   */
  useEffect(() => {
    const tacoTuesday = document.querySelector('#taco-tuesday');

    if (!tacoTuesday.open) tacoTuesday.open = true;
  }, []);

  function addItem() {
    const item = document.createElement('li');
    const shoppingList = document.querySelector('.shoppingList');

    item.innerHTML = `
          <abds-checkbox></abds-checkbox>
          <input placeholder="enter text here"/>
        `;

    shoppingList.appendChild(item);
    setItemCount(itemCount + 1);
  }

  function resetItems() {
    let checkboxes = document.querySelectorAll('.shoppingList abds-checkbox[checked]');

    if (checkboxes.length) {
      setItemCount(itemCount - checkboxes.length);

      for (let item of checkboxes) {
        const liElement = item.parentElement;

        liElement.remove();
      }
    }
  }

  function toggleModal() {
    const currentState = document.querySelector('#modal-1')?.open;

    document.querySelector('#modal-1')?.setAttribute('open', !currentState);
  }

  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <img src={logo} className="h-80 logo opacity-25 pointer-events-none" alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <section>
          <h2>
            Shopping list <AbdsBadge palette="warning"> Item count: {itemCount}</AbdsBadge>
          </h2>
          <ul className="shoppingList"></ul>
          <div className="flex gap-x-2 items-center justify-center mt-2">
            <AbdsButton icon-start="list-bullets" onClick={resetItems} palette="brand">
              Remove Completed
            </AbdsButton>
            <AbdsButton icon-start="add" onClick={addItem} palette="brand">
              Add Item
            </AbdsButton>
          </div>
        </section>
        <section>
          <form className="text-left">
            <h2 className="text-center">
              Favorite Food Form
              <img
                alt=""
                className="inline"
                id="customIcon"
                src="https://img.icons8.com/office/30/000000/kawaii-taco.png"
              />
              <AbdsTooltip id="taco-tuesday" for="customIcon" placement="right">
                It's TACO TUUUUESDAY!!!
              </AbdsTooltip>
            </h2>

            <h3>Favorite Fruit</h3>
            <AbdsRadio name="fruit" value="apple">
              Apple
            </AbdsRadio>
            <AbdsRadio name="fruit" value="banana">
              Banana
            </AbdsRadio>
            <AbdsRadio name="fruit" value="cherry">
              Cherry
            </AbdsRadio>

            <h3>Favorite Vegetable</h3>
            <AbdsCheckbox name="veggie" value="carrot">
              Carrot
            </AbdsCheckbox>
            <AbdsCheckbox name="veggie" value="broccoli">
              Broccoli
            </AbdsCheckbox>
            <AbdsCheckbox name="veggie" value="potato" tooltip="potatoe">
              Potato
            </AbdsCheckbox>

            <h3>Dietary Restrictions</h3>
            <AbdsSwitch name="diet" value="vegan" tooltip="no meat">
              Vegan
            </AbdsSwitch>
            <AbdsSwitch name="diet" value="glutenfree">
              Gluten Free
            </AbdsSwitch>
            <AbdsSwitch name="diet" value="dairyfree">
              Dairy Free
            </AbdsSwitch>

            <AbdsButton className="block" type="submit">
              Submit
            </AbdsButton>
          </form>
        </section>
        <section>
          <h2>Toggle Playground</h2>

          <span className={darkMode ? 'text-white bg-black' : ''}>
            This sentence will change text and background color.
          </span>
          <AbdsSwitch
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            Toggle style
          </AbdsSwitch>
        </section>
        <section id="modal">
          <AbdsButton class="fixed bottom-1 right-1" onClick={toggleModal} appearance="outline" palette="destructive">
            Important information
          </AbdsButton>
          <AbdsModal header-text="Not important information" icon="information-circle" id="modal-1" palette="danger">
            <p slot="modal-header">Modal header which shouldn't show</p>
            <div slot="modal-body">
              <ul>
                <li>This is a sentence.</li>
                <li>This is another sentence.</li>
                <li>This is yet another sentence.</li>
                <li>You guessed it, this is a sentence.</li>
              </ul>
              <ul>
                <li>This is a sentence.</li>
                <li>This is another sentence.</li>
                <li>This is yet another sentence.</li>
                <li>You guessed it, this is a sentence.</li>
              </ul>
              <ul>
                <li>This is a sentence.</li>
                <li>This is another sentence.</li>
                <li>This is yet another sentence.</li>
                <li>You guessed it, this is a sentence.</li>
              </ul>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugit hic tempora beatae nostrum et,
              explicabo cumque libero laborum a sequi accusamus reprehenderit quisquam possimus, amet unde aspernatur,
              temporibus vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugit hic tempora beatae
              nostrum et, explicabo cumque libero laborum a sequi accusamus reprehenderit quisquam possimus, amet unde
              aspernatur, temporibus vel.
            </div>
            <div slot="modal-footer">
              <AbdsButton class="mr-1" appearance="outline" palette="neutral">
                This button will not close modal
              </AbdsButton>
              <AbdsButton>
                This one either
              </AbdsButton>
            </div>
            <p>no slot specified</p>
          </AbdsModal>
        </section>
      </div>
    </>
  );
};

export default App;
