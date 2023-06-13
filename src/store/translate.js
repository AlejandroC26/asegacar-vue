let translations = {
    // USERS
    fullname: "Nombres",
    document: "Documento",
    adress: "Dirección",
    phone: "Teléfono",
    position: "Cargo",
    login: "Login",
    created_at : "Fecha",
    person: "Persona",
    expedition_city: "Ciudad Expedición",

    // PURPOSES
    name: "Nombre",
    // AGES
    age: "Edad",
    yard_sacrificed_time: "Hora Ingreso Corrales Sacrificio",
    code: "Código",
    description: "Descripción",
    // INCOMES
    guide_number: "No Guía",
    total_males: "Total Machos",
    total_females: "Total Hembras",
    date_entry: "Fecha Ingreso",
    time_entry: "Hora de Ingreso",
    benefit_date: "Fecha Beneficio",
    benefit_time: "Hora de Beneficio",
    gender: "Sexo",
    city: "Ciudad",
    purpose: "Propósito",
    outlet: "Expendio",
    colors: "Colores",
    genders: "Géneros",
    special_order: "Orden Especial",
    source: "Procedencia",
    destination: "Destino",
    sacrifice_date: "Fecha Sacrificio",
    customer: "Cliente",
    primary_phone: "Teléfono",
    secondary_phone: "N° Secundario",
    establishment_name: "Establecimiento",
    establishment_address: "E.Dirección",
    signature_date: "Fecha Firma",
    signature: "Firma",
    owner: "Propietario",
    buyer: "Comprador",
    route: "Ruta",
    quantity: "Cantidad",
    orders: "Ordenes",
    date: "Fecha",
    type: "Tipo",
    intestines_quantity: 'Intestinos. Cant',
    intestines_cause: 'Instestinos. Causa',
    liver_quantity: 'Higado. Cant',
    livers_cause: 'Hígado. Causa',
    lungs_quantity: 'Pulmón. Cant',
    lungs_cause: 'Pulón. Causa',
    udders_quantity: 'Ubres. Cant',
    udders_cause: 'Ubres. Causa',
    legs_quantity: 'Patas. Cant',
    legs_cause: 'Patas. Causa',
    purges_quantity: 'Despurgos. Cant',
    purges_cause: 'Despurguos. Causa',
    other_organ: 'Otros. Organo',
    other_cause: 'Otros. Causa',
    other_quantity: 'Otros. Cantidad',
    insp_ganglions: 'Insp. Ganglios',
    verified_by: 'Verificado',
    supervised_by: 'Supervisado',
    elaborated_by: 'Elaborado',
    species: 'Especie',

    small_ints: 'Ints. Delgado',
    large_ints: 'Ints. Grueso',
    liver: 'Hígado',
    lung: 'Pulmón',
    udders: 'Ubres',
    head: 'Cabeza',
    hands: 'Manos',
    legs: 'Patas',
    others: 'Otros',
    destocking: 'Despurgos (kg)',
    booklet: 'Librillo',
    observations: 'Observaciones',
    callus: 'Callo',
    rennet: 'Cuajo'

}
export default {
    getTranslation(string) { return (translations[string] ?? string).toUpperCase();}
}