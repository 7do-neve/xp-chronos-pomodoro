import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Focando em:'
          id='meuInput'
          type='text'
          placeholder='Digite aqui...'
        />
      </div>

      <div className='formRow'>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
