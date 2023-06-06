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
}
export default {
    getTranslation(string) { return (translations[string] ?? string).toUpperCase();}
}