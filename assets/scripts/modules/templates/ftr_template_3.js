/** templates/ftr_template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Thai
 */
export async function ftrTemplateThree(){
	const template = `
		<div class='block-one relative'>
			<details class='cookie-details open-up relative'>
				<summary class='to-up-caret relative' title='Open'>ไม่มีคุกกี้!</summary>
				<div class='details-content th absolute display-flex'>
					<i class='cookie-bg relative' title='ภาพมาจาก www.svgrepo.com'></i><p>นอกเหนือจากคุกกี้ที่ใช้งานได้แล้ว ไม่มีการใช้คุกกี้อื่นๆ!</p>
				</div>
			</details>
		</div>
		<div class='block-two relative'>
			<small class='my-details relative' title='aad&#39;s webdesign'>awd<time><i> &#169; </i></time></small>
		</div>
	`;
	return await template;
}