import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-plugin-codemirror.less';
import view from './donejs-plugin-codemirror.stache';

import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/addon/edit/matchbrackets.js';

export const ViewModel = DefineMap.extend({
  editor: 'any'
});

export default Component.extend({
  tag: 'donejs-plugin-codemirror',
  ViewModel,
  view,
	events: {
		inserted(el, ev) {
			console.log(el);
			setTimeout(function(){
				this.editor = CodeMirror.fromTextArea(document.getElementById("demotext"), {
					lineNumbers: true,
					mode: "text/html",
					matchBrackets: true
				});
			}, 3000);
		}
	}
});
