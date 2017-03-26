# donejs-plugin-codemirror

[![Build Status](https://travis-ci.org/leoj3n/donejs-plugin-codemirror.png?branch=master)](https://travis-ci.org/leoj3n/donejs-plugin-codemirror)

In-browser code editor components for your DoneJS app Edit
---

# How To: Integrate Third Party Packages into a DoneJS Plugin

Before you start, make sure you have the latest DoneJS:

```
npm install -g donejs@alpha
```

## First step:

Create an empty directory:

```
mkdir donejs-plugin-example && cd donejs-plugin-example
```

## Second step:

Generate a DoneJS plugin:

```
donejs add plugin donejs-plugin-testing && cd donejs-plugin-testing
```

## Third step:

Install some random third-party npm dependency that you want to use:

```
npm install --save codemirror
```

## Fourth step:

Add missing DoneJS dependencies:

```
npm i --save canjs/can-component#master canjs/can-define#master
```

Add missing DoneJS devDependencies:

```
npm i --save-dev stealjs/steal-less#master canjs/steal-stache#master
```

Add in `package.json`:

```json
  "steal": {
    ...
    "plugins": [
      "steal-less",
      "steal-stache"
    ]
  },
```

## Fifth step:

Generate component with same name as plugin:

```
donejs add component donejs-plugin-testing
```

Answer `Y` to all questions about overwriting.

## Sixth step:

Edit `src/donejs-plugin-testing.stache`:

```html
<textarea>var thing = 'thing';</textarea>
```

Edit `src/donejs-plugin-codemirror.less`:

```less
donejs-plugin-codemirror {
	display: block;
}

.CodeMirror { height: auto; border: 1px solid #ddd; }
```

Edit `src/donejs-plugin-codemirror.js`:

```
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-plugin-codemirror.less';
import view from './donejs-plugin-codemirror.stache';

import 'codemirror/lib/codemirror.css';
import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/matchbrackets';

export const ViewModel = DefineMap.extend({
  editor: 'any'
});

export default Component.extend({
  tag: 'donejs-plugin-codemirror',
  ViewModel,
  view,
	events: {
		inserted(el, ev) {
			this.editor = CodeMirror.fromTextArea(el.childNodes[0], {
				lineNumbers: true,
				mode: "javascript",
				matchBrackets: true
			});
		}
	}
});
```

## Eighth step:

Add in `package.json`:

```
  "steal": {
    ...
		"meta": {
			"codemirror": {
				"format": "global",
				"exports": "CodeMirror"
			}
		}
  },
```

## Finally

Run:

```
donejs develop
```

Now, visit <http://localhost:8080/src/donejs-plugin-codemirror.html>.

---

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'donejs-plugin-codemirror';
```

### CommonJS use

Use `require` to load `donejs-plugin-codemirror` and everything else
needed to create a template that uses `donejs-plugin-codemirror`:

```js
var plugin = require("donejs-plugin-codemirror");
```

## AMD use

Configure the `can` and `jquery` paths and the `donejs-plugin-codemirror` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'donejs-plugin-codemirror',
		    	location: 'node_modules/donejs-plugin-codemirror/dist/amd',
		    	main: 'lib/donejs-plugin-codemirror'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/donejs-plugin-codemirror/dist/global/donejs-plugin-codemirror.js'></script>
```
