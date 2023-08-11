import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { passwordAPI } from "./../services/PasswordService";
import { AiOutlineCopy } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Input from './UI/Input';
import Button from './UI/Button';
import ModalUpdatePassword from './ModalUpdatePassword';

interface ISavedPassword {
	id: number;
	title: string;
	password: string;
}

const SavedPassword: FC<ISavedPassword> = ({ 
	id,
	title, 
	password
}) => {
	const [copy, setCopy] = useState({ password, copied: false });
	
	const [updatePassword, setUpdatePassword] = useState<string>("");
	const changeUpdatePassword = (event: ChangeEvent<HTMLInputElement>): void => 
		setUpdatePassword(event.target.value)
	
	const [deletePassword] = passwordAPI.useDeletePasswordMutation()
	const handleRemove = (number: number) => deletePassword(number)
	
	const [modalUpdatePassword, setModalUpdatePassword] = useState(false)
	const toggleModalUpdatePassword = () => setModalUpdatePassword(!modalUpdatePassword);
	
	useEffect(() => {
  	setUpdatePassword(password)
  }, [password])
	return (
		<div className="flex flex-wrap gap-y-2 w-full">
			<div className="">{ title }</div>
			<Input
				value={	updatePassword }
				onChange={ changeUpdatePassword }>
				<Button>
					<CopyToClipboard
						text={ password }
		        onCopy={() => setCopy({ ...copy, copied: true }) }>
		        <AiOutlineCopy />
		      </CopyToClipboard>
		    </Button>
		    <Button 
	    		onClick={ toggleModalUpdatePassword }>
				  <BiEditAlt />
				  <ModalUpdatePassword
				  	id={ id }
				  	title={ title }
				  	password={ password }
				  	isOpen={ modalUpdatePassword }
						toggle={ toggleModalUpdatePassword } />
				</Button>
		    <Button 
					onClick={() => handleRemove( id )}>
					<CgClose />
		    </Button>
			</Input>
		</div>
	)
}

export default SavedPassword;