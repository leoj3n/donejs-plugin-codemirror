import QUnit from 'steal-qunit';
import { ViewModel } from './donejs-plugin-codemirror';

// ViewModel unit tests
QUnit.module('donejs-plugin-codemirror');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the donejs-plugin-codemirror component');
});
