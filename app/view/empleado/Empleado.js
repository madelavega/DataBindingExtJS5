Ext.define('CursoExtJS.view.empleado.Empleado', {
    extend  : 'Ext.container.Container',
    requires: ['CursoExtJS.view.empleado.ListaEmpleados'],

    xtype: 'empleado',

    controller: 'empleados',
    viewModel : {
        type: 'empleado'
    },
    layout    : {
        type: 'border'
    },

    items: [
        {
            xtype    : 'listaempleados',
            reference: 'listaempleados',
            region   : 'west',
            width    : 550,
            title    : 'Empleados',
            split    : true,
            listeners: {
                render: "listRendered"
            }
        },
        {
            region     : 'center',
            title      : 'Detalle Empleado',
            bind       : {
                title: 'Detalle Empleado {empleados.nombre} {empleados.apellidos}'
            },
            xtype      : 'form',
            defaultType: 'textfield',
            items      : [
                {
                    fieldLabel: 'Nombre',
                    bind      : '{empleados.nombre}'
                },
                {
                    fieldLabel: 'Apellidos',
                    bind      : '{empleados.apellidos}'
                },
                {
                    fieldLabel: 'DNI',
                    bind      : '{empleados.dni}'
                }
            ]
        }
    ]
});
