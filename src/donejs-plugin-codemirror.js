import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-plugin-codemirror.less';
import view from './donejs-plugin-codemirror.stache';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/matchbrackets';

export const ViewModel = DefineMap.extend({
  editor: 'any',
	body: {
		type: 'string',
		set: function (newval) {
			console.log('GOODBYE', newval);
			this.editor.setValue(newval);
			return newval;
		}
	}
});

export default Component.extend({
  tag: 'donejs-plugin-codemirror',
  ViewModel,
  view,
	events: {
		inserted(el) {
			if(System.isPlatform("window")) {
				this.viewModel.editor = CodeMirror.fromTextArea(el.childNodes[0], {
					lineNumbers: true,
					mode: "javascript",
					matchBrackets: true,
					theme: "blackboard"
				});
			}
		}
	}
});
