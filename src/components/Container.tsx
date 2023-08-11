import React, { FC, ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-3/5 border border-black rounded-lg">
				{ children }
			</div>
		</div>
	)
}

export default Container;