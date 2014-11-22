Ext.define('CursoExtJS.view.empleado.EmpleadosController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.empleados',

    empleadoSelected : function (empleadosList, empleado) {
        debugger
    },

    listRendered: function (listaEmpleado) {
        listaEmpleado.getStore().load();
    }
});
