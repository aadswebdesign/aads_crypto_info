/** templates/template_1.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
/**
 * @description: English	
 */
export const templateOneActions = async (_obj,page_id)=>{
	const obj = _obj
	//console.table({[page_id]: obj})
	//console.log('templateOneActions',page_id)
	const templateOne = await FT.getIdHelper('templateOne')
	await HL.detailsEventsHandler('.cookie-details','.block-one',0,5);
	await HL.detailsEventsHandler('.page-tab','.page-tabs',0,15);
	await HL.detailsTabsHandler('.page-tab','.page-tabs');
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
};