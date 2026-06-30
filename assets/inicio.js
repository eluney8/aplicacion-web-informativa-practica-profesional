

const map = L.map('map').setView([-26.1849, -58.1731], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);




const instituciones = [

{
    nombre: "Universidad Nacional de Formosa (UNaF)",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.192576802308082,
    lng: -58.20195300716854,
    carreras: [
        "Ingeniería",
        "Profesorados",
        "Licenciaturas",
        "Contador Público",
        "Abogacía"
    ]
},

{
    nombre: "Instituto Politécnico Formosa",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.07992312434542,
    lng: -58.27713184059474,
    carreras: [
        "TS en Desarrollo de Software Multiplataforma",
        "TS en Mecatrónica",
        "TS en Química Industrial",
        "TS en Telecomunicaciones"
    ]
},

{
    nombre: "ISFD en Educación Física",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.19557169117700,
    lng: -58.17487907252644,
   
    carreras: [
        "Profesorado de Educación Física",
        "TTP Inicial en Guardavidas"
    ]
},

{
    nombre: "ISFD para el Nivel Inicial",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.166015505446442,
    lng: -58.17887395576596,
    carreras: [
        "Profesorado de Nivel Inicial"
    ]
},

{
    nombre: "ISFD Félix Atilio Cabrera",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.189971605983676,
    lng: -58.176687772935495,

    carreras: [
        "Gestión Integral, Negocios y Empresas",
        "Desarrollador de Software",
        "TTPI Auxiliar en Inteligencia Artificial"
    ]
},

{
    nombre: "Instituto Superior de Arte Oscar A. Albertazzi",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.18372923104716,
    lng: -58.175191584588255,
    
    carreras: [
        "Diseño de Comunicación Visual",
        "Músico Social"
    ]
},

{
    nombre: "ISPAF",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.186395936341743,
    lng: -58.19590142876515,
    carreras: [
        "TTP en Streaming"
    ]
},


{
    nombre: "Instituto Superior de Formación Policial",
    localidad: "Formosa Capital",
    region: "Litoral Sur",
    lat: -26.17027723335416,
    lng: -58.20686461341938,
    carreras: [
        "Oficial de Policía",
        "Seguridad Pública",
        "Seguridad Penitenciaria"
    ]
},

{
    nombre: "ISFDCyT Don Cristóbal Aguirre",
    localidad: "Clorinda",
    direccion: "Catamarca y Ruta Nacional 11",
    region: "Litoral Norte",
    lat: -25.28481000000000,
    lng: -57.71851000000000,
    carreras: [
        "TS en Comercio Internacional",
        "TTPI Auxiliar en Inteligencia Artificial"
    ]
},

{
    nombre: "ISFDCyT Presidente Juan Domingo Perón",
    localidad: "Laguna Blanca",
    direccion: "Av. Aldo Bollini s/n",
    region: "Litoral Norte",
    lat: -25.12603000000000,
    lng: -58.25882000000000,
    carreras: [
        "Profesorado de Educación Primaria",
        "TS en Producción Agropecuaria"
    ]
},

{
    nombre: "ISFDCyT Brigadier Facundo Quiroga",
    localidad: "Las Lomitas",
    direccion: "Av. San Martín y Belgrano",
    region: "Centro Oeste",
    lat: -24.70955000000000,
    lng: -60.59303000000000,
    carreras: [
        "TTPI en Streaming",
        "TTPI Auxiliar en Inteligencia Artificial"
    ]
},

{
    nombre: "Instituto Superior de Ingeniero Juárez",
    localidad: "Ingeniero Juárez",
    direccion: "Centro de Ingeniero Juárez",
    region: "Oeste",
    lat: -23.90000000000000,
    lng: -61.85000000000000,
    carreras: [
        "Profesorado de Educación Secundaria",
        "TS en Energías Renovables"
    ]
},

{
    nombre: "Instituto Superior de Pirané",
    localidad: "Pirané",
    direccion: "Centro de Pirané",
    region: "Centro Sur",
    lat: -25.73239000000000,
    lng: -59.10879000000000,
    carreras: [
        "Profesorado de Educación Primaria",
        "TS en Gestión de Empresas"
    ]
},

{
    nombre: "ISFDCyT República Federal de Alemania",
    localidad: "El Colorado",
    direccion: "Centro de El Colorado",
    region: "Litoral Sur",
    lat: -26.30808000000000,
    lng: -59.37291000000000,
    carreras: [
        "Profesorado de Educación Inicial",
        "TS en Administración"
    ]
},

{
    nombre: "Instituto Superior de Ibarreta",
    localidad: "Ibarreta",
    direccion: "Centro de Ibarreta",
    region: "Centro",
    lat: -25.21438000000000,
    lng: -59.85851000000000,
    carreras: [
        "Profesorado de Educación Inicial",
        "TS en Desarrollo Local"
    ]
},
{
    nombre: "ISFDCyT Presidente Juan Domingo Perón",
    localidad: "Laguna Blanca",
    direccion: "Av. Aldo Bollini s/n",
    region: "Litoral Norte",
    lat: -25.12603000000000,
    lng: -58.25882000000000,
    carreras: [
        "Profesorado de Educación Primaria",
        "TS en Producción Agropecuaria"
    ]
},
{
    nombre: "ISFDCyT Brigadier Facundo Quiroga",
    localidad: "Las Lomitas",
    direccion: "Av. San Martín y Belgrano",
    region: "Centro Oeste",
    lat: -24.70955000000000,
    lng: -60.59303000000000,
    carreras: [
        "TTPI en Streaming",
        "TTPI Auxiliar en Inteligencia Artificial"
    ]
},
{
    nombre: "Instituto Superior de Ingeniero Juárez",
    localidad: "Ingeniero Juárez",
    direccion: "Centro de Ingeniero Juárez",
    region: "Oeste",
    lat: -23.90000000000000,
    lng: -61.85000000000000,
    carreras: [
        "Profesorado de Educación Secundaria",
        "TS en Energías Renovables"
    ]
},
{
    nombre: "Instituto Superior de Pirané",
    localidad: "Pirané",
    direccion: "Centro de Pirané",
    region: "Centro Sur",
    lat: -25.73239000000000,
    lng: -59.10879000000000,
    carreras: [
        "Profesorado de Educación Primaria",
        "TS en Gestión de Empresas"
    ]
},
{
    nombre: "ISFDCyT República Federal de Alemania",
    localidad: "El Colorado",
    direccion: "Centro de El Colorado",
    region: "Litoral Sur",
    lat: -26.30808000000000,
    lng: -59.37291000000000,
    carreras: [
        "Profesorado de Educación Inicial",
        "TS en Administración"
    ]
},
{
    nombre: "Instituto Superior de Ibarreta",
    localidad: "Ibarreta",
    direccion: "Centro de Ibarreta",
    region: "Centro",
    lat: -25.21438000000000,
    lng: -59.85851000000000,
    carreras: [
        "Profesorado de Educación Inicial",
        "TS en Desarrollo Local"
    ]
}

];



instituciones.forEach(inst => {


    const marcador = L.marker([inst.lat, inst.lng]).addTo(map);


    marcador.bindTooltip(
        `
        <strong>${inst.nombre}</strong><br>
        📍 ${inst.localidad}
        `,
        {
            direction: "top",
            offset: [0, -15],
            opacity: 1,
            sticky: true
        }
    );

  
    marcador.bindPopup(`
        <div style="min-width:250px">

            <h5 class="mb-3">${inst.nombre}</h5>

            <p class="mb-2">
                <strong>Localidad:</strong><br>
                ${inst.localidad}
            </p>

                

            <p class="mb-2">
                <strong>Carreras:</strong><br>
                ${inst.carreras.join("<br>")}
            </p>

        </div>
    `);

});










const formAgregar = document.getElementById("formAgregar");

formAgregar.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevaInst = {
        nombre: document.getElementById("inputNombre").value,
        categoria: document.getElementById("inputCategoria").value.toUpperCase(),
        localidad: document.getElementById("inputLocalidad").value,
        duracion: document.getElementById("inputDuracion").value,

        carreras: document.getElementById("inputCarreras").value.split(',').map(c => c.trim()),
        lat: Number(document.getElementById("inputLat").value),
        lng: Number(document.getElementById("inputLng").value)
    };


    instituciones.push(nuevaInst);


    cargarInstituciones(instituciones);


    formAgregar.reset();
});


const cargarInstituciones = (lista) => {
    const contenedor = document.getElementById("cardsContainer");
    contenedor.innerHTML = ""; // Limpiar antes de inyectar [6, 7]

    lista.forEach((inst) => {
   
        contenedor.innerHTML += `
            <div class="card-tucarrera shadow-sm p-4 bg-white mb-3">
                <p class="text-primary small fw-bold mb-1">${inst.categoria}</p>
                <h5 class="fw-bold">${inst.nombre}</h5>
                <p class="mb-1 small"><i class="bi bi-geo-alt-fill text-danger"></i> ${inst.localidad}</p>
                <p class="mb-3 small"><i class="bi bi-clock-fill"></i> Duración: ${inst.duracion}</p>
                <button class="btn btn-primary w-100 rounded-pill fw-bold">Obtener más información</button>
            </div>
        `;

      
        if (inst.lat && inst.lng) {
            const marcador = L.marker([inst.lat, inst.lng]).addTo(map);
            marcador.bindPopup(`
                <div style="min-width:200px">
                    <h5 class="fw-bold border-bottom pb-2">${inst.nombre}</h5>
                    <p class="mb-2"><strong>Localidad:</strong><br>${inst.localidad}</p>
                    <p class="mb-0"><strong>Carreras:</strong></p>
                    <ul class="ps-3 mt-1">
                        ${inst.carreras.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            `);
        }
    });
};