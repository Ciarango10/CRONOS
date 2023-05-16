$('#brazil').kendoExpansionPanel({
    title: 'Brazil',
    subTitle: 'Sur América',
    expanded: true
});

$('#chile').kendoExpansionPanel({
    title: 'Chile',
    subTitle: 'Sur América'
});

$('#colombia').kendoExpansionPanel({
    title: 'Colombia',
    subTitle: 'Sur América'
});

$('#ecuador').kendoExpansionPanel({
    title: 'Ecuador',
    subTitle: 'Sur América'
});

$('#guyana').kendoExpansionPanel({
    title: 'Guyana',
    subTitle: 'Sur América'
});

function onExpand() {
    console.log("Expandir");
};

function onCollapse() {
    console.log("Colapsar");
};

function onComplete() {
    console.log("Completar");
};

$('#brazil2').kendoExpansionPanel({
    title: 'Brazil',
    subTitle: 'Sur América',
    expanded: true,
    collapse: onCollapse,
    complete: onComplete,
    expand: onExpand
})