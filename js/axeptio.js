function loadHubspot(clientId) {
    var el = document.createElement('script');
    el.setAttribute('id', 'hs-script-loader');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute('async', true);
    el.setAttribute('defer', true);
    el.setAttribute('src', '//js.hs-scripts.com/' + clientId + 'js');
    document.body.append(el);
}

void 0 === window._axcb && (window._axcb = []);
window._axcb.push(function (axeptio) {
    axeptio.on("cookies:complete", function (choices) {
        if (choices.hubspot) {
            loadHubspot(0000000);
        }
    })
});