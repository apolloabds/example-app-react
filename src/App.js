import './App.css';
import logo from './logo.svg';
import { ChangePassword, ColorSearch, ContactUs, DietForm, Modal, ShoppingList, TogglePlayground } from './components';

const App = () => (
  <>
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
      <img alt="logo" className="h-80 logo opacity-25 pointer-events-none" src={logo} />
    </div>

    <div className="bg-blue-500 flex items-center justify-center py-4 text-center text-white" role="banner">
      <abds-icon icon="task-list-pen" size="5xl"></abds-icon>
      <h1>Welcome to our React example app!</h1>
    </div>

    <div className="flex flex-col items-center justify-center" id="main-content">
      <ShoppingList />
      <DietForm />
      <ContactUs />
      <ChangePassword />
      <ColorSearch />
      <TogglePlayground />
      <Modal />
    </div>
  </>
);

export default App;
