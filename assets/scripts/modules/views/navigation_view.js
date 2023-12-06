/** modules/views/navigation_view.js */
import * as HE from './../../htmlManager/htmlElements.js';
//main-menu realtive
export async function navigationView(){
	await HE.div('display-none active', 'menu_item_0',null,null,false, 'nav.main-menu');
	await HE.div('block menu-item relative', 'menu_item_1',{title:'English'},'Eng',false, 'nav.main-menu');
	await HE.div('block menu-item flag-nl relative', 'menu_item_2',{title:'Dutch/NL'},null, false, 'nav.main-menu');
	await HE.div('block menu-item flag-th relative', 'menu_item_3',{title:'แบบไทย'},false,false, 'nav.main-menu');
}