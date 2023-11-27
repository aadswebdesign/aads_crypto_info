/** assets/scrips/factory/functions.js */
import * as HE from './../htmlManager/htmlElements.js';
export const addAttributes = async (_elem,_attributes,_parent = null) =>{
	const object = new Map([['attributes',_attributes]]);
	const atts = object.get('attributes');
	let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem);
		}else{
			el = document.querySelector(_elem);
		}
		if(null !== atts){
			for (const [key, value] of Object.entries(atts)){
				const modified_key = key.replace('data_', 'data-');
				el.setAttribute(modified_key,value);
			}
		}
	}
	return await el;
};
export const addClass = async (_elem,_class,_parent = null)=>{
	let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem);
		}else{
			el = document.querySelector(_elem);
		}
		if(!el.classList.contains(_class)){
			el.classList.add(_class);
		}
	}
	return await el;
};
export const detailsContentBoxHelper = async (details_el)=>{
	/** todo add more options and x, y arguments
	 * determined classes
	 * opened from details/summary container
	 * -> open-up, open-right, open-down, open-left, open-custom
	 * moved from details/summary container
	 * -> move-up, move-right, move-down, move-left, move-custom
	 * content container
	 * -> details-content
	 *
	 *
	 */
	const opens = {
		up: 'open-up',
		right: 'open-right',
		down: 'open-down',
		left: 'open-left',
		up_right: 'open-up-right'
	};
	if(details_el){
		const details_content = await elQuery('div.details-content',false,details_el);
		const details_summary = await elQuery('summary',false,details_el);
		const summary = {
			height: details_summary.offsetHeight,
			width: details_summary.offsetWidth
		};
		details_el.addEventListener('toggle',(event)=>{
			const content = {
				height: details_content.offsetHeight,
				width: details_content.offsetWidth
			};
			const right_size = summary.width + 5 + 'px';
			const up_size = content.height + 5 + 'px';

			console.log('details_content:',details_content);
			console.log('details_summary:',details_summary);
			console.table({'content': content, 'summary': summary});
			switch (true){
				case details_el.classList.contains(opens.up):
					details_content.style.top = '-' + up_size;
					console.log('open-up');
				break;
				case details_el.classList.contains(opens.right):
					details_content.style.left = right_size;
				break;
				case details_el.classList.contains(opens.up_right):
					details_content.style.top = '-' + up_size;
					details_content.style.left = right_size;
					console.log('open-up-right');
				break;
				case details_el.classList.contains(opens.down):
				console.log('todo open-down');
				break;
				case details_el.classList.contains(opens.left):
				console.log('todo open-left');
			}
		});
	}
};


export const detailsContentSizesToVar = async (detail_el,content_el,content_width=false,content_height=false,log=false) =>{
	if(detail_el){
		detail_el.addEventListener('toggle',(event)=>{
			if(true === content_width){
				content_el.style.setProperty('--content-width', content_el.offsetWidth + 'px');
			}
			if(true === content_height){
				content_el.style.setProperty('--content-height', content_el.offsetHeight + 'px');
			}
			if(true === log){
				console.log('content_el w: ',content_el.offsetWidth);
				console.log('content_el h: ',content_el.offsetHeight);
			}
		});
		if(true === log){
			console.log('detail_el: ',detail_el);
			console.log('content_el: ',content_el);
			console.log('content_width: ',content_width);
			console.log('content_height: ',content_height);
		}
		return await detail_el;
	}
};
export const domEraser = async (_parent) =>{
	let wrap;
	if(_parent){
		wrap = document.querySelector(_parent);
		if(null !== wrap){
			while(wrap.firstChild) wrap.removeChild(wrap.firstChild);
		}
	}
	return await wrap;
};
export async function drawElTimer(el_box) {
    const timerBox = el_box.querySelector(".timer");
    const totalSeconds = el_box.dataset.totalViewTime / 1000;
    const sec = Math.floor(totalSeconds % 60);
    const min = Math.floor(totalSeconds / 60);
    timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
export const elFind = async (_elem,_parent,_all = false,_log= false) =>{//todo testen
	let _el;
	if(true === _all){
		if(_parent) _el = _parent.querySelectorAll(_elem);
		else _el = document.querySelectorAll(_elem);
	}else{
		if(_parent) _el = _parent.querySelector(_elem);
		else _el = document.querySelector(_elem);
	}
	if(true === _log){
		console.log('element(s) found: ',_el);
	}
	return await _el;
};
export async function elQuery(_element,_all = false,_parent){
    let _el;
	if(true === _all){
		if(_parent) _el = _parent.querySelectorAll(_element);
    	else _el = document.querySelectorAll(_element);
	}else{
		if(_parent) _el = _parent.querySelector(_element);
		else _el = document.querySelector(_element);
	}
    return await _el;
}
export const getContent = async (_elem,_parent) =>{
	let _el;
	if(null !== _elem){
		if(_parent) _el = _parent.querySelector(_elem);
		else _el = document.querySelector(_elem);
	}
	return await _el.innerHTML;
};
export const getDate = async ()=>{
	const date = new Date();
	return await console.log('date',date);
};
export const getIcon = async (_class,_icon)=>{
    let i = 0;
    if(_class){
        const _elem =  await elQuery(_class,true);
        for(const el of _elem){
            if(_icon){
                _icon(el,false,`_${++i}`);
                //console.log(`el_${el.className}:`,el);
            }
        }
    }
};
export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}
export const getParent = (_elem,_log = false)=>{
	let el,parent_node;
	if(null !== _elem){
		el = document.querySelector(_elem);
		parent_node = el.parentNode;
	}
	if(true === _log){
		console.log('parent_node1 = ',parent_node);
	}
};
export const getStyleSheet = (href_link,lazy_loading = 'lazy') =>{
	if(href_link){
		const elem = document.createElement('link')
		elem.href = href_link
		elem.rel = 'stylesheet'
		elem.setAttribute('loading',lazy_loading)
		return elem 
	}
	return;
}//added, lazy loading is an experiment
export const getYear = async ()=> {
	const date = new Date();
	const year = date.getFullYear();
	return year;
};
export const lorem_ipsum = async ()=>{
	return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	<span class='dots'>...</span><span class='more display-none'>
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</span></p>`;
};
export async function percentage(partialValue, totalValue) {
   return await Math.round((partialValue / totalValue) * 100);
} //todo. make use of the % operator
export const removeClass = async (_elem,_class,_parent = null)=>{
	let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem);
		}else{
			el = document.querySelector(_elem);
		}
		if(el.classList.contains(_class)){
			el.classList.remove(_class);
		}
	}
	return await el;
};
export const replaceClass = async (_elem,_remove_class,_add_class,_parent = null)=>{
		let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem);
		}else{
			el = document.querySelector(_elem);
		}
		if(_remove_class && _add_class){
			el.classList.replace(_remove_class,_add_class);
		}
	}
	return await el;
};
export const setContent = async function (_elem,_str, add_str = false, _query = false, _timeout = false, log = false) { //, _query
    let _html;
    if(_elem){
		_html = _elem;
		if(true === _timeout){
			setTimeout(()=>{
				if(true === _query){
					if(true === add_str) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
					} 
					else {
						_html = document.querySelector(_elem);
						_html.innerHTML = _str;
					};
					if(true === log){
						console.log({'html 1a':_html});
					}
				}else{
					if(add_str === true) {
						_html = _elem;
						_html.innerHTML += _str;
					} 
					else {
						_html = _elem;
						_html.innerHTML = _str;
					}; 
					
				}
			},100);
		}else{
			if(true === _query){
				if(true === add_str) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
				} 
				else {
						_html = document.querySelector(_elem);
						if(_html){
							_html.innerHTML = _str;
						}
				}; 
				if(true === log){
					console.log({'html 2a':_html});
				}
			}else{
				if(true === add_str) {
					_html = _elem;
					_html.innerHTML += _str;
				} 
				else {
					_html = _elem;
					_html.innerHTML = _str;
				}; 
			}
		}
    }
    return await _html;
};
export const setDate = async ()=>{//target
	const date = new Date();
	const year = date.getFullYear();
	return year;
};
export const setStyle = async (elem,_attr,value, log = false)=>{
	//todo create more attributes options
	let _elem = elem;
	if(_elem){
		switch(_attr){
			case 'background':
				_elem.style.background = value;
			break;
			case 'backgroundAttachment':
				_elem.style.backgroundAttachment = value;
			break;
			case 'backgroundColor':
				_elem.style.backgroundColor = value;
			break;
			case 'backgroundImage':
				_elem.style.backgroundImage = value;
			break;
			case 'border':
				_elem.style.border = value;
			break;
			case 'borderBottom':
				_elem.style.borderBottom = value;
			break;
			case 'borderLeft':
				_elem.style.borderLeft = value;
			break;
			case 'borderRadius':
				_elem.style.borderRadius = value;
			break;
			case 'borderRight':
				_elem.style.borderRight = value;
			break;
			case 'borderTop':
				_elem.style.borderTop = value;
			break;
			case 'color':
				_elem.style.color = value;
			break;
			case 'content':
				_elem.style.content = value;
			break;
			case 'direction':
				_elem.style.direction = value;
			break;
			case 'height':
				_elem.style.height = value;
			break;
			case 'font':
				_elem.style.font = value;
			break;
			case 'fontSize':
				_elem.style.fontSize = value;
			break;
			case 'textAlign':
				_elem.style.textAlign = value;
			break;
			case 'width':
				_elem.style.width = value;
			break;
			//case '':
				//_elem.style. = value;
			//break;
		}
	}
	if(true === log){
		console.log('element style:', _elem);
	}
	return _elem;
};
export const toggleClass = async (_elem,_class,_parent = null)=>{
	let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem);
		}else{
			el = document.querySelector(_elem);
		}
		el.classList.toggle(_class);
	}
	return await el;
};
export async function updateElTimer(el_box) {
    const lastStarted = el_box.dataset.lastViewStarted;
    const currentTime = performance.now();
    if (lastStarted) {
        const diff = currentTime - lastStarted;
        el_box.dataset.totalViewTime = parseFloat(el_box.dataset.totalViewTime) + diff;
    }
    el_box.dataset.lastViewStarted = currentTime;
}
export const userAgentSniffer = async (log = false)=>{
	const browser = await elQuery('body');
	if(browser){
		browser.setAttribute('data-useragent',  navigator.userAgent);
		browser.setAttribute('data-platform', navigator.platform );
		browser.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
	}
	if(true === log){
		console.log('browser is:',browser);
	}
	return await browser;
};
export const userAgentString = async (_display = false)=>{
		const platform = navigator.platform;
		const agent = navigator.userAgent;
		const _string = `<ul class='relative'>
			<li class='relative'>platform: ${platform}</li>
			<li class='relative'>user-agent: ${agent}</li>
		</ul>`;
		let display;
		if(true === _display){
			display = 'display-block';
		}else{
			display = 'display-none';
		}
		await HE.div(`agent-string ${display} fixed`, 'userAgentString',null,_string,true, 'body');
};
