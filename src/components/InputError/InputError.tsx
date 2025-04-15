import React from 'react';

const InputError = ({
	messages = [],
	className,
}: {
	messages: Array<string>;
	className?: string;
}) => (
	<>
		{messages?.length > 0 && (
			<>
				{messages.map((message, index) => (
					<p className={`${className} text-sm text-rose-500`} key={index}>
						{message}
					</p>
				))}
			</>
		)}
	</>
);

export default InputError;
