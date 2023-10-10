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
            },
            { 
                name: 'planilladiaria',
                text: 'Planilla Diaria',
            },
            { 
                name: 'sacrificiospendientes',
                text: 'Sacrificios Pendientes',
            },
        ]
    },
    {
        text: 'Ante-Mortem',
        icon: '\ue873',
        routes: [
            { 
                name: 'inspeccionantemortem',
                text: 'Inspección Antemortem',
            },
            { 
                name: 'registrohembrasparidas',
                text: 'Registro Hembras Paridas',
            },
            { 
                name: 'animalessospechosos',
                text: 'Animales Sospechosos',
            },
            { 
                name: 'ingresobobinosemergencia',
                text: 'Ingreso Bobinos Emergencia',
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