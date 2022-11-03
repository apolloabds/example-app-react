import { AbdsButtonIcon, AbdsInput } from '@abds/react-bindings';

export const ChangePassword = () => {
  return (
    <section>
      <h2>Change Password</h2>
      <form className="flex gap-x-4 mt-4">
        <AbdsInput autocomplete="password" name="password" required type="password">
          Old Password
        </AbdsInput>
        <AbdsInput
          autocomplete="password"
          helper-text="Must include any 8 characters"
          name="newPassword"
          pattern="[a-zA-Z0-9]{8,}"
          pattern-message="Enter at least 8 characters"
          required
          type="password"
        >
          New Password
        </AbdsInput>
        <AbdsButtonIcon appearance="solid" class="self-center" icon="arrow-right" palette="brand"></AbdsButtonIcon>
      </form>
    </section>
  );
};
