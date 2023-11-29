/** modules/views/navigation_view.js */
import * as HE from './../../htmlManager/htmlElements.js';
//main-menu realtive
export async function navigationView(){
	await HE.div('display-none active', 'menu_item_0',null,null,false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item_1',null,'English',false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item_2',null,'Dutch/NL',false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item_3',null,'แบบไทย',false, 'nav.main-menu');
}