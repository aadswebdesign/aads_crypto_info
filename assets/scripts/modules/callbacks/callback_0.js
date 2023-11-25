/** callbacks/callback_0.js */
import * as FT from './../../factory/functions.js';
import {detailsToggleCss} from './../../factory/handlers.js'; 
export const template_Actions = async (_obj,page_id)=>{
	const obj = _obj;
	const main_elem = await FT.elQuery('main');
	main_elem.classList.add('coin-deco');
	console.log('main_el',main_elem);
	const ftrContent = `
		<div class='block-one relative'>
			<details class='cookie-details relative'>
				<summary class='to-up-caret relative' title='Open'>No Cookies!</summary>
				<div class='details-content en absolute display-flex'>
					<i class='cookie-bg relative' title='Image is from www.svgrepo.com'></i><p class='relative'>Aside of functional cookies, there are no other cookies used!</p>
				</div>
			</details>
		</div>
		<div class='block-two relative'>
			<small class='my-details relative' title='aad&#39;s webdesign'>awd<time><i> &#169; </i></time></small>
		</div>
	`;
	const ftrBlock = await FT.elQuery('.footer-block');
	await FT.setContent(ftrBlock,ftrContent);
	await detailsToggleCss('.cookie-details','block-one','to-up-caret','to-down-caret');
};