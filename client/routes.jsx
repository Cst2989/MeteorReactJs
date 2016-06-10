import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import ResolutionsWrapper  from './resolutions/ResolutionsWrapper';
import ResolutionsDetail  from './resolutions/ResolutionDetail';
import About  from './About';
FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<ResolutionsWrapper />)
		})
	}
})
FlowRouter.route('/about',{
	action(){
		mount(MainLayout,{
			content:(<About />)
		})
	}
})
FlowRouter.route('/resolutions/:id',{
	action(params){
		mount(MainLayout,{
			content:(<ResolutionsDetail id={params.id} />)
		})
	}
})
