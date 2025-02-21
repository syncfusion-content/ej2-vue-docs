define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.employeeData = [
      {
          "EmployeeID": 'Emp1001',
          "Name": "John",
          "MailID": "john@abc.com",
          "PhoneNumber": '(711) 555-4444',
          "Designation": "Sales Representative",
          "Team": "Sales",
          "SoftwareTeam": "Web-General",
          "ReportTo": "Vinet",
          "DateOfJoining": new Date(704692800000),
          "YearOfExperience": "3 Years",
          "Location": "Reims",
          "AssetKit": "Headset, Laptop, Phone",
          "AssetKitDistribution": new Date(704692800000),
          "EmployeeAvailability": "Available"
      },
      {
          "EmployeeID": 'Emp1002',
          "Name": "Suyama",
          "MailID": "suyama@abc.com",
          "PhoneNumber": '(206) 555-1189',
          "Designation": "Marketing Manager",
          "Team": "Marketing",
          "SoftwareTeam": "Web-Server",
          "ReportTo": "Suprd",
          "DateOfJoining": new Date(713764800000),
          "YearOfExperience": "1 Year 10 Months",
          "Location": "Albuquerque",
          "AssetKit": "Laptop, Projector, Tablet",
          "AssetKitDistribution": new Date(713764800000),
          "EmployeeAvailability": "Available"
      },
      {
          "EmployeeID": 'Emp1003',
          "Name": "Janet",
          "MailID": "janet@abc.com",
          "PhoneNumber": '(710) 555-5598',
          "Designation": "HR Specialist",
          "Team": "Human Resources",
          "SoftwareTeam": "Web-General",
          "ReportTo": "Hanar",
          "DateOfJoining": new Date(702104400000),
          "YearOfExperience": "1 Year",
          "Location": "Barquisimeto",
          "AssetKit": "Headset, Laptop, Printer",
          "AssetKitDistribution": new Date(702104400000),
          "EmployeeAvailability": "Not available"
      },
      {
          "EmployeeID": 'Emp1004',
          "Name": "Peacock",
          "MailID": "peacock@abc.com",
          "PhoneNumber": '(811) 555-7773',
          "Designation": "Sales Representative",
          "Team": "Sales",
          "SoftwareTeam": "Window",
          "ReportTo": "Vinet",
          "DateOfJoining": new Date(736401600000),
          "YearOfExperience": "2 Years",
          "Location": "Albuquerque",
          "AssetKit": "Headset, Laptop, Phone",
          "AssetKitDistribution": new Date(736401600000),
          "EmployeeAvailability": "Available"
      },
      {
          "EmployeeID": 'Emp1005',
          "Name": "Leverling",
          "MailID": "leverling@abc.com",
          "PhoneNumber": '(712) 555-4848',
          "Designation": "IT Support",
          "Team": "IT Department",
          "SoftwareTeam": "Web-Server",
          "ReportTo": "Tomsp",
          "DateOfJoining": new Date(750830400000),
          "YearOfExperience": "5 Years 3 Months",
          "Location": "Reims",
          "AssetKit": "Keyboard, Laptop, Mouse",
          "AssetKitDistribution": new Date(750830400000),
          "EmployeeAvailability": "Not available"
      },
      {
          "EmployeeID": 'Emp1006',
          "Name": "Fuller",
          "MailID": "fuller@abc.com",
          "PhoneNumber": '(206) 555-8122',
          "Designation": "HR Specialist",
          "Team": "Human Resources",
          "SoftwareTeam": "Designer",
          "ReportTo": "Victe",
          "DateOfJoining": new Date(750830400000),
          "YearOfExperience": "3 Years 1 Month",
          "Location": "Barquisimeto",
          "AssetKit": "Headset, Laptop, Printer",
          "AssetKitDistribution": new Date(750830400000),
          "EmployeeAvailability": "Available"
      },
      {
          "EmployeeID": 'Emp1007',
          "Name": "Buchanan",
          "MailID": "buchanan@abc.com",
          "PhoneNumber": '(206) 555-3412',
          "Designation": "Marketing Manager",
          "Team": "Marketing",
          "SoftwareTeam": "Support",
          "ReportTo": "Hanar",
          "DateOfJoining": new Date(757486800000),
          "YearOfExperience": "4 Years",
          "Location": "Reims",
          "AssetKit": "Laptop, Projector, Tablet",
          "AssetKitDistribution": new Date(757486800000),
          "EmployeeAvailability": "Not available"
      },
      {
          "EmployeeID": 'Emp1008',
          "Name": "Davolio",
          "MailID": "davolio@abc.com",
          "PhoneNumber": '(206) 555-9482',
          "Designation": "Customer Service",
          "Team": "Customer Support",
          "SoftwareTeam": "Web-Server",
          "ReportTo": "Vinet",
          "DateOfJoining": new Date(762843600000),
          "YearOfExperience": "11 Months",
          "Location": "Albuquerque",
          "AssetKit": "Headset, Laptop, Phone",
          "AssetKitDistribution": new Date(762843600000),
          "EmployeeAvailability": "Not available"
      },
      {
          "EmployeeID": 'Emp1009',
          "Name": "Robert",
          "MailID": "robert@abc.com",
          "PhoneNumber": '(206) 555-9857',
          "Designation": "Finance Analyst",
          "Team": "Finance",
          "SoftwareTeam": "Testing",
          "ReportTo": "Suprd",
          "DateOfJoining": new Date(784875600000),
          "YearOfExperience": "3 Years 5 Months",
          "Location": "Reims",
          "AssetKit": "Calculator, Headset, Laptop",
          "AssetKitDistribution": new Date(784875600000),
          "EmployeeAvailability": "Available"
      }
   ];
  
   exports.employeePerformanceData = [
      {
          EmployeeID: 'Emp1001',
          chartData: [
              { month: 'Jan', performance: 10 },
              { month: 'Feb', performance: 53 },
              { month: 'Mar', performance: 56 },
              { month: 'Apr', performance: 20 },
              { month: 'May', performance: 32 },
              { month: 'Jun', performance: 42 },
              { month: 'Jul', performance: 55 },
              { month: 'Aug', performance: 3 },
              { month: 'Sep', performance: 50 },
              { month: 'Oct', performance: 60 },
              { month: 'Nov', performance: 30 },
              { month: 'Dec', performance: 17 },
          ],
      },
      {
          EmployeeID: 'Emp1002',
          chartData: [
              { month: 'Jan', performance: 54 },
              { month: 'Feb', performance: 55 },
              { month: 'Mar', performance: 66 },
              { month: 'Apr', performance: 62 },
              { month: 'May', performance: 63 },
              { month: 'Jun', performance: 54 },
              { month: 'Jul', performance: 55 },
              { month: 'Aug', performance: 66 },
              { month: 'Sep', performance: 43 },
              { month: 'Oct', performance: 57 },
              { month: 'Nov', performance: 45 },
              { month: 'Dec', performance: 44 },
          ],
      },
      {
          EmployeeID: 'Emp1003',
          chartData: [
              { month: 'Jan', performance: 66 },
              { month: 'Feb', performance: 64 },
              { month: 'Mar', performance: 55 },
              { month: 'Apr', performance: 57 },
              { month: 'May', performance: 53 },
              { month: 'Jun', performance: 64 },
              { month: 'Jul', performance: 62 },
              { month: 'Aug', performance: 65 },
              { month: 'Sep', performance:66 },
              { month: 'Oct', performance: 63 },
              { month: 'Nov', performance: 65 },
              { month: 'Dec', performance: 64 },
          ],
      },
      {
          EmployeeID: 'Emp1004',
          chartData: [
              { month: 'Jan', performance: 64 },
              { month: 'Feb', performance: 64 },
              { month: 'Mar', performance: 54 },
              { month: 'Apr', performance: 42 },
              { month: 'May', performance: 34 },
              { month: 'Jun', performance: 84 },
              { month: 'Jul', performance: 55 },
              { month: 'Aug', performance: 74 },
              { month: 'Sep', performance: 64 },
              { month: 'Oct', performance: 54 },
              { month: 'Nov', performance: 58 },
              { month: 'Dec', performance: 53 },
          ],
      },
      {
          EmployeeID: 'Emp1005',
          chartData: [
              { month: 'Jan', performance: 54 },
              { month: 'Feb', performance: 34 },
              { month: 'Mar', performance: 24 },
              { month: 'Apr', performance: 64 },
              { month: 'May', performance: 74 },
              { month: 'Jun', performance: 44},
              { month: 'Jul', performance: 55 },
              { month: 'Aug', performance: 64 },
              { month: 'Sep', performance: 34 },
              { month: 'Oct', performance: 24 },
              { month: 'Nov', performance: 44 },
              { month: 'Dec', performance: 64 },
          ],
      },
      {
          EmployeeID: 'Emp1006',
          chartData: [
              { month: 'Jan', performance: 47 },
              { month: 'Feb', performance: 57 },
              { month: 'Mar', performance: 37 },
              { month: 'Apr', performance: 67 },
              { month: 'May', performance: 65 },
              { month: 'Jun', performance: 77 },
              { month: 'Jul', performance: 67 },
              { month: 'Aug', performance: 47 },
              { month: 'Sep', performance: 37 },
              { month: 'Oct', performance: 54 },
              { month: 'Nov', performance: 64 },
              { month: 'Dec', performance: 24 },
          ],
      },
      {
          EmployeeID: 'Emp1007',
          chartData: [
              { month: 'Jan', performance: 66 },
              { month: 'Feb', performance: 76 },
              { month: 'Mar', performance: 56 },
              { month: 'Apr', performance: 74 },
              { month: 'May', performance: 66 },
              { month: 'Jun', performance: 33 },
              { month: 'Jul', performance: 53 },
              { month: 'Aug', performance: 73 },
              { month: 'Sep', performance: 83 },
              { month: 'Oct', performance: 63 },
              { month: 'Nov', performance: 53 },
              { month: 'Dec', performance: 45 },
          ],
      },
      {
          EmployeeID: 'Emp1008',
          chartData: [
              { month: 'Jan', performance: 34 },
              { month: 'Feb', performance: 52 },
              { month: 'Mar', performance: 45 },
              { month: 'Apr', performance: 33 },
              { month: 'May', performance: 60 },
              { month: 'Jun', performance: 17 },
              { month: 'Jul', performance: 44 },
              { month: 'Aug', performance: 55 },
              { month: 'Sep', performance: 30 },
              { month: 'Oct', performance: 38 },
              { month: 'Nov', performance: 32 },
              { month: 'Dec', performance: 47 },
          ],
      },
      {
          EmployeeID: 'Emp1009',
          chartData: [
              { month: 'Jan', performance: 5 },
              { month: 'Feb', performance: 56 },
              { month: 'Mar', performance: 67 },
              { month: 'Apr', performance: 44 },
              { month: 'May', performance: 35 },
              { month: 'Jun', performance: 23 },
              { month: 'Jul', performance: 26 },
              { month: 'Aug', performance: 37 },
              { month: 'Sep', performance: 35 },
              { month: 'Oct', performance: 66 },
              { month: 'Nov', performance: 24 },
              { month: 'Dec', performance: 53 },
          ],
      },
  ];
});