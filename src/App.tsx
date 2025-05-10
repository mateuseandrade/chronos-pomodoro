import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        neque et cum cupiditate dicta possimus ea eaque. Fugiat sed mollitia
        reiciendis beatae laborum sit vero, ex excepturi, ad fugit magni.
      </p>
    </>
  );
}
