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
                icon: '\ue558'
            },

            /* { 
                name: 'propositos',
                text: 'Propósitos',
            }, */
            /* { 
                name: 'edades',
                text: 'Edades',
            }, */
            {
                name: 'guias',
                text: 'Guías'
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
                name: 'contratodeposito',
                text: 'Contrato Depósito',
            },
            { 
                name: 'planilladiaria',
                text: 'Planilla Diaria',
            },
            { 
                name: 'registrodiarioantemorten',
                text: 'Registro Diario Antemortem',
            },
            { 
                name: 'sacrificiospendientes',
                text: 'Sacrificios Pendientes',
            },
        ]
    },
];

export default {
    menu
}