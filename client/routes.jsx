import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import ResolutionsWrapper  from './resolutions/ResolutionsWrapper';

FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<ResolutionsWrapper />)
		})
	}
})
