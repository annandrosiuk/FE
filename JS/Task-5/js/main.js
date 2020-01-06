window.addEventListener('load', function () {
    //side menu
    let elements = [
        ["#", "Default"],
        ["#stripes", "Stripes"],
        ["#notepad", "Notepad"],
        ["#gardenof3den", "Garden of CSS-3Den"],
        ["#bbubles", "Bbubles"],
        ["#swiss", "Swiss"],
        ["#turnaround", "Turn around"],
        ["#whirl", "Whirl"],
        ["#bundler_inspired", "BundlerInspired"],
        ["#oldie", "Oldie"],
        ["#typhon", "Typhon"],
        ["#cube", "Cube"],
        ["#northern-lights", "Northern Lights"],
        ["#skewed", "Skewed"],
        ["#moonlight", "Moonlight"],
        ["#typewriter", "Typewriter"],
        ["#oldschool", "Old School"],
        ["#butchery", "Butchery"],
        ["#m6tt", "m6tt"],
        ["#1024-bytes", "1024-bytes"],
        ["#molokai", "Molokai"],
        ["#android", "Android"],
        ["#bookshelf", "Bookshelf"],
        ["#geocities", "GeoCities"],
        ["#imbatman", "I'm Batman"],
        ["#ebhoren", "Ebhoren"],
        ["#facetime", "Facetime"],
        ["#", "..."],
        ["#", "I hope"]
    ];

    let authors = [
        ["http://twitter.com/jacobrask", "Jacob Rask"],
        ["http://vasilis.nl", "Vasilis van Gemert"],
        ["http://twitter.com/eworm_", "Wout Mager"],
        ["http://designfestival.com", "Alex Walker"],
        ["http://cssing.org.ua", "akella &amp; Genn"],
        ["http://chrsl.net", "Chris Lee"],
        ["http://www.basvandorst.nl", "Bas van Dorst"],
        ["https://twitter.com/iamvdo", "Vincent De Oliveira"],
        ["https://github.com/PhilG", "PhilG"],
        ["http://pointlessone.org", "Alexander Mankuta"],
        ["http://eswat.ca", "ESWAT"],
        ["http://be.net/iurevych", "Sergii Iurevych"],
        ["http://potapoff.org", "Igor «SkAZi» Potapov"],
        ["http://twitter.com/sntxrrr", "Paul Steffens"],
        ["http://twitter.com/derSchepp", 'Christian "Schepp" Schaefer'],
        ["http://thisbythem.com", "Lance Alton Troxel"],
        ["http://romanliutikov.com", "Roman Liutikov"],
        ["http://vibby.fr", "Vibby"],
        ["http://m6tt.com", "Matt Woodfield"],
        ["http://github.com/faisalman", "Faisalman"],
        ["http://designtomarkup.com", "Kien Nguyen"],
        ["http://agat.in", "Aleksej Romanovskij"],
        ["https://github.com/SelenIT", "SelenIT"],
        ["https://github.com/asavartsov/", "Alexey Savartsov"],
        ["#", "Paul Reid"],
        ["http://www.dominic-mercier.com", "Dominic Mercier"],
        ["http://twitter.com/bnijenhuis", "Bernard Nijenhuis"],
        ["#", "..."],
        ["#", "this will be enough"]
    ];

    let body = document.querySelector('body'),
        header = createEl('header', body),
        h1 = createEl('h1', header, 'CSS1K'),
        nav = createEl('nav', header),
        h2 = createEl('h2', nav, ' Select a design'),
        ul = createEl('ul', nav);

    let fragment = new DocumentFragment();

    elements.forEach(function () {
        for (let i = 0; i < elements.length; i++) {
            let li = createEl('li', ul);
            let a1 = createEl('a', li);
            let a2 = createEl('a', li);

            a1.href = elements[i][0];
            a1.textContent = elements[i][1];

            a2.href = authors[i][0];
            a2.textContent = authors[i][1];
        }
    })
    ul.appendChild(fragment);

    //main
    let article = createEl('article', body),
        headerAr = createEl('header', article),
        h2Ar = createEl('h2', headerAr, 'The Beauty in CSS Design'),
        abbrH2 = createEl('abbr', h2Ar, 'CSS');
    appendText(' Design', h2);
    article.setAttribute('role', 'main');

    let p = createEl('p', headerAr, 'A demonstration of what can be accomplished with only 1'),
        abbrP = createEl('abbr', p, 'K');

    abbrP.title = 'Kibibyte';
    appendText(' (', p);
    let dfn = createEl('dfn', p, 'Kibibyte');
    dfn.title = '1024 bytes';
    appendText(') of ', p);
    abbr = createEl('abbr', p, 'CSS');
    appendText('. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.', p);

    //section one
    let section = createEl('section', article);
    createEl('h2', section, 'So What is This About?');
    p = createEl('p', section, "Back in 2003 (that's ");
    let span = createEl('span', p, 'a lot of');
    span.id = 'zengarden-age';
    appendText(' years ago!) ', p);
    a = createEl('a', p, 'Dave Shea');
    a.href = 'http://mezzoblue.com';
    appendText(' launched the ', p);
    a = createEl('a', p);
    a.href = 'http://www.csszengarden.com';
    let cite = createEl('cite', a);
    createEl('abbr', cite, 'CSS');
    appendText(' Zen Garden', cite);
    appendText('. It showcased what was possible with ', p);
    p.appendChild(abbr);
    appendText('-based designs, leading to an explosion in the use of CSS on the web. Then, ', p);
    a = createEl('a', p, 'Peter van der Zee');
    a.href = 'http://qfox.nl';
    appendText(' created ', p);
    a = createEl('a', p, 'JS1k');
    a.href = 'http://js1k.com';
    appendText(' in 2010, a competition to build cool applications with no more than 1 ', p);
    createEl('abbr', p, 'K');
    appendText(' of JavaScript.', p);
    p = createEl('p', section, 'A lot has happened since the Zen Garden days, and today you can do almost anything with only ');
    createEl('abbr', p, 'CSS');
    appendText('. As ', p);
    p.appendChild(abbr);
    appendText(' use is growing, so is the average ', p);
    p.appendChild(abbr);
    appendText(' file size. Popular sites have in average ', p);
    a = createEl('a', p, '75 ');
    a.href = 'http://httparchive.org/interesting.php#bytesperpage';
    createEl('abbr', a, 'K');
    appendText(' of ', a);
    abbr = createEl('abbr', a, 'CSS');
    appendText(', but some use up to a megabyte of style sheets!', p);
    p = createEl('p', section, 'Do we need that much? ');
    createEl('b', p, 'CSS1K');
    appendText(' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.', p);

    //section two
    section = createEl('section', article);
    createEl('h2', section, 'Participation');
    let ol = createEl('ol', section);
    let li = createEl('li', ol, 'Submissions must consist of only ');
    createEl('abbr', li, 'CSS');
    li = createEl('li', ol, 'Submissions may be up to 1 ');
    abbr = createEl('abbr', li, 'K');
    abbr.title = 'Kibibyte';
    appendText(' (1024 bytes) minified', li);
    li = createEl('li', ol, 'Vendor prefixes are ');
    let em = createEl('em', li, 'not');
    appendText(' counted to the total number of bytes – submit your code unprefixed and ', li);
    a = createEl('a', li, 'PrefixFree');
    a.href = 'https://leaverou.github.io/prefixfree/';
    appendText(' will add necesssary prefixes', li);
    li = createEl('li', ol, 'Any external resources and images, including ');
    createEl('code', li, 'data');
    createEl('abbr', li, 'URI');
    appendText("'s, ", li);
    createEl('code', li, '@font-face');
    appendText(' and ', li);
    createEl('code', li, '@import');
    appendText("'s, are forbidden", li);
    li = createEl('li', ol, 'The page ');
    a = createEl('a', li, 'does not');
    a.href = 'http://dowebsitesneedtolookexactlythesameineverybrowser.com';
    appendText(' have to look the same in every browser, but graceful degradation is encouraged', li);
    li = createEl('li', ol, 'The submitted code is licensed under the ');
    a = createEl('a', li, 'MIT License');
    a.href = 'http://www.opensource.org/licenses/mit-license.php';

    p = createEl('p', section, 'To participate, fork ');
    a = createEl('a', p, 'CSS1K');
    a.href = 'https://github.com/selfthinker/CSS1K/';
    appendText(' at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).', p);

    //footer
    let footer = createEl('footer', document.body);
    p = createEl('p', footer, 'Licensed under the ');
    a = createEl('a', p, 'MIT license');
    a.href = 'http://www.opensource.org/licenses/mit-license.php';
    appendText('. Hosted and managed at ', p);
    a = createEl('a', p, 'GitHub');
    a.href = 'https://github.com/selfthinker/CSS1K';
    appendText('.', p);


    function createEl(element, parent, text) {
        const el = document.createElement(element);
        parent.appendChild(el);
        if (text != null)
            el.appendChild(document.createTextNode(text));
        return el;
    }

    function appendText(element, el) {
        el.appendChild(document.createTextNode(element));
    }
});