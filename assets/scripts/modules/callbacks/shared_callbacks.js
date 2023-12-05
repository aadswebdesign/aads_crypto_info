/** callbakcs/shared_callbacks.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export async function shared_callbacks(){
	await HL.detailsEventsHandler('.cookie-details','.block-one',0,5);
	await HL.detailsEventsHandler('.page-tab','.page-tabs',0,0);
	await HL.detailsTabsHandler('.page-tab','.page-tabs');
	await HL.detailsContentHandler('.page-tab','.page-tabs',-10, true);
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
}