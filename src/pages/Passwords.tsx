import React, { FC } from 'react';
import Container from './../components/Container';
import Wrapper from './../components/Wrapper';
import SavedPasswords from './../components/SavedPasswords';
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Passwords: FC = () => {
	return (
		<Container>
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-between border-b border-black p-5">
					<h2 className="">Saved Passwords</h2>
					<Link to="/">
						<button 
							className="text-2xl px-2 cursor-pointer">
						  <AiOutlineHome />
						</button>
					</Link>
				</div>
				<div className="flex flex-col h-full p-5 gap-y-7">
	    		<Wrapper>
	    			<SavedPasswords />
	    		</Wrapper>
	    	</div>
			</div>
		</Container>
	)
}

export default Passwords;