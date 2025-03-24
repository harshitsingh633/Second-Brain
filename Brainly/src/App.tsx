// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Button } from "./Components/ui/Button";
import { PlusIcon } from "./icons/plusIcon";


function App() {
  return (
    <div>
      <Button startIcon={<PlusIcon />} size="sm" variant="primary" text="Share" />
      <Button size="sm" variant="secondary" text="Add Content" />
      <Button size="sm" variant="secondary" text="Add Content" />
    </div>
  );
}

export default App;