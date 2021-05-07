const clipboardy = require('clipboardy');

let str = clipboardy.readSync()
let [_, x1, y1, x2, y2, colors] = /findColor\(\{(\d*), (\d*), (\d*), (\d*)\}, \r\n"(\S+)",/.exec(str);
let region = [parseInt(x1), parseInt(y1), parseInt(x2) - parseInt(x1), parseInt(y2) - parseInt(y1)];
colors = colors.split(',').map(c => {
    let [x, y, color] = c.split('|');
    return [parseInt(x), parseInt(y), color.replace('0x', '#')];
});
let first = colors.shift()[2];
let result = {
    region: region,
    desc: '',
    first: first,
    colors: colors
};
console.log(',\n"": ' + JSON.stringify(result));