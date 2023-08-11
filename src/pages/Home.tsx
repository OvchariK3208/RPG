import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import Container from './../components/Container';
import Wrapper from './../components/Wrapper';
import GeneratedPassword from './../components/GeneratedPassword';
import LengthPassword from './../components/LengthPassword';
import SettingsPassword from './../components/SettingsPassword';
import { getRandomstring } from "./../utils/randomstring";
import { Link } from "react-router-dom";
import { GiThreeKeys } from "react-icons/gi";

const Home: FC = () => {
  const [readableSelected, setReadableSelected] = useState(false);
  
  const [generatedRandomstring, setGeneratedRandomstring] = useState<string>("");
  const changeGeneratedRandomstring = (event: ChangeEvent<HTMLInputElement>) => 
  	setGeneratedRandomstring(event.target.value)
  
  const [lengthPassword, setLengthPassword] = useState<number>(16);
  const changeLength = (event: ChangeEvent<HTMLInputElement>) => 
  	setLengthPassword(parseInt(event.target.value));
  	
  const [settingsPassword, setSettingsPassword] = useState<string[]>(["alphanumeric"]);
  const toggleSettingsPassword = (value: object): void => {
  	setReadableSelected(value["readable" as keyof typeof value]["selected"])
  	
  	const settingsList = Object.keys(value)
  		.filter(key => value[key as keyof typeof value]["selected"])
  		.map(key => value[key as keyof typeof value]["content"])
  		
		setSettingsPassword(settingsList)
  }
	
	useEffect(() => {
  	setGeneratedRandomstring(getRandomstring(
  		lengthPassword,
  		readableSelected, 
  		settingsPassword,
  		null))
  }, [lengthPassword, readableSelected, settingsPassword])
	
	return (
		<Container>
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-between border-b border-black p-5">
					<h2 className="">Random Password Generator</h2>
					<Link to="/passwords">
						<button 
							className="text-2xl px-2 cursor-pointer">
						  <GiThreeKeys />
						</button>
					</Link>
				</div>
				<div className="flex flex-col h-full p-5 gap-y-7">
					<Wrapper>
						<GeneratedPassword 
							value={ generatedRandomstring }
							onChange={ changeGeneratedRandomstring } />
	    		</Wrapper>
	    		<Wrapper>
	    			<LengthPassword
	    				value={ lengthPassword }
							onChange={ changeLength } />
	    		</Wrapper>
	    		<Wrapper>
	    			<SettingsPassword
	    				toggleSettingsPassword={ toggleSettingsPassword }/>
	    		</Wrapper>
				</div>
			</div>
		</Container>
	)
}

export default Home;