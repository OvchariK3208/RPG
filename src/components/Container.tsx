import React, { FC, ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
	return (
		<div className="flex items-center justify-center min-h-screen py-16">
			<div className="w-3/5 max-w-xl border border-black rounded-lg">
				{ children }
			</div>
		</div>
	)
}

export default Container;