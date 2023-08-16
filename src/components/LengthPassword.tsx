import React, { FC, ChangeEvent } from 'react';

interface ILengthPassword {
	value: number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LengthPassword: FC<ILengthPassword> = ({
	value,
	onChange
}) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="">Password Length</div>
				<div className="px-3">{ value }</div>
			</div>
			<input 
				type="range" 
				min="8" 
				max="32" 
				step="1"
				value={ value } 
				onChange={ onChange }
				className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
		</>
	)
}

export default LengthPassword;