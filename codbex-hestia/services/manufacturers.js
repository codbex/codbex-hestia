const viewData = {
    id: "codbex-hestia-manufacturers",
    label: "Manufacturers",
    lazyLoad: true,
    link: "/services/web/codbex-partners/gen/ui/Manufacturers/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}