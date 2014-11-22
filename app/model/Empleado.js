Ext.define("CursoExtJS.model.Empleado", {
    extend : "Ext.data.Model",

    fields: ['nombre', 'apellidos', {name :'dni', type : "number"}],
    proxy : {
        type: 'rest',
        url : "data/empleados.json",
        reader : {
            type: "json",
            rootProperty: "data"

        }
    }
});