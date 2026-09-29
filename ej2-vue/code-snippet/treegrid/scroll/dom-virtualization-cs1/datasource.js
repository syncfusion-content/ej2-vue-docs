define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.domVirtualizationData = [];
    function domVirtualizationDataSource() {
        if (exports.domVirtualizationData.length > 0) {
            return;
        }
        // Use the complete arrays from your C# file
        var warehouseNames = ["Chicago Central Fulfillment Center",
            "Dallas South Distribution Center",
            "Newark East Coast Hub",
            "Atlanta Regional Warehouse",
            "Reno West Fulfillment Center",
            "Seattle Pacific Hub",
            "Columbus Midwest Distribution Center",
            "Denver Mountain Warehouse",
            "Phoenix Desert Logistics Center",
            "Portland Northwest Terminal",
            "Memphis River Valley Depot",
            "Salt Lake City Intermountain Hub",
            "Richmond Mid-Atlantic Warehouse",
            "Kansas City Central Plains Center",
            "Nashville Southeast Logistics",
            "Detroit Great Lakes Facility",
            "Houston Gulf Coast Terminal",
            "Charlotte Southern Hub",
            "Omaha Heartland Distribution",
            "Tampa Bay Southeast Depot",
            "Milwaukee North Central Warehouse",
            "Louisville Derby City Logistics",
            "San Antonio Alamo Distribution",
            "Indianapolis Crossroads Hub",
            "Oakland Bay Area Terminal",
            "Raleigh Research Triangle Depot",
            "Orlando Sunshine Warehouse",
            "Hartford Northeast Logistics"];
        var warehouseRegions = [
            'United States', 'Canada', 'United Kingdom', 'France',
            'Australia', 'Japan', 'Germany', 'Singapore',
            'Brazil', 'Netherlands', 'South Korea', 'Switzerland',
            'Sweden', 'Italy', 'Spain', 'India'
        ];
        var categories = ["Consumer Electronics", "Home and Kitchen", "Office Supplies", "Travel Accessories",
            "Fitness Equipment", "Audio and Entertainment", "Pet Supplies", "Automotive Accessories",
            "Health and Personal Care", "Garden and Outdoor", "Baby and Kids", "Smart Home",
            "Kitchen Appliances", "Sports Gear", "Storage and Organization"];
        var suppliers = ["Northstar Imports", "Blue Ridge Manufacturing", "Evergreen Consumer Goods",
            "Summit Products", "Harbor Wholesale", "Pacific Rim Trading",
            "Arrowhead Distributors", "Crestline Supply Co.", "Westbridge Logistics",
            "Oakwood Merchandising", "Redwood Partners", "Silver Creek Enterprises",
            "Ironclad Industrial", "Clearview Procurement", "Stonebridge Exports"];
        var demandProfiles = [
            'High Volume',
            'Steady',
            'Seasonal',
            'Low Volume',
            'Peak Season Only',
            'Evergreen',
            'Rapid Growth',
            'Declining',
            'New Product Launch',
            'Promotional Only'
        ];
        var countryCities = {
            'United States': ['New York', 'Chicago', 'Dallas', 'Newark', 'Atlanta', 'Reno', 'Seattle', 'Columbus', 'Denver', 'Phoenix', 'Portland', 'Memphis', 'Salt Lake City', 'Richmond', 'Kansas City', 'Nashville', 'Detroit', 'Houston', 'Charlotte', 'Omaha', 'Tampa', 'Milwaukee', 'Louisville', 'San Antonio', 'Indianapolis', 'Oakland', 'Raleigh', 'Orlando', 'Hartford'],
            'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax'],
            'United Kingdom': ['London', 'Birmingham', 'Manchester', 'Liverpool', 'Leeds', 'Glasgow', 'Edinburgh', 'Bristol'],
            'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes'],
            'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
            'Japan': ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya'],
            'Germany': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
            'Singapore': ['Singapore Central', 'Woodlands', 'Tampines', 'Jurong East'],
            'Brazil': ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador'],
            'Netherlands': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'],
            'South Korea': ['Seoul', 'Busan', 'Incheon', 'Daegu'],
            'Switzerland': ['Zurich', 'Geneva', 'Basel', 'Lausanne'],
            'Sweden': ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala'],
            'Italy': ['Rome', 'Milan', 'Naples', 'Turin'],
            'Spain': ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
            'India': ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai']
        };
        var recordId = 10000;
        for (var warehouseIndex = 1; warehouseIndex <= 25000; warehouseIndex++) {
            var warehouseId = ++recordId;
            var regionIndex = (warehouseIndex - 1) % warehouseRegions.length;
            var childRecords = [];
            var warehouseQuantity = 0;
            var warehouseReserved = 0;
            var warehouseAvailable = 0;
            var warehouseInventoryValue = 0;
            var availableCount = 0;
            var lowStockCount = 0;
            var outOfStockCount = 0;
            var discontinuedCount = 0;
            for (var itemIndex = 1; itemIndex <= 3; itemIndex++) {
                var itemId = ++recordId;
                var region = warehouseRegions[regionIndex];
                var cities = countryCities[region];
                var childRegion = cities[(warehouseIndex + itemIndex) % cities.length];
                var childItemName = childRegion + ' Facility';
                var categoryIndex = (warehouseIndex + itemIndex) % categories.length;
                var supplierIndex = (warehouseIndex + itemIndex) % suppliers.length;
                var monthlyUnitsSold = 200 + ((warehouseIndex * (itemIndex + 9)) % 2500);
                var unitPrice = 15 + ((warehouseIndex * itemIndex * 13) % 250);
                var quantity = 100 + ((warehouseIndex * itemIndex * 29) % 3000);
                var reservedQuantity = 0;
                var availableQuantity = 0;
                var reorderLevel = 0;
                var stockStatus = '';
                var statusSeed = (warehouseIndex + itemIndex) % 20;
                if (statusSeed === 0) {
                    stockStatus = 'Out of Stock';
                    quantity = 0;
                    reservedQuantity = 0;
                    availableQuantity = 0;
                    reorderLevel = 100;
                    outOfStockCount++;
                }
                else if (statusSeed <= 3) {
                    stockStatus = 'Low Stock';
                    availableQuantity =
                        Math.max(10, Math.floor(quantity * 0.10));
                    reservedQuantity =
                        quantity - availableQuantity;
                    reorderLevel =
                        availableQuantity + 150;
                    lowStockCount++;
                }
                else if (statusSeed === 4) {
                    stockStatus = 'Discontinued';
                    availableQuantity =
                        Math.floor(quantity * 0.30);
                    reservedQuantity = 0;
                    reorderLevel = 0;
                    discontinuedCount++;
                }
                else {
                    stockStatus = 'Available';
                    reservedQuantity =
                        Math.floor(quantity * 0.15);
                    availableQuantity =
                        quantity - reservedQuantity;
                    reorderLevel =
                        Math.floor(quantity * 0.25);
                    availableCount++;
                }
                warehouseQuantity += quantity;
                warehouseReserved += reservedQuantity;
                warehouseAvailable += availableQuantity;
                warehouseInventoryValue += quantity * unitPrice;
                childRecords.push({
                    ItemID: itemId,
                    ParentItemID: warehouseId,
                    ItemName: childItemName,
                    ItemType: 'Product',
                    SKU: 'SKU-' +
                        ('00000' + warehouseIndex).slice(-5) +
                        '-' +
                        ('00' + itemIndex).slice(-2),
                    Category: categories[categoryIndex],
                    Region: childRegion,
                    Country: region,
                    Supplier: suppliers[supplierIndex],
                    StockStatus: stockStatus,
                    Quantity: quantity,
                    ReservedQuantity: reservedQuantity,
                    AvailableQuantity: availableQuantity,
                    ReorderLevel: reorderLevel,
                    UnitPrice: unitPrice,
                    InventoryValue: quantity * unitPrice,
                    DailyOrders: Math.ceil(monthlyUnitsSold / 30),
                    MonthlyUnitsSold: monthlyUnitsSold,
                    FulfillmentRate: 93 + ((warehouseIndex + itemIndex) % 7),
                    DemandProfile: demandProfiles[(warehouseIndex + itemIndex) %
                        demandProfiles.length],
                    LastRestocked: new Date(2025, ((warehouseIndex + itemIndex) % 12), ((warehouseIndex + itemIndex * 2) % 27) + 1),
                    NextDeliveryDate: new Date(2025, ((warehouseIndex + itemIndex + 1) % 12), ((warehouseIndex + itemIndex * 4) % 27) + 1)
                });
            }
            var warehouseStatus = 'Available';
            if (discontinuedCount === childRecords.length) {
                warehouseStatus = 'Discontinued';
            }
            else if (outOfStockCount === childRecords.length) {
                warehouseStatus = 'Out of Stock';
            }
            else if (lowStockCount > 0 ||
                outOfStockCount > 0) {
                warehouseStatus = 'Low Stock';
            }
            exports.domVirtualizationData.push({
                ItemID: warehouseId,
                ParentItemID: null,
                ItemName: warehouseNames[regionIndex] +
                    ' ' +
                    (Math.floor((warehouseIndex - 1) /
                        warehouseNames.length) + 1),
                ItemType: 'Warehouse',
                Category: 'Multi-category inventory',
                Region: warehouseRegions[regionIndex],
                Country: warehouseRegions[regionIndex],
                Supplier: 'Regional supplier network',
                StockStatus: warehouseStatus,
                Quantity: warehouseQuantity,
                ReservedQuantity: warehouseReserved,
                AvailableQuantity: warehouseAvailable,
                ReorderLevel: Math.floor(warehouseQuantity * 0.20),
                UnitPrice: null,
                InventoryValue: warehouseInventoryValue,
                DailyOrders: 500 + ((warehouseIndex * 23) % 2500),
                MonthlyUnitsSold: 15000 + ((warehouseIndex * 97) % 55000),
                FulfillmentRate: 95 + ((warehouseIndex % 10) / 10),
                DemandProfile: demandProfiles[warehouseIndex %
                    demandProfiles.length],
                StorageCapacity: warehouseQuantity +
                    Math.floor(warehouseQuantity * 0.25),
                LastRestocked: new Date(2025, ((warehouseIndex + 2) % 12), ((warehouseIndex * 3) % 27) + 1)
            });
            exports.domVirtualizationData.push.apply(exports.domVirtualizationData, childRecords);
        }
    }
    exports.domVirtualizationDataSource = domVirtualizationDataSource;
});
