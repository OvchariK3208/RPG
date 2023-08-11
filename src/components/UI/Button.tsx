import React, { FC, ReactNode } from 'react';

interface IButton {
	children: ReactNode;
	onClick?: () => void;
}

const Button: FC<IButton> = ({ 
	children,
	onClick
}) => {
	return (
		<button 
			className="text-2xl py-3 px-2 cursor-pointer"
			onClick={ onClick }>
			{ children }
    </button>
	)
}

export default Button;