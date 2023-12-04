/** callbakcs/callback_2.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {shared_callbacks} from './shared_callbacks.js';
export const templateTwoActions = async (_obj,page_id)=>{
	const obj = _obj
	const templateTwo = await FT.getIdHelper('templateTwo')
	await shared_callbacks();
};