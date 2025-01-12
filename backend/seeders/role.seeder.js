const db = require("../models");

const Role = db.role;

/* creation basic roles */
module.exports = {
    createRoles: async () => {
        await Role.create({
            id: 1,
            name: "translator",
            role_translator: true,
            role_data_scientist: false
        });
    
        await Role.create({
            id: 2,
            name: "data scientist",
            role_translator: false,
            role_data_scientist: true
        });
    
        await Role.create({
            id: 3,
            name: "admin",
            role_translator: true,
            role_data_scientist: true
        });
    }
}