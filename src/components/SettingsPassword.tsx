import React, { FC, useState, useEffect } from 'react';
import InfoMessage from './InfoMessage';
import Checkbox from './UI/Checkbox';
import Button from './UI/Button';
import { BiInfoCircle } from "react-icons/bi";

interface ISettingsPassword {
	toggleSettingsPassword: (value: object) => void;
}

const SettingsPassword: FC<ISettingsPassword> = ({
	toggleSettingsPassword
}) => {
	const [settings, setSettings] = useState({
		readable: {
			selected: false,
			content: "readable"
		},
		alphanumeric: {
			selected: true,
			content: "alphanumeric"
		},
		alphabetic: {
			selected: false,
			content: "alphabetic"
		},
		numeric: {
			selected: false,
			content: "numeric"
		},
		symbols: {
			selected: false,
			content: "!-$^+"
		}
	})
	
	const [infoMessage, setInfoMessage] = useState<boolean>(false);
	
	const disabledInput = () => {
		const checkboxInputs = (document.querySelectorAll('input[type=checkbox]:checked') as
		NodeListOf<HTMLInputElement> | null)
		
		if (checkboxInputs !== null && checkboxInputs.length === 1) {
			checkboxInputs.forEach(input => input.disabled = true)
		} else if (checkboxInputs !== null) {
			checkboxInputs.forEach(input => input.disabled = false)
		}
	}
	
	const toggleSettings = (id: string, value: object): void => {
		disabledInput()
		setSettings({ ...settings, [id]: { ...settings[id as keyof typeof settings], ...value } })
	}
	
	useEffect(() => {
  	disabledInput()
  }, [])
		
	useEffect(() => {
  	toggleSettingsPassword(settings)
  	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="">Password Settings</div>
				<Button 
				  onClick={() => setInfoMessage((prev) => !prev)}>
				  <BiInfoCircle />
				</Button>
			</div>
			{infoMessage && 
				<InfoMessage 
					isOpen={ infoMessage } 
					onClose={ setInfoMessage } />}
			<div className="flex flex-wrap gap-y-5">
				<Checkbox 
        	id="alphanumeric"
        	defaultChecked={ true }
        	text="Alphanumeric [0-9 a-z A-Z]"
        	toggleSettings={ toggleSettings } />
        <Checkbox 
        	id="alphabetic"
        	text="Alphabetic [a-z A-Z]"
        	toggleSettings={ toggleSettings } />
        <Checkbox 
        	id="numeric"
        	text="Numbers [0-9]"
        	toggleSettings={ toggleSettings } />
        <Checkbox 
        	id="symbols"
        	text="Symbols [!-$^+]"
        	toggleSettings={ toggleSettings } />
        <Checkbox 
        	id="readable"
        	text="Exclude poorly readable chars: 0OIl"
        	toggleSettings={ toggleSettings } />
      </div>
		</>
	)
}

export default SettingsPassword;

