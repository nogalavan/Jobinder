import { useState } from 'react';

type UseToggle = [boolean, () => void];

const useToggle = (isOpen: boolean):UseToggle => {
  const [open, setOpen] = useState(isOpen);

  const toggle = () => setOpen(!open);

  return [open, toggle];
};

export default useToggle;