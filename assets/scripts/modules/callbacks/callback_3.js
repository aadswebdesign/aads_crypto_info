/** callbakcs/callback_3.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {shared_callbacks} from './shared_callbacks.js';
/**
 * @description: Thai	
 */
export const templateThreeActions = async (_obj,page_id)=>{
	const obj = _obj
	const templateThree = await FT.getIdHelper('templateThree')
	await shared_callbacks();
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);

};
