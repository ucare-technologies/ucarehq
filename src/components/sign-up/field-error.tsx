import React from 'react';

const FieldError: React.FC = ({ children }) =>
	(!!children && <small className='error-message'>{children}</small>) || null;
export default FieldError;
