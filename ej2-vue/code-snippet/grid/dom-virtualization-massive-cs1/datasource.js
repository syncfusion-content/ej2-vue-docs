define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    
    const customerNames = ["VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI", "HILAA", "ERNSH"];
    const cities = ["Reims", "Münster", "Rio de Janeiro", "Lyon", "Charleroi", "Bern", "Genève", "Marseille", "Tsawassen", "Campinas"];
    const countries = ["France", "Germany", "Brazil", "France", "Belgium", "Switzerland", "Switzerland", "France", "Canada", "Brazil"];
    
    exports.generateLargeData = function (count) {
        const data = [];
        for (let i = 0; i < count; i++) {
            const cityIndex = i % cities.length;
            data.push({
                OrderID: 10248 + i,
                CustomerID: customerNames[i % customerNames.length],
                OrderDate: new Date(1996, 0, 1 + (i % 365)),
                Freight: (Math.random() * 100).toFixed(2),
                ShipCity: cities[cityIndex],
                ShipCountry: countries[cityIndex]
            });
        }
        return data;
    };
});
