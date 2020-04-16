let name='Adam';

//backtick shortcut
console.log(`Hello my dear" ${name}`)

//jQuery part

$('p').html('The <strong>jQuery</strong> part has started')

$('h1').css('background','red')

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

// $('main').append('<p id="first">Added element</p>');
// $('main').append('<p id="second">Added second element</p>');

$('#first').remove();


//buttons

//akkor addolunk uj p taget ha meg nincs legalabb 5
$('#add-button').click(() => {
    if($('main p').length < 5) {
        $('main').append(`<p>Username: ${$('#name').val()}</p>`);
    } else {
        $('main').append('<p class="green">Added a new p tag</p>');
    }
});



let removeFunction = () => {
    $('main p:last-child').remove();
}

$('#remove-button').click(removeFunction);



// Fourth part: loops and conditions

let age = 35;

if (age === 18) {
    console.log('This person can drink')
} else {
    console.log('This is a kid, no alcohol')
}


let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];
colors.push('magenta')

// instead of doing this 5 times:
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'orange');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'yellow');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'purple');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'blue');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'green');

colors.forEach((color) => {
    $('main').append('<div class="box"></div>');
    $('main div:last-child').css('background', color);
});


for(let i=0; i < 100;  i=i+1) {
    console.log('Current number: ' + i);
}

