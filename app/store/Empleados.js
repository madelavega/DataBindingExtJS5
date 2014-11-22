Ext.define("CursoExtJS.store.Empleados", {
    extend : "Ext.data.Store",
    model : "CursoExtJS.model.Empleado",

    proxy : {
        type: 'rest',
        url : "data/empleados.json",
        reader : {
            type: "json",
            rootProperty: "data"

        }
    }
})