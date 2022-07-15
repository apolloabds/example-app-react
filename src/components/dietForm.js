import { useEffect, useRef } from 'react';
import { AbdsButton, AbdsCheckbox, AbdsRadio, AbdsSwitch, AbdsTooltip } from '@abds/react-bindings';

export const DietForm = () => {
  const tacoTooltipRef = useRef(null);

  const initializeTacoTuesday = () => {
    /**
     * If a boolean attribute is set in the markup and that markup
     * then updates on rerender, the attribute will be true on each
     * rerender. One way to workaround this is to use useEffect to
     * set the attribute only one time on the initial render.
     */
    if (!tacoTooltipRef.current.open) tacoTooltipRef.current.open = true;
  };

  useEffect(initializeTacoTuesday, []);

  return (
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
  );
};
