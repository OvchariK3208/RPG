import React, { FC, ReactNode } from 'react';

interface IWrapper {
	children: ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
	return (
		<div className="flex flex-col gap-2">
			{ children }
		</div>
	)
}

export default Wrapper;