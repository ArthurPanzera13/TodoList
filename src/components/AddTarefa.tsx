import { InputGroup } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { VscAdd } from "react-icons/vsc";
import { useState, KeyboardEvent} from 'react';
import { keyboardKey } from '@testing-library/user-event';

type propriedades = {
    onEnter: (nametask: string) => void
}

const AddTarefa = ({onEnter}: propriedades) => {

    const [InputText, setInputText] = useState('');

    const handleKeyUp = (evento: KeyboardEvent) => {
        if(evento.code == 'Enter' && InputText != ''){
            onEnter(InputText);
        }
    }

    return (
        <InputGroup>
            <Input 
                id='texto'
                placeholder='A fazer...'
                value={InputText}
                onChange = {e => setInputText(e.target.value)}
                onKeyUp = {handleKeyUp}
            />
            <Button type='button' id ='butao'>
            <VscAdd/>
            </Button>
        </InputGroup>
    );
};

export default AddTarefa;