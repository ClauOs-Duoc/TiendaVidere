const products = [
    {
        id: 1,
        name: 'Poción de Curación',
        image: '/images/pocionSalud192x192.webp',
        precio: 5,
        especificaciones:
            'Botella de cristal con capacidad para 450 ml con tapón de corcho y una etiqueta que indica el efecto de la poción. Contiene 200 ml de líquido rojo de poción de curación estándar.',
        descripcion:
            'Su consumo acelera la regeneración de cualquier herida, huesos rotos y pérdida de sangre. También ayuda con el dolor de cabeza y estómago, esguinces, torceduras, calambres y dislocaciones menores.',
        advertencia:
            'No cura efectos de estado como envenenamiento, su efecto curando quemaduras es más débil, no regenera miembros amputados, no cura enfermedades y no revive muertos.'
    },
    { 
        id: 2, 
        name: 'Poción de Defensa', 
        image: '/images/pocionDefensa192x192.webp',
        precio: 7,
        especificaciones:
            'Especificaciones: Botella de cristal con capacidad para 350 ml con tapon de corcho y una etiqueta que indica el efecto de la pocion. Contiene 150 ml de liquido verde de pocion de defensa estandar.',
        descripcion:
            'Su consume acelera aumenta la resistencia corporal, aumentando temporalmente la estadistica de defensa del consumidor.',
        advertencia:
            'Consumir mas de una en un periodo de menos de 24 horas puede causar dolores musculares, calambres y nauseas.'
    },
    {
        id: 3, 
        name: 'Poción de Maná', 
        image: '/images/pocionMana192x192.webp',
        precio: 5,
        especificaciones:
            'Botella de cristal con capacidad para 400 ml con tapon de corcho y una etiqueta que indica el efecto de la pocion. Contiene 300 ml de liquido azul de pocion de mana estandar.',
        descripcion:
            'Su consumo regenera el 75% de la capacidad de mana del consumidor. Es capaz de hacer efecto en menos de un minuto, ademas de dar una sensacion refresacante y de energia.',
        advertencia:
            'No se recomienda su uso en personas hipertensas o diabetes, ademas de que contiene una alta cantidad de azucar.' 
    },
    { 
        id: 4, 
        name: 'Poción de Fuerza', 
        image: '/images/pocionFuerza192x192.webp',
        precio: 10,
        especificaciones:
            'Botella de cristal con capacidad para 900 ml con tapon de corcho y una etiqueta que indica el efecto de la pocion. Contiene 850 ml de liquido amarillo de pocion de fuerza estandar.',
        descripcion:
            'Su consume aumenta la capacidad muscular, resistencia al dolor y circulacion sanguinea en un 50%. Ademas de tener un sabor a limon y mandarina con canela.',
        advertencia:
            'Un uso excesivo en un corto plazo de tiempo puede causar dolor muscular, calambres y atrofia muscular.' 
    },
    { 
        id: 5, 
        name: 'Bola Roja', 
        image: '/images/bolaRoja.webp',
        precio: 10,
        especificaciones:
            'Bola con un diametro de 30 centimetros de color Rojo.',
        descripcion:
            'Una bola roja.',
        advertencia:
            'Una bola roja.' 
    },
    { 
        id: 6, 
        name: 'Bola Verde', 
        image: '/images/bolaVerde.webp',
        precio: 10,
        especificaciones:
            'Bola con un diametro de 30 centimetros de color Verde.',
        descripcion:
            'Una bola verde.',
        advertencia:
            'Una bola verde.' 
    },
    { 
        id: 7, 
        name: 'Bola Azul', 
        image: '/images/bolaAzul.webp',
        precio: 10,
        especificaciones:
            'Bola con un diametro de 30 centimetros de color Azul.',
        descripcion:
            'Una bola azul.',
        advertencia:
            'Una bola azul.' 
    },
    { 
        id: 8, 
        name: 'Bola Amarilla', 
        image: '/images/bolaAmarillal.webp',
        precio: 10,
        especificaciones:
            'Bola con un diametro de 30 centimetros de color Amarilla.',
        descripcion:
            'Una bola amarilla.',
        advertencia:
            'Una bola amarilla.' 
    },
    { 
        id: 9, 
        name: 'Bola de Cristal', 
        image: '/images/bolaCristal192x192.webp',
        precio: 25,
        especificaciones:
            'Bola de cristal de calidad S, de colo azul con interior de humo y brillos en movimiento constante. Apta para adivinacion, invocacion, hechiceria y magia elementa. No lavable en lavadora. Sin soporte incluido.',
        descripcion:
            'Instruciones de uso incluidas en el paquete, apta para uso profesional y para aprendices, aunque se recomienda un minimo de experiencia o conocimiento sobre el uso de bolas de cristal previos, para un mejor uso.',
        advertencia:
            'El vendedor no se hace responsable del uso inadecuado que los usuarios hagan del producto. Al adquirirlo, usted acepta cualquier responsabilidad referente a su uso.' 
    },
    { 
        id: 10, 
        name: 'Lámpara de Agua', 
        image: '/images/lamparaAgua192x192.webp',
        precio: 12,
        especificaciones:
            'Armazon del farol fabricado en acero encantado contra la corrosion y paneles de crisral templado, resistente a golpes menores y arañazos. Contenido de 1 litro de agua magica que brilla en condiciones de oscuridad tota. Autonomia de 24 horas antes de una recarga de mana.',
        descripcion:
            'Lampara llena de agua encantada para brillar en la oscuridad con intencidad moderada, pensada para decoracion de ambientes y cerca de materiales potencialmente volatiles. Apto para aventuras, aunque no se recomienda para largas excursiones por su necesidad de recargar mana.',
        advertencia:
            'El agua en su interior puede tener efectos secundarios de ser consumida, entre los cuales se encuentra fiebre del sapo, mareos, nauseas, fiebre, escalofrios, dolor de estomago, dolor de cabeza y reacciones alergicas por su contenido en gel de slime azul.' 
    },
    { 
        id: 11, 
        name: 'Libro de Hechizos VOL-1', 
        image: '/images/libroHechizos192x192.webp',
        precio: 20,
        especificaciones:
            'Libro de hechizos Volumen 1, escrito por Lady Colley Dorian Gray Von Viridis, 350 paginas dedicadas a algunos de los hechizos mas fundamentales para cualquier aprendiz de magia. Edicion de la editorial Platina Letters en su primer lote.',
        descripcion:
            'Un libro de tapas duras de color morado oscuro y detalles dorado en sus grabados, ideal para aprendices de magia e incluso expertos. Incluye algunos de los hechizos mas importantes para cualquier mago como: Lüm, Nox, Blindoscure, Leviora, Bulla, Filum, Acus, Projectilium, Ignis Pila, Ignitabulon, Yeskal, Morozko, Frigore, Tenebrae, etc.',
        advertencia:
            'Ni la autora, ni la tienda, ni la editorial se hacen responsables del uso o accidentes provocados por los aprendices de magica con hechizos aprendidos de este libro. Cada hechizo incluye advertencias de su uso indevido y las repercusiones, ningun involucrado en su creacion y distribucion se hace responsable.' 
    },
    { 
        id: 12, 
        name: 'Brazalete del Fósforo', 
        image: '/images/brazaleteAzufre192x192.webp',
        precio: 15,
        especificaciones:
            'Un brazalete hecho de cuero con bordes de plata con gemas incrustadas, grabado con el simbolo alquimico del fosforo. Cubre todo el antebrazo del portador',
        descripcion:
            'Su uso aumenta el poder de las mezclas alquimicas de fuego o elementos incendiarios, siempre que el usuario lleve el brazalete al hacerlo. Tambien aumenta la resistencia a la magia ignea.',
        advertencia:
            'El usurio debe hacer un uso responsable de las soluciones alquimicas hechas y potenciadas con el brazalete, pues estas siguen siendo altamente peligrosas para el y sus cercanos.' 
    },
];

export default products;