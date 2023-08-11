import React, { FC } from 'react';
import { BiInfoCircle } from "react-icons/bi";
import { PiWarningCircleBold } from "react-icons/pi";

interface IInfo{
	isOpen: boolean;
	onClose: (value: boolean) => void;
}

const InfoMessage: FC<IInfo> = ({
	isOpen,
	onClose 
}) => {
	return (
		<>
			{isOpen &&
				<>
					<div className="flex items-center bg-sky-800 bg-opacity-20 gap-4 p-2">
						<div className="text-2xl">
							<BiInfoCircle />
						</div>
						<div className="">
							Combine several settings items
						</div>
					</div>
					
					<div className="flex items-center bg-yellow-600 bg-opacity-20 gap-4 p-2">
						<div className="text-2xl">
							<PiWarningCircleBold />
						</div>
						<div className="">
							Minimum one setting item must be selected
						</div>
					</div>
				</>}
		</>
	)
}

export default InfoMessage;