define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pivotNullData = [
        { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
        { Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
        { Amount: 300, Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
        { Amount: 150, Country: "Canada", Product: "Bike", Quantity: 3, State: "Manitoba" },
        { Amount: 200, Country: "Canada", Date: "FY 2006", Quantity: 4, State: "Ontario" },
        { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", State: "Quebec" },
        { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2 },
        { Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
        { Amount: 300, Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
        { Amount: 150, Country: "France", Product: "Van", Quantity: 2, State: "Gers" },
        { Amount: 200, Country: "Germany", Date: "FY 2006", Quantity: 3, State: "Bayern" },
        { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", State: "Brandenburg" },
        { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4 },
        { Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
        { Amount: 150, Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
        { Amount: 100, Country: "Germany", Product: "Bike", Quantity: 2, State: "Saarland" },
        { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Quantity: 5 },
        { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", State: "Alabama" },
        { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4 },
        { Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
        { Amount: 150, Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
        { Amount: 200, Country: "United States", Product: "Bike", Quantity: 4, State: "New York" },
        { Amount: 250, Country: "United States", Date: "FY 2008", Quantity: 3, State: "North Carolina" },
        { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", State: "South Carolina" }
    ];
});
