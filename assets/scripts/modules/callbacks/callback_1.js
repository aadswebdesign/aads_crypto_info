/** callbakcs/callback_1.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {shared_callbacks} from './shared_callbacks.js';
/**
 * @description: English	
 */
export const templateOneActions = async (_obj,page_id)=>{
	const obj = _obj
	const templateOne = await FT.getIdHelper('templateOne')
	await shared_callbacks();
};