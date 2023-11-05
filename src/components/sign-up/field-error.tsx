// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const FieldError: React.FC<React.PropsWithChildren> = ({ children }) =>
	(!!children && <small className='error-message'>{children}</small>) || null;
export default FieldError;
