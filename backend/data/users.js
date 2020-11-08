const bcrypt = require("bcryptjs");

const users = [
	{
		name: "Admin 1",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Adam Black",
		email: "adam@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Eve White",
		email: "eve@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

module.exports = users;
