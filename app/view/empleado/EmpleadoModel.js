Ext.define('CursoExtJS.view.empleado.EmpleadoModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.empleado',

    formulas: {
        empleados: {
            bind: {
                record: '{listaempleados.selection}'
            },
            get : function (data) {
                return data.record;
            }
        }
    }
});