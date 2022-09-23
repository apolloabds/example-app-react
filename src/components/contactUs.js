import { useEffect, useState } from 'react';
import { AbdsButton, AbdsInput, AbdsSelect, AbdsSelectOption } from '@abds/react-bindings';

export const ContactUs = () => {
  const [states, setStates] = useState([
    { state_name: 'california' },
    { state_name: 'denver' },
    { state_name: 'new york' },
    { state_name: 'texas' },
  ]);

  const initializeStatesSelect = () => {
    const fetchAuthorizationToken = async () =>
      await fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: new Headers({
          'api-token': 'aJC50l2lisn1j0sD7nfyZsu0npkhf6JW2YA3FcQ1244YPtONQwiiIeU0H-6kdd6kbgY',
          'user-email': 'abc.121009.210823@gmail.com',
        }),
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then(({ auth_token }) => auth_token)
        .catch((error) => console.error(error));

    const fetchStates = async () => {
      const authorizationToken = await fetchAuthorizationToken();

      await fetch('https://www.universal-tutorial.com/api/states/United States', {
        headers: new Headers({
          Accept: 'application/json',
          Authorization: `Bearer ${authorizationToken}`,
          'api-token': 'aJC50l2lisn1j0sD7nfyZsu0npkhf6JW2YA3FcQ1244YPtONQwiiIeU0H-6kdd6kbgY',
          'user-email': 'abc.121009.210823@gmail.com',
        }),
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((states) => {
          setStates(states);
        })
        .catch((error) => console.error('error', error));
    };

    fetchStates();
  };

  useEffect(initializeStatesSelect, []);

  return (
    <section id="contact-us">
      <form className="flex flex-col gap-y-4">
        <h2>Contact Us</h2>

        <div className="flex gap-x-4">
          <AbdsInput
            maxlength="10"
            minlength="3"
            name="first-name"
            pattern="[A-Z|a-z]+"
            pattern-message="Must contain letters only"
          >
            First Name
          </AbdsInput>
          <AbdsInput name="last-name" pattern="[A-Z|a-z]+" required>
            Last Name
          </AbdsInput>
        </div>

        <div className="flex gap-x-4">
          <AbdsInput name="street" pattern="\w+(\s\w+){2,}" required>
            Street
          </AbdsInput>
          <AbdsInput name="city" pattern="[A-Z|a-z|\s]+" required>
            City
          </AbdsInput>
          <AbdsSelect
            id="states"
            label="State"
            name="state"
            placeholder="-- Select a state --"
            required
          >
            {states.map(({ state_name }) => (
              <AbdsSelectOption key={state_name} value={state_name.toLowerCase()}>
                {`${state_name.slice(0, 1).toUpperCase()}${state_name.slice(1)}`}
              </AbdsSelectOption>
            ))}
          </AbdsSelect>
        </div>

        <AbdsButton type="submit">Submit</AbdsButton>
      </form>
    </section>
  );
};
