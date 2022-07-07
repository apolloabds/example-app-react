import { useEffect, useRef, useState } from 'react';
import {
  AbdsBadge,
  AbdsButton,
  AbdsCheckbox,
  AbdsModal,
  AbdsRadio,
  AbdsSwitch,
  AbdsTooltip,
} from '@abds/react-bindings';
import './App.css';
import logo from './logo.svg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const modalRef = useRef(null);
  const shoppingListRef = useRef(null);
  const tacoTooltipRef = useRef(null);

  const initializeTacoTuesday = () => {
    if (!tacoTooltipRef.current.open) tacoTooltipRef.current.open = true;
  };

  const toggleTheme = () => {
    const body = document.querySelector('body');

    ['bg-black', 'text-white'].forEach((className) => {
      body.classList[darkMode ? 'add' : 'remove'](className);
    });
  };

  /**
   * If a boolean attribute is set in the markup and that markup
   * then updates on rerender, the attribute will be true on each
   * rerender. One way to workaround this is to use useEffect to
   * set the attribute only one time on the initial render.
   */
  useEffect(initializeTacoTuesday, []);

  useEffect(toggleTheme, [darkMode]);

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
    let checkboxes = shoppingListRef.current.querySelectorAll('abds-checkbox[checked]');

    if (checkboxes.length) {
      setItemCount(itemCount - checkboxes.length);

      for (let item of checkboxes) {
        const liElement = item.parentElement;

        liElement.remove();
      }
    }
  };

  const toggleModal = () => {
    modalRef.current?.setAttribute('open', !modalRef.current?.open);
  };

  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <img alt="logo" className="h-80 logo opacity-25 pointer-events-none" src={logo} />
      </div>

      <div className="bg-blue-500 flex items-center justify-center py-4 text-center text-white" role="banner">
        <abds-icon icon="task-list-pen" size="5xl"></abds-icon>
        <h1>Welcome to our React example app!</h1>
      </div>

      <div className="flex flex-col items-center justify-center" id="main-content">
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

        <section id="diet-form">
          <form className="flex flex-col gap-y-2 text-left">
            <h2 className="flex gap-x-4">
              Favorite Food Form
              <img
                alt="taco"
                className="inline"
                id="customIcon"
                src="https://img.icons8.com/office/30/000000/kawaii-taco.png"
              />
              <AbdsTooltip for="customIcon" placement="right" ref={tacoTooltipRef}>
                It&rsquo;s TACO TUUUUESDAY!!!
              </AbdsTooltip>
            </h2>

            <section className="flex gap-x-4 items-center" id="favorite-fruit">
              <h3 className="block">Favorite Fruit:</h3>

              <AbdsRadio name="fruit" value="apple">
                Apple
                <i className="fas fa-apple-whole" id="apple"></i>
                <AbdsTooltip for="apple">Pick me! Pick ME!!</AbdsTooltip>
              </AbdsRadio>
              <AbdsRadio name="fruit" value="banana">
                Banana
              </AbdsRadio>
              <AbdsRadio name="fruit" value="cherry">
                Cherry
              </AbdsRadio>
              <AbdsRadio name="fruit" value="lemon">
                Lemon
                <i className="fas fa-lemon" id="lemon"></i>
                <AbdsTooltip for="lemon">ez pz lemon squeezy</AbdsTooltip>
              </AbdsRadio>
            </section>

            <section className="flex gap-x-4 items-center" id="favorite-vegetable">
              <h3>Favorite Vegetable:</h3>

              <AbdsCheckbox name="veggie" value="carrot">
                Carrot
                <i className="fas fa-carrot" id="carrot"></i>
                <abds-tooltip for="carrot">Ehhhh, what&rsquo;s up Doc?</abds-tooltip>
              </AbdsCheckbox>
              <AbdsCheckbox name="veggie" value="broccoli">
                Broccoli
              </AbdsCheckbox>
              <AbdsCheckbox name="veggie" required tooltip="potatoe" value="potato">
                Potato
              </AbdsCheckbox>
            </section>

            <section className="flex gap-x-4 items-center" id="dietary-restrictions">
              <h3>Dietary Restrictions:</h3>

              <AbdsSwitch name="diet" tooltip="no meat" value="vegan">
                Vegan
              </AbdsSwitch>
              <AbdsSwitch name="diet" value="carnivore">
                Carnivore
                <i className="fas fa-dragon" id="dragon"></i>
                <abds-tooltip for="dragon">ROOAARR!!!</abds-tooltip>
              </AbdsSwitch>
              <AbdsSwitch name="diet" value="glutenfree">
                Gluten Free
              </AbdsSwitch>
              <AbdsSwitch name="diet" value="dairyfree">
                Dairy Free
              </AbdsSwitch>
            </section>

            <AbdsButton className="block" type="submit">
              Submit
            </AbdsButton>
          </form>
        </section>

        <section className="flex gap-x-4" id="toggle-playground">
          <AbdsSwitch
            id="toggle-theme"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            Toggle theme
          </AbdsSwitch>
        </section>

        <section id="modal">
          <AbdsButton
            appearance="outline"
            className="fixed bottom-1 right-1"
            onClick={toggleModal}
            palette="destructive"
          >
            Important information
          </AbdsButton>

          <AbdsModal
            header-text="Not important information"
            icon="information-circle"
            id="modal-1"
            palette="danger"
            ref={modalRef}
          >
            <p slot="modal-header">Modal header which shouldn&rsquo;t show</p>

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
              <AbdsButton appearance="outline" className="mr-1" palette="neutral">
                This button will not close modal
              </AbdsButton>
              <AbdsButton>This one either</AbdsButton>
            </div>

            <p>no slot specified</p>
          </AbdsModal>
        </section>
      </div>
    </>
  );
};

export default App;
