let watch = new MutationObserver(observe);
// alert("TEST");

function step(nodes) {
    for(let i = 0; i < nodes.length; i++) {
        step(nodes[i].childNodes);
        // console.log(nodes[i]);
        if(nodes[i].nodeType === 3 && !nodes[i].isContentEditable) {
            nodes[i].nodeValue = replace(nodes[i].nodeValue);
        }
    }
}

function replace(value) {
    //No one can spell millennials so lets fix that
    value = value.replace(/\b(M|m)illenials\b/g, "$1illennials")
    value = value.replace(/\b(M|m)illenials\b/g, "$1illennials")

    value = value.replace(/\b(Millennials)\b/g, "Kids these days");
    value = value.replace(/\b(millennials)\b/g, "kids these days");

    value = value.replace(/\b(Millennial (A|a)dult)\b/g, "Spoiled brat");
    value = value.replace(/\b(millennial (A|a)dult)\b/g, "Spoiled brat");
    
    return value;
}

function walk() {
    step(document.body.childNodes);

    document.title = replace(document.title);
}

function observe(mutations) {
    
}

walk();