import QUnit from 'steal-qunit';
import plugin from './donejs-plugin-codemirror';

QUnit.module('donejs-plugin-codemirror');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-plugin-codemirror plugin');
});
