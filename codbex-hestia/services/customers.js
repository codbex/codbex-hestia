const viewData = {
    id: "codbex-hestia-customers",
    label: "Customers",
    lazyLoad: true,
    link: "/services/web/codbex-partners/gen/ui/Customers/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}