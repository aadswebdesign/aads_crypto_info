/** templates/template_1.js */
import * as FT from './../../factory/functions.js';
import {detailsToggleCss} from './../../factory/handlers.js'; 

/**
 * @description: English	
 */
export const templateOneActions = async (_obj,page_id)=>{
	const obj = _obj
	console.table({[page_id]: obj})
	console.log('templateOneActions',page_id)
	const templateOne = await FT.getIdHelper('templateOne')
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	await detailsToggleCss('.cookie-details','block-one','to-up-caret','to-down-caret');
	//const nav_menu = await FT.elQuery('nav.main-menu');   //nav.main-menu
	//const nav_menu_width = nav_menu.offsetWidth;
	//const window_width = window.innerWidth;
	//const page_tabs = await FT.elQuery('div.page-tabs');
	//page_tabs.style.width = window_width - nav_menu_width - 10 + 'px';
	//console.log('nav_menu_width: ',nav_menu_width);
	//console.log('window_width: ',window_width);



};