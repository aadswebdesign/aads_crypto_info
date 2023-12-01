/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export const templateTwoActions = async (_obj,page_id)=>{
	const obj = _obj
	const templateTwo = await FT.getIdHelper('templateTwo')
	await HL.detailsEventsHandler('.cookie-details','.block-one',0,5);
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	await HL.detailsEventsHandler('.page-tab','.page-tabs',0,0);
	await HL.detailsTabsHandler('.page-tab','.page-tabs');
	await HL.detailsSizesHandler('.page-tab','.page-tabs','section.top',0,-110);
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
};
