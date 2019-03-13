import cheerio from 'cheerio';
import pretty from 'pretty';

console.log(window);

const Converter = function (input, output) {
    // Читаем input.html
    const $ = cheerio.load(input, {decodeEntities: false});

// Удаляем лишние элементы
    $('.cnt').eq(0).remove();
    $('.cnt').eq(0).remove();
    $('.h0').remove();
    $('#tab-parts').remove();

// Заменяем features
    const features = $('#features');
    let features_formated = `<div class="content__features row">`;
    features.find('.event-feature').each(function () {
        const icon = $(this).find('i').attr('class');
        $(this).find('i').remove();

        const title = $(this).find('b').html('class');
        $(this).find('b').remove();

        const text = $(this).html().replace('<p>', '').replace('</p>', '').trim();

        features_formated += `<div class="feature col-md-4">
<div class="feature__icon">
<div class="${icon}"></div>
</div>
<div class="feature__title">${title}</div>
<div class="feature__text">${text}</div>
</div>`;
    })

    $('#features').replaceWith(`${features_formated}</div>`);

    $('h2').eq(0).replaceWith(`<div class="content__title">${$('h2').eq(0).html()}</div>`);

// Заменяем h2
    $('h2').each(function () {
        $(this).replaceWith(`<div class="content__linked-title">${$(this).html()}</div>`);
    });

// Фиксим таблицу
    const tables = $('table.table-responsive');
    tables.each(function () {
        $(this).removeClass('table-responsive');
        $(this).replaceWith(`<div class="table-responsive">${$.html(this)}</div>`);
    })

// Carousel

// Links liderlife -> localhost

//beautifier
    const beutify = pretty($('body .info').html());

// Сохраняем результат
    output(beutify);
}

//For web
window.Converter = Converter;

// For node
// Converter(fs.readFileSync('input.html', 'utf8'), function (beutify) {
//     fs.writeFile('output.html', beutify, 'utf-8', function (err) {
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log('Output saved');
//     });
// });