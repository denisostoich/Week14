module.exports = class Page {

    open (path) {
        return browser.url(`http://localhost:4000/${path}`)
    }
}
