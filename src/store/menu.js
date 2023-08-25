const menu = [
    {
        text: 'Configuración',
        icon: '\ue8b8',
        routes: [
            { 
                name: 'personas',
                text: 'Personas',
            },
            { 
                name: 'usuarios',
                text: 'Usuarios',
            },
            { 
                name: 'expendios',
                text: 'Expendios',
            },
            {
                name: 'guias',
                text: 'Guías'
            },
            { 
                name: 'rutas',
                text: 'Rutas',
            },
            { 
                name: 'vehiculos',
                text: 'Vehiculos',
            },
            { 
                name: 'matrices',
                text: 'Matrices',
            },
        ]
    }, 
    {
        text: 'Recepción',
        icon: '\ue873',
        routes: [
            { 
                name: 'codigoformato',
                text: 'Código Formato',
                icon: '\ue873'
            },
            { 
                name: 'planilladiaria',
                text: 'Planilla Diaria',
            },
            // { 
            //     name: 'registrodiarioantemorten',
            //     text: 'Registro Diario Antemortem',
            // },
            { 
                name: 'sacrificiospendientes',
                text: 'Sacrificios Pendientes',
            },
        ]
    },
    {
        text: 'Verificación P.M ',
        icon: '\ue873',
        routes: [
            { 
                name: 'rutadiaria',
                text: 'Ruta Diaria',
            },
            { 
                name: 'planillaordenbeneficio',
                text: 'Planilla Diaria Orden Beneficio',
            },
            { 
                name: 'inspeccionpostmortem',
                text: 'Inspección Post Mortem',
            },
            { 
                name: 'toleranciacerovisceras',
                text: 'Tolerancia Cero Visceras',
            },
            { 
                name: 'inspeccioncerotolerancia',
                text: 'Inspección Cero Tolerancia',
            },
            { 
                name: 'acondicionamientodelacanal',
                text: 'Acondicionamiento De La Canal',
            },
            { 
                name: 'despachovisceras',
                text: 'Despacho Visceras',
            },
            { 
                name: 'comparaciondecomisos',
                text: 'Comparación Decomisos',
            },
            

            
        ]
    }
];

export default {
    menu
}