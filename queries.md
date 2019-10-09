# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
select p.productName, c.categoryName from Products as p join Categories as c on p.categoryID = c.categoryID order by c.categoryID desc;
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select o.orderID, s.shipperName from [Orders] as o join [Shippers] as s on o.shipperID = s.shipperID where o.orderDate<"1997-01-09";
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select p.productName, od.quantity from [OrderDetails] as od join [Products] as p on p.productID = od.productID where od.orderID="10251" order by p.productName asc;
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select o.orderID, c.customerName, e.lastName from [Orders] as o join [Customers] as c on c.customerID = o.customerID join [Employees] as e on e.employeeID = o.employeeID;
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 