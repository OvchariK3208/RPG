import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import Input from './UI/Input';
import Button from './UI/Button';
import { CgClose } from "react-icons/cg";
import { passwordAPI } from "./../services/PasswordService";
import { IPassword } from "../models/IPassword";

interface IModalUpdatePassword {
	id: number;
	title: string;
	password: string;
  isOpen: boolean;
  toggle: () => void;
}

const ModalUpdatePassword: FC<IModalUpdatePassword> = ({ 
	id,
	title,
	password,
	isOpen,
	toggle 
}) => {
	const [titlePassword, setTitlePassword] = useState<string>("");
	const changeTitlePassword = (event: ChangeEvent<HTMLInputElement>): void => 
		setTitlePassword(event.target.value)
	
	const [originalPassword, setOriginalPassword] = useState<string>("");
	const changeOriginalPassword = (event: ChangeEvent<HTMLInputElement>): void => 
		setOriginalPassword(event.target.value)
 
	const [updatePassword] = passwordAPI.useUpdatePasswordMutation()
	const handleUpdate = (password: IPassword) => {
    updatePassword({ 
    	id: id,
    	title: titlePassword,
    	password: originalPassword
  	} as IPassword)
		toggle()
	}
	
	useEffect(() => {
  	setTitlePassword(title)
  }, [title])
	
	useEffect(() => {
  	setOriginalPassword(password)
  }, [password])
	return (
		<>
			{isOpen && (
		    <div 
		    	className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center"
		    	onClick={ toggle }>
		      <div 
		      	className="relative w-3/5 bg-white border border-black rounded-lg text-base"
		      	onClick={(e) => e.stopPropagation()}>
		    	  <div className="flex flex-col h-full">
		        	<div className="flex items-center justify-between border-b border-black p-5">
								<h2 className="">Update Password</h2>
								<Button
									onClick={ toggle }>
								  <CgClose />
								</Button>
							</div>
		        	<div className="flex flex-col h-full p-5 gap-y-7">
	        			<Input 
	        				placeholder="Title password"
	        				value={ titlePassword }
									onChange={ changeTitlePassword } />
	        			<Input 
	        				value={ originalPassword }
									onChange={ changeOriginalPassword }
									/>
								<button
									className="text-base py-3 px-2 cursor-pointer border border-black rounded-lg"
									onClick={() => handleUpdate({ id, title, password }) }>
								  Update
								</button>
		        	</div>
						</div>      
		  		</div>
		  	</div>)}
    </>
	)
}

export default ModalUpdatePassword;