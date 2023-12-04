/** callbakcs/shared_callbacks.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export async function shared_callbacks(){
	await HL.detailsEventsHandler('.cookie-details','.block-one',0,5);
	await HL.detailsEventsHandler('.page-tab','.page-tabs',0,0);
	await HL.detailsTabsHandler('.page-tab','.page-tabs');
	const media = {
		ls_min480: window.matchMedia("(min-width: 480px) and (orientation: landscape)"), 
		ls_min571: window.matchMedia("(min-width: 571px) and (orientation: landscape)"), 
		ls_min786: window.matchMedia("(min-width: 786px) and (orientation: landscape)"), 
		pt_min320: window.matchMedia("(min-width: 320px) and (orientation: portrait)"), 
		pt_min480: window.matchMedia("(min-width: 480px) and (orientation: portrait)"), 
		pt_min571: window.matchMedia("(min-width: 571px) and (orientation: portrait)"), 
	};
	if(media.ls_min786.matches){	
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',-100,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-240,-10);
	}else if(media.ls_min571.matches){	
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',-250,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-390,-10);
	}else if(media.ls_min480.matches){
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',8,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-135,-10);
	}
	if(media.pt_min571.matches){
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',-160,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-310,-10);
	}else if(media.pt_min480.matches){
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',92,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-50,-10);
	}else if(media.pt_min320.matches){
		await HL.detailsContentHandler('.page-tab.tab-two','.page-tabs',12,-10);
		await HL.detailsContentHandler('.page-tab.tab-one','.page-tabs',-130,-10);
	}	
	const main_elem = await FT.elQuery('main');
	if(main_elem.classList.contains('coin-deco')){
		main_elem.classList.remove('coin-deco');
	}
	await FT.setContent('small.my-details',`awd<time><i> &#169; </i>${await FT.getYear()}</time>`,false,true);
	
	
	

}