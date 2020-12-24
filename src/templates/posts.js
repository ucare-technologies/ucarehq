// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import Posts from '../components/blogs/posts';

export default ({ pageContext, location }) => <Posts location={location} {...pageContext} />;
