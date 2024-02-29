const viewData = {
    id: "codbex-hestia-sales-orders",
    label: "Sales Orders",
    lazyLoad: true,
    link: "/services/web/codbex-orders/gen/ui/SalesOrder/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}