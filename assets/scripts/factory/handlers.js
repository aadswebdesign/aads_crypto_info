/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {template_Actions} from './../modules/callbacks/callback_0.js';
export const detailsEventsHandler = async (_details_el, _parent_el,gap_x,gap_y, _log = false)=>{
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
	 *  -> tab-one todo
	 *  -> tab-two todo
	 *  -> tab-three todo
	 *  -> tab-four todo
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
	console.table({'win': win});
	const media = {
		orientation: window.matchMedia("(orientation: portrait)"),
		max342 : window.matchMedia("(max-width: 342px)"),
		min343 : window.matchMedia("(min-width: 343px)")
	};
	
	
	
	if(_details_el){
		let pe;
		if(_parent_el){
			const parent_el = await  FT.elQuery(_parent_el);
			pe = parent_el ? parent_el : null;
		}
		const _elements = await FT.elQuery(_details_el,true, pe);
		_elements.forEach(elem => {
			const details_content = elem.querySelector('div.details-content');
			const details_summary = elem.querySelector('summary');
			const summary = {
				height: details_summary.offsetHeight,
				width: details_summary.offsetWidth
			};
			if(true === _log){
				console.log('elem1:',elem);
				console.log('details_summary1:',details_summary);
				console.log('details_content1:',details_content);
				console.log('summary1:', summary);
			}
			elem.addEventListener('toggle', (event) => {
				const content = {
					height: details_content.offsetHeight,
					width: details_content.offsetWidth
				};
				let down_size,up_size,right_size;
				if(media.orientation.matches && media.max342.matches){
					console.log('portrait,max342');
					up_size = content.height + gap_y + 'px';
					right_size = summary.width + gap_x + 'px';
					switch (true){
						case elem.classList.contains('tab-two'):
							down_size = summary.height + summary.height + gap_y + 7 + 'px';
						break;
						case elem.classList.contains('tab-one'):
							down_size = summary.height + gap_y + 'px';
						break;
					}
				}else{
					console.log('not portrait,max342');
					up_size = content.height + gap_y + 'px';
					down_size = summary.height + gap_y + 'px';
				}
				//todo const left_size = 
				
				if(true === _log){
					console.log('elem2:',elem);
					console.log('details_summary2:',details_summary);
					console.log('details_content2:',details_content);
					console.log('content2:', content);
					console.log('summary2:', summary);
				}
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
					//todo testing 1
					case elem.classList.contains(opens.right):
						details_content.style.left = right_size;
						if(elem.open){
							details_summary.classList.add(caret.left);
							details_summary.classList.remove(caret.right);
							details_summary.title = 'Close';
						}else{
							details_summary.classList.remove(caret.left);
							details_summary.classList.add(caret.right);
							details_summary.title = 'Open';
						}			
					break;
					//todo testing 2
					case elem.classList.contains(opens.up_right):
						details_content.style.top = '-' + up_size;
						details_content.style.left = right_size;
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
					case elem.classList.contains(opens.down):
						//details_content.style.top = down_size;
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
					//todo testing 3
					case elem.classList.contains(opens.left):
						//todo details_content.style.right = - left_size;
						console.log('todo open-left');
						if(elem.open){
							details_summary.classList.add(caret.right);
							details_summary.classList.remove(caret.left);
							details_summary.title = 'Close';
						}else{
							details_summary.classList.remove(caret.right);
							details_summary.classList.add(caret.left);
							details_summary.title = 'Open';
						}			
					break;
				}
			});
		});

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