import React, { FC } from 'react';
import Loader from './Loader';
import SavedPassword from './SavedPassword';
import { passwordAPI } from "./../services/PasswordService";

const SavedPasswords: FC = () => {
	const { data: passwords, isLoading, isError } = passwordAPI.useFetchAllPasswordsQuery(5)
	return (
		<div className="flex flex-wrap gap-y-5">
			{isError && <div className="">{ isError }</div>}
			{isLoading &&
				<div className="flex items-center justify-center w-full">
					<Loader />
				</div>}
			{passwords?.map(({ id, title, password }) => { 
				return (
					<SavedPassword
						key={ id }
						id={ id }
						title={ title }
						password={ password } />
				)})}
		</div>
	)
}

export default SavedPasswords;