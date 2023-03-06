define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pivot_flatdata = [
        { Amount: 2100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 22, State: "Alberta" },
        { Amount: 1100, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 32, State: "Alberta" },
        { Amount: 3100, Country: "Canada", Date: "FY 2005", Product: "Van", Quantity: 22, State: "Alberta" },
        { Amount: 1600, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 32, State: "Alberta" },
        { Amount: 1500, Country: "Canada", Date: "FY 2008", Product: "Van", Quantity: 28, State: "Alberta" },
        { Amount: 1060, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 26, State: "Alberta" },
        { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
        { Amount: 1900, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
        { Amount: 1000, Country: "Canada", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
        { Amount: 3100, Country: "Canada", Date: "FY 2006", Product: "Bike", Quantity: 40, State: "Quebec" },
        { Amount: 1500, Country: "Canada", Date: "FY 2007", Product: "Bike", Quantity: 14, State: "Quebec" },
        { Amount: 2000, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 82, State: "Quebec" },
        { Amount: 4800, Country: "France", Date: "FY 2005", Product: "Car", Quantity: 49, State: "Charente-Maritime" },
        { Amount: 8200, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 38, State: "Charente-Maritime" },
        { Amount: 8100, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 93, State: "Charente-Maritime" },
        { Amount: 9100, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 64, State: "Charente-Maritime" },
        { Amount: 2350, Country: "France", Date: "FY 2006", Product: "Bike", Quantity: 46, State: "Essonne" },
        { Amount: 7250, Country: "France", Date: "FY 2005", Product: "Van", Quantity: 43, State: "Gers" },
        { Amount: 9450, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 49, State: "Gers" },
        { Amount: 1450, Country: "France", Date: "FY 2008", Product: "Bike", Quantity: 49, State: "Gers" },
        { Amount: 1450, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 49, State: "Gers" },
        { Amount: 4250, Country: "France", Date: "FY 2007", Product: "Van", Quantity: 49, State: "Gers" },
        { Amount: 4050, Country: "France", Date: "FY 2007", Product: "Bike", Quantity: 59, State: "Gers" },
        { Amount: 4350, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 23, State: "Gers" },
        { Amount: 4950, Country: "France", Date: "FY 2008", Product: "Car", Quantity: 45, State: "Gers" },
        { Amount: 3400, Country: "Germany", Date: "FY 2005", Product: "Van", Quantity: 78, State: "Bayern" },
        { Amount: 8400, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 90, State: "Bayern" },
        { Amount: 9400, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 45, State: "Bayern" },
        { Amount: 7200, Country: "Germany", Date: "FY 2008", Product: "Van", Quantity: 92, State: "Bayern" },
        { Amount: 3400, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 24, State: "Bayern" },
        { Amount: 5330, Country: "Germany", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Hamburg" },
        { Amount: 5900, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 20, State: "Saarland" },
        { Amount: 5800, Country: "Germany", Date: "FY 2006", Product: "Bike", Quantity: 58, State: "Saarland" },
        { Amount: 5700, Country: "Germany", Date: "FY 2006", Product: "Car", Quantity: 39, State: "Saarland" },
        { Amount: 8500, Country: "Germany", Date: "FY 2007", Product: "Bike", Quantity: 62, State: "Saarland" },
        { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 49, State: "Saarland" },
        { Amount: 5200, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 48, State: "Saarland" },
        { Amount: 1040, Country: "United Kingdom", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "England" },
        { Amount: 1450, Country: "United Kingdom", Date: "FY 2005", Product: "Car", Quantity: 42, State: "England" },
        { Amount: 5150, Country: "United Kingdom", Date: "FY 2005", Product: "Van", Quantity: 53, State: "England" },
        { Amount: 1500, Country: "United Kingdom", Date: "FY 2006", Product: "Bike", Quantity: 24, State: "England" },
        { Amount: 7430, Country: "United Kingdom", Date: "FY 2006", Product: "Car", Quantity: 56, State: "England" },
        { Amount: 4720, Country: "United Kingdom", Date: "FY 2006", Product: "Van", Quantity: 50, State: "England" },
        { Amount: 3480, Country: "United Kingdom", Date: "FY 2007", Product: "Bike", Quantity: 45, State: "England" },
        { Amount: 3380, Country: "United Kingdom", Date: "FY 2007", Product: "Car", Quantity: 75, State: "England" },
        { Amount: 5820, Country: "United Kingdom", Date: "FY 2007", Product: "Van", Quantity: 39, State: "England" },
        { Amount: 2820, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 39, State: "England" },
        { Amount: 4820, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 72, State: "England" },
        { Amount: 1520, Country: "United Kingdom", Date: "FY 2008", Product: "Car", Quantity: 93, State: "England" },
        { Amount: 1450, Country: "United Kingdom", Date: "FY 2008", Product: "Van", Quantity: 84, State: "England" },
        { Amount: 4930, Country: "United States", Date: "FY 2006", Product: "Van", Quantity: 59, State: "Alabama" },
        { Amount: 6250, Country: "United States", Date: "FY 2008", Product: "Bike", Quantity: 94, State: "Alabama" },
        { Amount: 1520, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 53, State: "North Carolina" },
        { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Van", Quantity: 61, State: "North Carolina" },
        { Amount: 3200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 47, State: "South Carolina" },
        { Amount: 3320, Country: "United States", Date: "FY 2005", Product: "Car", Quantity: 49, State: "South Carolina" },
        { Amount: 6300, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 45, State: "South Carolina" },
        { Amount: 4300, Country: "United States", Date: "FY 2006", Product: "Car", Quantity: 94, State: "South Carolina" },
        { Amount: 7200, Country: "United States", Date: "FY 2007", Product: "Bike", Quantity: 40, State: "South Carolina" },
        { Amount: 3900, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 43, State: "South Carolina" },
    ];
});