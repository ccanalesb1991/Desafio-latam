// -----------------------
// objets
// -----------------------
let propiedadesEnVenta = [
{
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones | 4 Baños",
    costo: "5.000",
    smoke: false,
    pets: false,
},
{
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
    habitaciones: " Habitaciones | 1 Baños",
    costo: "1.200",
    smoke: true,
    pets: true,
},
{
    nombre: "Penthouse de lujo con terraza panorámica",
    src:'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 567898",
    habitaciones: "3 Habitaciones | 3 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
},
{
    nombre: "Tiny house sustentable",
    src:'https://economiasustentable.com/wp-content/uploads/2022/08/Tiny-House-2-1000x562.jpg',
    descripcion: "Esta pequeña casa funcional tiene lo escencial para ahorro de dinero, y más importante, tiempo",
    ubicacion: "3951 Sunnyhill Ln, Friant, CA 93626",
    habitaciones: "1 Habitación | 1 Baño",
    costo: "1.500",
    smoke: true,
    pets: true,
},
{
    nombre: "Casa antigua de piedra",
    src:'https://i.pinimg.com/550x/0e/fc/b2/0efcb2bbfce02da5194ce0b7b296efb4.jpg',
    descripcion: "Esta casa ha sido reconstruida manteniendo en gran medida el diseño y materiales de sus antiguos días",
    ubicacion: "6 Rte de la Roseraie, 24120 Terrasson-Lavilledieu.",
    habitaciones: "3 Habitaciones | 2 Baño",
    costo: "5.500",
    smoke: true,
    pets: true,
},
{
    nombre: "Casa colonial",
    src:'https://i0.wp.com/www.casasdelano.cl/wp-content/uploads/2020/07/26-CD-ruiz-tagle.jpg?resize=762%2C441&ssl=1',
    descripcion: "Esta casa tiene arquitectura tradicional de los campos de Chile en la época colonial.",
    ubicacion: "Concón, Valparaíso.",
    habitaciones: "5 Habitaciones | 3 Baño",
    costo: "7.500",
    smoke: true,
    pets: true,
},
{
    nombre: "Apartamento contemporáneo",
    src:'https://static9.depositphotos.com/1658611/1134/i/450/depositphotos_11345277-stock-photo-modern-apartment-complex-exterior.jpg1',
    descripcion: "Mantiene la funcionalidad de un cómodo hogar a un precio accesible cerca del centro.",
    ubicacion: "315 Texas St, Fort Worth, TX 76102, EE. UU..",
    habitaciones: "2 Habitaciones | 2 Baño",
    costo: "7.500",
    smoke: false,
    pets: false,
},
]

// -----------------------
// template
// -----------------------
const venta = document.getElementById("venta");

for (propiedad of propiedadesEnVenta) {
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

venta.innerHTML += propertyCardHTML;
}

