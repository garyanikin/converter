import Converter from './converter';

Converter(fs.readFileSync('input.html', 'utf8'), function (beutify) {
    fs.writeFile('output.html', beutify, 'utf-8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Output saved');
    });
});