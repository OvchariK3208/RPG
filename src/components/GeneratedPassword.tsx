import React, { FC, ChangeEvent, useState } from 'react';
import { AiOutlineCopy } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Input from './UI/Input';
import Button from './UI/Button';
import ModalCreatePassword from './ModalCreatePassword';

interface IInputPassword {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const GeneratedPassword: FC<IInputPassword> = ({
	value,
	onChange
}) => {
	const [copy, setCopy] = useState({ value, copied: false });
	// const handleClickCopy = (value: string) => 
	// 	window.navigator.clipboard.writeText( value )
		
	const [modalCreatePassword, setModalCreatePassword] = useState(false)
	const toggleModalCreatePassword = () => setModalCreatePassword(!modalCreatePassword);
	return (
		<Input 
			value={ value }
			onChange={ onChange }>
			<Button onClick={ toggleModalCreatePassword }>
			  <HiPlus />
			  <ModalCreatePassword
			  	password={ value }
			  	isOpen={ modalCreatePassword }
					toggle={ toggleModalCreatePassword } />
			</Button>
			<Button>
				<CopyToClipboard
					text={ value }
          onCopy={() => setCopy({ ...copy, copied: true })}>
          <AiOutlineCopy />
        </CopyToClipboard>
      </Button>
		</Input>
	)
}

export default GeneratedPassword;