'use strict';

const _ = {
    typeOf(o) {
        return o == null
                ? String(o)
                : ({}).toString.call(o).slice(8, -1).toLowerCase();
    },
    perform2ObjectOrArray(obj = {}) {
        Object.keys(obj).forEach((k) => {
            const type = _.typeOf(obj[k]);

            if(type === 'object' || type === 'array') {
                _.deepTrim(obj[k]);
            } else if(type === 'string') {
                obj[k] = _.perform2String(obj[k]);
            }
        });
    },
    perform2String(str = '') {
        return str.trim();
    },
    deepTrim(obj = '') {
        const type = _.typeOf(obj);

        if(type === 'object' || type === 'array') {
            _.perform2ObjectOrArray(obj);
        } else if(type === 'string') {
            obj = _.perform2String(obj);
        }

        return obj;
    }
};

export default _.deepTrim;