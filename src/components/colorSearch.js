import { useState } from 'react';
import { AbdsButtonIcon, AbdsInput } from '@abds/react-bindings';

export const ColorSearch = () => {
  const initialColors =
    'Red White Cyan Silver Blue Gray DarkBlue Black LightBlue Orange Purple Brown Yellow Maroon Lime Green Magenta Olive Pink Aquamarine';
  const [results, setResults] = useState(initialColors);

  const onAbdsInput = (event) => {
    const results = initialColors
      .split(' ')
      .filter((color) => color.toLowerCase().includes(event.target.value.toLowerCase()));

    setResults(results.length ? results.join(' ') : 'No results. Do you know your colors?');
  };

  return (
    <>
      <section>
        <h2>Color search</h2>
        <form className="flex gap-x-4 mt-4">
          <AbdsInput name="color" onAbdsInput={onAbdsInput} type="search">
            Type to search for a color
          </AbdsInput>
          <AbdsButtonIcon appearance="solid" className="self-end" icon="arrow-right" palette="brand"></AbdsButtonIcon>
        </form>
      </section>

      <p className="max-w-md" id="color-search-text">
        {results}
      </p>
    </>
  );
};
