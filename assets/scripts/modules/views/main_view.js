/** modules/views/main_view.js */
import * as FT from './../../factory/functions.js';
import * as HE from './../../htmlManager/htmlElements.js';
import{template_null} from './../templates/template_0.js';
import{template_Actions} from './../callbacks/callback_0.js';
export async function mainView(){
	await HE.div('block page relative', null,null, await template_null(),true, 'main');
	//await ftrTemplateOne();
	
	
	
	
	await template_Actions();
}