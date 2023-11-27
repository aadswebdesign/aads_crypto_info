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
	const block_one = await FT.elQuery('.block-one');  
	const cookie_details = await FT.elQuery('.cookie-details',false, block_one); 
	await FT.detailsContentBoxHelper(cookie_details);
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
};