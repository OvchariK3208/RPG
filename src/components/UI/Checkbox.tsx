import React, { FC, ChangeEvent, useState } from 'react';

interface ICheckbox {
	id: string;
	text: string;
	defaultChecked?: boolean;
	toggleSettings: (id: string, value: object) => void;
}

const Checkbox: FC<ICheckbox> = ({ 
	id,
	text,
	defaultChecked = false,
	toggleSettings
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
	const handleCheckbox = (
		event: ChangeEvent<HTMLInputElement>, 
		id: string
	): void => {
		setIsChecked((prev) => !prev)
		const newValue = ({ selected: event.target.checked })
		
		if (toggleSettings !== undefined) {
			toggleSettings(id, newValue)
		}
	}
	return (
		<div className="w-full md:w-1/2 h-auto flex items-center gap-2 cursor-pointer">
      <input 
      	type="checkbox" 
      	id={ id } 
      	checked={ isChecked }
      	onChange={(event) => handleCheckbox(event, id)} />
      <label 
      	htmlFor={ id }
      	className="w-3/4 max-sm:w-2/3">
      	{ text }
      </label>
    </div>
	)
}

export default Checkbox;