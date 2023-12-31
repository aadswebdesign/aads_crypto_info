/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {template_Actions} from './../modules/callbacks/callback_0.js';
export const detailsEventsHandler = async (_details_el, _parent_el,gap_x, gap_y, _log = false)=>{
	/** 
	 * todo:
	 *	-> add more options
	 *	-> add gap_x, gap_y arguments
	 *	
	 * determined classes:
	 * 	-> open-up, open-right, open-down, open-left, open-up-right todo more options
	 * 	-> details-content
	 *  -> to-up-caret
	 *  -> to-right-caret
	 *  -> to-down-caret
	 *  -> to-left-caret todo
	 *  -> tab-one
	 *  -> tab-two
	 *  -> tab-three todo
	 *  -> tab-four todo
	 *  -> section.top
	 */
	const caret = {
		up: 'to-up-caret',
		right: 'to-right-caret',
		down: 'to-down-caret',
		left: 'to-left-caret'
	} 
	const opens = {
		up: 'open-up',
		right: 'open-right',
		down: 'open-down',
		left: 'open-left',
		up_right: 'open-up-right'
	};
	if(true === _log){
		console.table({'opens': opens});
		//console.log(':',);
	}
	const win = {
		height: window.innerHeight,
		width: window.innerWidth
	};
	if(_details_el){
		let pe;
		if(_parent_el){
			const parent_el = await  FT.elQuery(_parent_el);
			pe = parent_el ? parent_el : null;
		}
		const parent_dim ={
			height: pe.offsetHeight,
			width: pe.offsetWidth
		};
		const _elements = await FT.elQuery(_details_el,true, pe);
		for (const elem of _elements){
			const details_content = await FT.elQuery('div.details-content',false,elem);
			const details_summary = await FT.elQuery('summary',false,elem);
			const summary_dim = {
				height: details_summary.offsetHeight,
				width: details_summary.offsetWidth
			};
			if(true === _log){
				console.log('elem1: ', elem);
				console.log('details_content: ', details_content);
				console.log('details_summary: ', details_summary);
				console.log('summary_dim:', summary_dim);
			}
			elem.addEventListener('toggle', (event) => {
				const content_dim = {
					height: details_content.offsetHeight,
					width: details_content.offsetWidth
				};
				const up_size = content_dim.height + gap_y + 'px';
				const down_size = parent_dim.height + gap_y + 'px';
				switch (true){
					case elem.classList.contains(opens.up):
						details_content.style.top = '-' + up_size;
						if(elem.open){
							details_summary.classList.add(caret.down);
							details_summary.classList.remove(caret.up);
							details_summary.title = 'Close';
						}else{
							details_summary.classList.remove(caret.down);
							details_summary.classList.add(caret.up);
							details_summary.title = 'Open';
						}			
					break;
					case elem.classList.contains(opens.right):
					//todo
					break;
					case elem.classList.contains(opens.up_right):
					//todo
					break;
					case elem.classList.contains(opens.down):
						details_content.style.top = down_size;
						if(elem.open){
							details_summary.classList.add(caret.up);
							details_summary.classList.remove(caret.down);
							details_summary.title = 'Close';
						}else{
							details_summary.classList.remove(caret.up);
							details_summary.classList.add(caret.down);
							details_summary.title = 'Open';
						}
					break;
					case elem.classList.contains(opens.left):
					//todo
					break;
				}
				if(true === _log){
					console.log('content_dim: ', content_dim);
				}
			});
		}
	}
};
export const detailsTabsHandler = async (_details_el, _parent_el, _log = false)=>{
	if(_details_el){
		let pe;
		if(_parent_el){
			const parent_el = await  FT.elQuery(_parent_el);
			pe = parent_el ? parent_el : null;
		}
		const _elements = await FT.elQuery(_details_el,true, pe);
		_elements.forEach((targetDetail) => {
			targetDetail.addEventListener("click", () => {
				_elements.forEach(tab => {
					if (tab !== targetDetail) {
						tab.removeAttribute("open");
					}				
				});			
			});		
		});
	}
}; 
export const detailsContentHandler = async (_details_el,_parent_el, pos_y,_log=false)=>{
	const main_block = await FT.elQuery('main');
	if(_details_el){
		let pe;
		if(_parent_el){
			const parent_el = await  FT.elQuery(_parent_el);
			pe = parent_el ? parent_el : null;
		}		
		const children = await FT.elQuery(_details_el,true, pe);
		for (const child of children){
			const details_spacer = await FT.elQuery('div.details-spacer',false, child);          
			child.addEventListener('toggle', (event)=>{
				const child_dims = {
					width: child.offsetWidth,
					height: child.offsetHeight
				};
				const main_block_dims ={
					width: main_block.offsetWidth,
					height: main_block.offsetHeight
						
				}
				const content_el = child.querySelector('div.details-content', false, child); 
				const content_el_dims = {
					width: content_el.offsetWidth,
					height: content_el.offsetHeight
				};
				// horizontal position
				const details_spacer_width = details_spacer.offsetWidth;
				const main_block_plus = main_block_dims.width - content_el_dims.width;
				const to_left_sub = main_block_plus / 2;			
				const to_left = main_block_dims.width - details_spacer_width;
				content_el.style.left = '-' + to_left + 'px' ?? 0;
				content_el.style.transform = "translate(" + to_left_sub + "px,0)";
				// vertical height
				content_el.style.maxHeight = main_block_dims.height + pos_y + 'px' ?? 0;
				if(true === _log){
					console.table({
						'child_dims:': child_dims,
						'main_block_dims:' : main_block_dims,
						'content_el_dims:' : content_el_dims
					});
					console.log('to_left_sub:',to_left_sub);
					console.log('to_left:',to_left);
					console.log('content_el:',content_el);
					//console.log(':',);
				}
			});
		}
	}
};
export async function pagingHandler(_object_args,__hashes = [..._hashes],__data=[..._data],_log = false){
	const object_args = new Map([['objects',_object_args]]) 
	const obj= object_args.get('objects');
	const target_class = await FT.elQuery(obj.target_class);
	const page = await FT.elQuery(obj.page);
	const block = obj.blocks;
	const ftr_block = await FT.elQuery(block.footer); 
	const hdr_block = await FT.elQuery(block.header); 
	const tab_block = await FT.elQuery(block.page_tabs); 
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(_log === true){
		console.log({target_class});
		console.log({page});
		console.log({ftr_block});
		console.log({hdr_block});
		console.table(hashes);
		console.table(data);
	}
	let selected_tab;
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, target_class);
		if(currentTab){
			if(_log === true){
				console.log({currentTab});
				console.time(currentTab);
				console.timeLog(currentTab);
				console.timeEnd(currentTab);
			}
			if (currentTab.id !== pageId) currentTab.classList.remove("active");
			const selectedTab = await FT.getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await FT.setContent(page, entry.content);
			await FT.setContent(ftr_block, entry.ftr_content);
			await FT.setContent(hdr_block, entry.hdr_content);
			await FT.setContent(tab_block, entry.tab_content);
			await entry.callback({...obj},pageId);
		}
	};
	if(target_class){
		target_class.addEventListener('click', function(event){
			if(true === _log){
				console.log(event.target.id);
			}
			if (!event.target.id){
				return;
			}
			update(event.target.id);
		});	
	}
	const pageId = hashes.get(window.location.hash);
	if (pageId){
		await update(pageId);
	}else{
		await template_Actions({...obj},pageId);
	}
}
export async function resizeHandler(_resize_args,_resize_data,_resize_entries,_resize_data_after,log = false){
	const observer = async ()=>{
		if(window.ResizeObserver) {
			const resize_args = new Map(_resize_args);
			if(_resize_data){
				_resize_data(resize_args,log);
			}
			const divElem = resize_args.get('div_elem');
			const checkboxElem = resize_args.get('cb_elem'); 
			const resizeObserver = new ResizeObserver((entries)=>{
				for (const entry of entries) {
					if(_resize_entries){
						_resize_entries(resize_args,entry,log);
					}
					if(true === log){
						console.log('Size changed');
					}
				}
			});
			if(_resize_data_after){
				_resize_data_after(resizeObserver,resize_args,log);
			}
		}else{
			console.log('Resize observer not supported!');
		}
	};
	await observer();
}	