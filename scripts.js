let name='Adam';

//backtick shortcut
console.log(`Hello my dear" ${name}`)

//jQuery part
$('p').html('The <strong>jQuery</strong> part has started')

$('h1').css('background','red')

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p id="first">Added element</p>');
$('main').append('<p id="second">Added second element</p>');

$('#first').remove();

$('#add-button').click(() => {
    $('main').append('<p>Added a new p tag</p>');
});



let removeFunction = () => {
    $('main p:last-child').remove();
}

$('#remove-button').click(removeFunction);