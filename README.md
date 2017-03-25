# donejs-plugin-codemirror

[![Build Status](https://travis-ci.org/leoj3n/donejs-plugin-codemirror.png?branch=master)](https://travis-ci.org/leoj3n/donejs-plugin-codemirror)

In-browser code editor components for your DoneJS app Edit

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
