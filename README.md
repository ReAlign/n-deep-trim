# n-deep-trim

[![NPM version][npm-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/n-deep-trim
[npm-image]: https://img.shields.io/npm/v/n-deep-trim.svg

> deep trim

## Usage

### ES6

```javascript
import deepTrim from 'n-deep-trim';
deepTrim(obj);
```

### UMD

```javascript
// download files
use n-deep-trim/dist/n-deep-trim.js
DeepTrim(obj)
```

```javascript
deepTrim('  a b  c  ');
// 'a b  c'

const obj = {
    zz: ' cv c2f ',
    n: 12,
    a: [
        { b: { c: 3 } }
    ],
    e: {
        f: [
            { g: ' a  lj  ' },
            { g: 'kakaka' },
            '  sd ds  '
        ]
    }
};

deepTrim(obj);
/**
 *
    {
        zz: ' cv c2f ',
        n: 12,
        a: [
            { b: { c: 3 } }
        ],
        e: {
            f: [
                { g: ' a  lj  ' },
                { g: 'kakaka' },
                '  sd ds  '
            ]
        }
    }
 */

const objDate = {
    zz: ' cv c2f ',
    n: 12,
    e: {
        f: [
            { g: ' a  lj  ' },
            new Date()
        ]
    }
};

deepTrim(obj);
/**
 *
    {
        zz: 'cv c2f',
        n: 12,
        e: {
            f: [
                { g: 'a  lj' },
                new Date()
            ]
        }
    }
 */
```
