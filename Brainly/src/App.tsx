// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Button } from "./Components/ui/Button";
import { plusIcon } from "./icons/plusIcon";

function App() {
  return (
    <div>
      <Button startIcon={plusIcon} size="sm" variant="primary" text="Share" />
      <Button size="md" variant="secondary" text="Add Content" />
      <Button size="lg" variant="secondary" text="Add Content" />
    </div>
  );
}

export default App;
