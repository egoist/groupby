import test from 'ava';
import groupBy from './';

test('main', t => {
  let array = [
    {
      index: '1',
      name: 'foo'
    },
    {
      index: '1.1',
      name: 'bar'
    },
    {
      index: '2.2',
      name: 'hoo'
    },
    {
      index: '3.1',
      name: 'hia'
    }
  ];
  array = groupBy(array);
  console.log(JSON.stringify(array, null, 2))
  t.pass()
});