function copy_svg_attributes(){
    document.querySelectorAll('svg:not(#icons)').forEach(e => {
        let master  = e.querySelector('use').getAttribute('href');
        let viewbox = document.querySelector(master).getAttribute('viewBox');

        e.setAttribute('data-ref', master);
        e.setAttribute('viewBox', viewbox);
        e.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    });
};

copy_svg_attributes();