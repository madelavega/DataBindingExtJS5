Ext.define('CursoExtJS.view.empleado.ListaEmpleados', {
    extend   : 'Ext.grid.Panel',
    xtype    : 'listaempleados',
    store     : "CursoExtJS.store.Empleados",
    columns  : [
        {
            header   : 'Nombre',
            dataIndex: 'nombre'
        },
        {
            header   : 'Apellidos',
            flex     : 1,
            dataIndex: 'apellidos'
        },
        {
            header   : 'DNI',
            dataIndex: 'dni'
        }
    ],
    listeners: {
        itemclick: "empleadoSelected"
    }
});
