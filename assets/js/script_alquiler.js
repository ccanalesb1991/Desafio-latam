// -----------------------
// objetos
// -----------------------
let propiedadEnAlquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "2.000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src:'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3 Habitaciones | 3 Baños",
        costo: "2.500",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "2.200",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento en zona exclusiva",
        src:'https://www.compass.com/m/461e8130b5214c92181912f485e2253c0f8a72cf_img_0/origin.jpg',
        descripcion: "Hermoso apartamento hubicado en zona exclusiva de Hollywood, Miami",
        ubicacion: "1830 Radius Dr, Hollywood, FL 33020, USA",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "4.100",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento con vista a la naturaleza",
        src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295497266.jpg?k=37c8deb0cb8cce95ef05249499122553f58d021a27f66788aaa00a51bf15ff7c&o=&hp=1',
        descripcion: "Cómodo apartamento con vista a una montaña ideal para el relajo.",
        ubicacion: "3631 Monterosa Dr, Altadena, CA 91001, EE. UU.",
        habitaciones: "3 Habitaciones | 2 Baños",
        costo: "2.300",
        smoke: true,
        pets: false,
    },
    {
        nombre: "Condominio verde",
        src:'https://mergulho-no-mar-de-jurere-com-vista-lateral.topflorianopolishotels.com/data/Pics/OriginalPhoto/8786/878637/878637572/pic-mergulho-no-mar-de-jurere-com-vista-lateral-hotel-florianopolis-22.JPEG',
        descripcion: "Elegante condiminio rodeado de áreas verdes, ideales para juntas con amigos.",
        ubicacion: "966 Warehouse Rd, Orlando, FL 32803, USA.",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "2.000",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento Loft",
        src:'https://global-uploads.webflow.com/6375fffd5374d2795f833cc8/6375fffd5374d273ac833fbb_Get-Inspired-With-These-Incredible-New-York-Ind.original.png',
        descripcion: "Apartamento espacioso y bien iluminado de 2 pisos con hermosa vista al centro.",
        ubicacion: "Government Center, Miami, Florida, USA.",
        habitaciones: "3 Habitaciones | 2 Baños",
        costo: "2.600",
        smoke: true,
        pets: true,
    },
]

// -----------------------
// template
// -----------------------
const alquiler = document.getElementById("alquiler");

for (propiedad of propiedadEnAlquiler) {
    const propertyCardHTML = 
    `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="
                    ${propiedad.src}
                    "
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${propiedad.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i>
                    ${propiedad.habitaciones} 
                    <i class="fas fa-bath"></i>
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>
                    ${propiedad.costo}
                    </p>
                    ${propiedad.smoke? 
                    `
                    <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                    </p>
                    `
                    :
                    `
                    <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>
                    `
                    }
                    ${propiedad.pets?
                    `
                    <p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>
                    `
                    :
                    `
                    <p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>
                    `
                    }
                </div>
            </div>
        </div>
    `;

alquiler.innerHTML += propertyCardHTML;
}

