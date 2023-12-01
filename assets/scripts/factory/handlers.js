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
export const detailsSizesHandler = async (_child_el,_parent_el,_grant_el,gap_x, gap_y,_log=false) =>{//
	/** todo
	 * require elements and classes
	 * header
	 * .top-block
	 *
	 *
	 */
	const win_dims = {
		height: window.innerHeight,
		width: window.innerWidth
	};
	const media = {
		orientation: window.matchMedia("(orientation: portrait)"),
		max360 : window.matchMedia("(max-width: 360px)"),
		min343 : window.matchMedia("(min-width: 343px)")
	};
	if(_log === true){
		console.table({
			'win_dims:': win_dims,
			'media': media
		});
	}
	if(_child_el){
		let pe;
		if(_parent_el){
			const parent_el = await  FT.elQuery(_parent_el);
			pe = parent_el ? parent_el : null;
		}
		const children = await FT.elQuery(_child_el,true, pe); 
		const footer_block = await FT.elQuery('footer.footer-block');
		const ftr_block_height = footer_block.offsetHeight;	
		const grant = await FT.elQuery(_grant_el);  
		const top_elem = {
			hdr: await FT.elQuery('header',false, grant),
			block: await FT.elQuery('.top-block',false, grant)
		};
		const hdr_dims = {
			height: top_elem.hdr.offsetHeight,
			width: top_elem.hdr.offsetWidth
		};
		const block_dims = {
			height: top_elem.block.offsetHeight,
			width: top_elem.block.offsetWidth
		};
		const grant_dims = {
			height: grant.offsetHeight,
			width: grant.offsetWidth
		};
		const parent_dims = {
			height: pe.offsetHeight,
			width: pe.offsetWidth
		};
		if(_log === true){
			console.log('parent_el: ', pe);
			console.log('grant_el: ', grant);
			console.table({
				'hdr_dims': hdr_dims,
				'block_dims': block_dims,
				'parent_dims': parent_dims
			});
		}
		const ft_detail = await FT.elQuery('.block-one details', false,footer_block);	
		for (const child_el of children){
			const contents = {
				top_el: await FT.elQuery('div.details-content',false,child_el),
				ftr_el: await FT.elQuery('div.details-content',false, ft_detail)
			};
			const summaries ={
				top_el: await FT.elQuery('summary',false,child_el),
				ftr_el: await FT.elQuery('summary',false, ft_detail)
			};
			const top_summary_dims = {
				height: summaries.top_el.offsetHeight,
				width: summaries.top_el.offsetWidth
			};
			const ftr_summary_dims = {
				height: summaries.ftr_el.offsetHeight,
				width: summaries.ftr_el.offsetWidth
			};
			if(_log === true){
				console.table({
					'top_summary_dims': top_summary_dims,
					'ftr_summary_dims': ftr_summary_dims
				});
				console.log('child_el: ',child_el);
				console.log('ft_detail: ',ft_detail);
			}
			child_el.addEventListener('toggle', (event)=>{
				if(event.target.open){
					const top_content_dims = {
						height: contents.top_el.offsetHeight,
						width: contents.top_el.offsetWidth
					};
					const ftr_content_dims = {
						height: contents.ftr_el.offsetHeight ?? 0,
						width: contents.ftr_el.offsetWidth
					};
					const ftr_height = footer_block.offsetHeight;
					const height_set1 = grant_dims.height + ftr_height + ftr_height + ftr_height;
					const height_set2 = win_dims.height - height_set1;
					const width_set1 = win_dims.width + 300;
					if(_log === true){
						console.table({
							'top_content_dims':top_content_dims,
							'ftr_content_dims':ftr_content_dims
						});
					}
					if(media.orientation.matches && media.max360.matches){
						contents.top_el.style.maxHeight = height_set2 + 'px';
						contents.top_el.style.maxWidth = 300 + 'px';
						if(child_el.classList.contains('tab-one')){
							const to_left = parent_dims.width - top_content_dims.width;
							contents.top_el.style.left = '-' + to_left - 60 + 'px';
						}
					}else{
						const el_height_sum = top_content_dims.height + grant_dims.height;
						if(el_height_sum > win_dims.height){
							contents.top_el.style.height = win_dims.height - grant_dims.height - ftr_height - ftr_height - ftr_height + 'px';
						}
						if(top_content_dims.width > parent_dims.width){
							contents.top_el.style.width = parent_dims.width - 50 + 'px';
						}
					}
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
			if(true !== _log){
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