const deepTrim = require('./../src/index');

const obj = {
    zz: ' cv c2f ',
    n: 12,
    a: [
        {
            b: {
                c: 3
            }
        }
    ],
    e: {
        f: [
            {
                g: ' a  lj  '
            },
            {
                g: 'kakaka'
            },
            '  sd ds  '
        ]
    }
};

const objTrimed = {
    zz: 'cv c2f',
    n: 12,
    a: [
        {
            b: {
                c: 3
            }
        }
    ],
    e: {
        f: [
            {
                g: 'a  lj'
            },
            {
                g: 'kakaka'
            },
            'sd ds'
        ]
    }
};

test('deepTrim', function() {
    expect(deepTrim(obj)).toEqual(objTrimed);
});

const str = '  a bc ';
const strTrimed = 'a bc';

test('deepTrimString', function() {
    expect(deepTrim(str)).toEqual(strTrimed);
});

const objDate = {
    zz: ' cv c2f ',
    n: 12,
    e: {
        f: [
            {
                g: ' a  lj  '
            },
            new Date()
        ]
    }
};

const objDateTrimed = {
    zz: 'cv c2f',
    n: 12,
    e: {
        f: [
            {
                g: 'a  lj'
            },
            new Date()
        ]
    }
};

test('deepTrimString', function() {
    expect(deepTrim(objDate)).toEqual(objDateTrimed);
});