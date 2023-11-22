/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
import {detailsToggleCss} from './../../factory/handlers.js'; 
export const templateTwoActions = async (_obj,page_id)=>{
	const obj = _obj
	console.table({[page_id]: obj})
	console.log('templateTwoActions',page_id)
	const templateTwo = await FT.getIdHelper('templateTwo')
	console.log('templateTwo',templateTwo)
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	await detailsToggleCss('.cookie-details','block-one','to-up-caret','to-down-caret');
};