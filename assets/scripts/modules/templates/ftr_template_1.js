/** templates/ftr_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function ftrTemplateOne(){
	const template = `
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
	return await template;
}