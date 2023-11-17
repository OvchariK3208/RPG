import React, { FC, ReactNode, ChangeEvent } from 'react';

interface IInput {
	children?: ReactNode;
	placeholder?: string;
	value: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({ 
	children,
	placeholder = "Password",
	value,
	onChange
}) => {
	return (
		<div className="flex items-center w-full border border-black rounded-lg">
			<input
				placeholder={ placeholder }
				type="text"
				value={	value }
				onChange={ onChange }
				className="bg-inherit py-3 px-4 w-full placeholder:text-white border-none focus:outline-none rounded-lg max-md:px-2" />
			{ children }
		</div>
	)
}

export default Input;