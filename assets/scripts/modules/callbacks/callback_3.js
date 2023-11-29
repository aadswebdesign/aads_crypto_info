/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
/**
 * @description: Thai	
 */
export const templateThreeActions = async (_obj,page_id)=>{
	const obj = _obj
	console.table({[page_id]: obj})
	console.log('templateThreeActions',page_id)
	const templateThree = await FT.getIdHelper('templateThree')
	console.log('templateThree',templateThree)
	await HL.detailsEventsHandler('.cookie-details','.block-one',0,5);
	await HL.detailsEventsHandler('.page-tab','.page-tabs',0,15);
	await HL.detailsTabsHandler('.page-tab','.page-tabs');
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
};
