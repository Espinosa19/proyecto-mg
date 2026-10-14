function abrirBlog(tipo){

  const modal = document.getElementById("modal-blog");
  const contenido = document.getElementById("contenido-blog");

let blogs = {

 empresarial: `
<div class="blog-revista">

  <h2 class="blog-titulo">
    LA IMPORTANCIA DEL EJERCICIO EN LAS ORGANIZACIONES
  </h2>

  <p class="blog-categoria">Categoría: EMPRESARIAL</p>

  <p class="blog-subtitulo">
    La actividad física en la empresa: un impulso integral para el éxito corporativo
  </p>

  <div class="blog-columnas">

    <!-- COLUMNA IZQUIERDA -->
    <div>

      <p>
        En el entorno laboral actual, las empresas buscan constantemente formas de mejorar la productividad, fomentar un ambiente positivo y cumplir con objetivos de sostenibilidad y responsabilidad social.
      </p>

      <p>
        En este contexto, la promoción del deporte en la empresa se presenta como una estrategia integral que genera beneficios en el team building, la salud y la cultura organizacional.
      </p>

      <h3>Team building y Cohesión de Equipos</h3>

      <p>
El deporte es una herramienta poderosa para el team building y la cohesión de equipos. Actividades deportivas grupales, como torneos de fútbol, maratones corporativas o clases de yoga, promueven la interacción y la cooperación entre empleados de diferentes departamentos. Según un estudio de la Harvard Business Review, las empresas que fomentan la actividad física en grupo observan un aumento del 50% en la cohesión del equipo y un 40% en la moral del personal.      </p>

      <p>
Estas actividades no solo facilitan la creación de vínculos personales más fuertes, sino que también mejoran la comunicación y la resolución de problemas en el entorno laboral. Los empleados que participan en deportes juntos aprenden a confiar más en sus compañeros, a trabajar en equipo bajo presión y a celebrar logros compartidos, trasladando estas habilidades a su desempeño profesional diario.

      </p>

    </div>

    <!-- COLUMNA DERECHA -->
    <div>

      <h3>Salud Física y Emocional</h3>

      <p>
El sedentarismo es uno de los grandes enemigos de la salud en el ámbito laboral. La promoción del deporte en la empresa combate este problema de manera efectiva. Según la Organización Mundial de la Salud (OMS), la actividad física regular puede reducir el riesgo de enfermedades crónicas como la diabetes tipo 2 en un 30% y las enfermedades cardíacas en un 35%. Además, estudios muestran que empleados físicamente activos tienen un 27% menos de probabilidades de sufrir depresión y un 26% menos de experimentar altos niveles de estrés.      </p>

      <p>
Las empresas que implementan programas de bienestar deportivo no solo ven una mejora en la salud física de sus empleados, sino también en su bienestar emocional. Actividades como el mindfulness, la meditación y el yoga en el trabajo han demostrado reducir significativamente los niveles de estrés y ansiedad, mejorar el estado de ánimo y aumentar la productividad. Un informe de Deloitte revela que las empresas que invierten en programas de bienestar para sus empleados pueden ver un retorno de inversión de hasta 5 dólares por cada dólar gastado debido a la reducción del absentismo y el aumento de la productividad.      </p>

      <h3>Cultura Empresarial</h3>

      <p>
Promover el deporte dentro de la empresa contribuye de manera significativa a la construcción de una cultura corporativa positiva y dinámica. Una cultura empresarial que valora el bienestar y la salud de sus empleados es más atractiva para el talento joven y puede mejorar la retención de empleados. De acuerdo con un estudio de Glassdoor, el 79% de los empleados consideran la cultura empresarial y la misión de la empresa antes de postularse a un empleo.

      </p>

      <p>
Integrar el deporte en la cultura empresarial también puede reflejarse en un compromiso mayor con valores como el trabajo en equipo, la resiliencia y la superación personal. Empresas que promueven maratones, competiciones deportivas internas o suscripciones a gimnasios están demostrando de manera tangible su compromiso con la salud y el bienestar de sus empleados. Esto, a su vez, puede traducirse en una mayor lealtad y satisfacción laboral.

      </p>

    </div>

  </div>

</div>
`,
 salud: `

 
<div class="blog-revista">

  <h2 class="blog-titulo">Salud</h2>

  <div class="blog-img-principal">
    <img src="img/salud.jpg">
  </div>

  <div class="blog-intro">
    Una buena alimentación es clave para tu salud física y mental.
  </div>

  <!--  4 APARTADOS -->
  <div class="subcards">

    <div class="subcard" onclick="abrirSubcard('Obesidad')">
      <img src="img/obecidad.jpg">
      <h4>Obesidad</h4>
      <p>La Obesidad: Una Epidemia Global con Graves Consecuencias para la Salud La obesidad es una enfermedad crónica y compleja, caracterizada por una acu...</p>
    </div>

    <div class="subcard" onclick="abrirSubcard('La importancia de los hábitos saludables')">
      <img src="img/importancia.jpg">
      <h4>La importancia de los hábitos saludables</h4>
      <p>Unos hábitos saludables son clave para mantener una buena salud a largo plazo   Mantener hábitos saludables es fundamental para una vida plena y...</p>
    </div>

    <div class="subcard" onclick="abrirSubcard('Perdida de peso')">
      <img src="img/perdida de peso.jpg">
      <h4>Perdida de peso</h4>
      <p>Perder peso de forma saludable y sostenible implica realizar cambios en tu estilo de vida que incluyan una alimentación equilibrada y actividad física...</p>
    </div>

  <div class="subcard" onclick="abrirSubcard('Comida chatarra')">
      <img src="img/comida chatarra.jpg">
      <h4>Comida chatarra</h4>
      <p>Comida Chatarra: Un Placer Culpable con Consecuencias Reales   La comida chatarra, ese universo tentador de papas fritas crujientes, hamburguesa...</p>
    </div>

  </div>

</div>
`,

  ejercicio: `
<div class="blog-revista">

  <h2 class="blog-titulo">
    LA IMPORTANCIA DEL EJERCICIO MIENTRAS VAMOS ENVEJECIENDO
  </h2>

  <p class="blog-categoria">Categoría: EJERCICIO</p>

  <p class="blog-subtitulo">
    Más que un Pasatiempo: El Ejercicio Como Pilar de un Envejecimiento Vibrante
  </p>

  <div class="blog-columnas">

    <div>
      <p>
        Con el paso de los años, es común que la vida se vuelva más sedentaria. Las responsabilidades, el cansancio 
        y la creencia errónea de que el cuerpo ya no responde igual nos empujan a una zona de confort. Sin embargo, 
        la ciencia es clara: el ejercicio físico no es un lujo o un hobby, sino el pilar fundamental para un envejecimiento 
        saludable, lleno de vitalidad e independencia. No se trata de convertirse en un atleta de alto rendimiento, sino de 
        moverse de manera constante e inteligente.

      </p>

       <p class="blog-subtitulo">
    
Beneficios que Transforman la Vida Cotidiana
  </p>
  <p>
  El impacto del ejercicio a medida que envejecemos va mucho más allá de la apariencia física. Sus beneficios más importantes son los 
  que no se ven, pero que se sienten en cada momento del día.
  </p>

      <h3>1. Fortalecimiento de Huesos y Músculos</h3>
      <p>A partir de los 40, comenzamos a perder masa muscular y densidad ósea, un proceso natural llamado sarcopenia y osteoporosis. 
      El ejercicio de fuerza —usando pesas ligeras, bandas de resistencia o incluso el propio peso corporal— es la mejor herramienta para
      combatir esta pérdida. Músculos y huesos fuertes son esenciales para mantener la movilidad, prevenir caídas y realizar tareas cotidianas 
      como subir escaleras o cargar las bolsas del supermercado sin dificultad.</p>

      <h3>2. Corazón y Mente Sincronizados</h3>
      <p>El ejercicio aeróbico, como caminar, nadar o bailar, fortalece el músculo más importante del cuerpo: el corazón. Al hacerlo, mejora la 
      circulación sanguínea, reduciendo el riesgo de enfermedades cardiovasculares, que son más comunes con la edad. Además, un corazón sano bombea 
      más oxígeno al cerebro, lo que se ha demostrado que mejora la función cognitiva, la memoria y ayuda a reducir el riesgo de demencia.</p>

      <h3>3. Reducción de la Inflamación y el Dolor</h3>
      <p>Muchas de las molestias que asociamos con la vejez, como el dolor en las articulaciones, pueden ser aliviadas con el movimiento correcto. 
      El ejercicio de bajo impacto y los estiramientos mantienen las articulaciones lubricadas, reducen la inflamación y mejoran la flexibilidad. 
      Esto te permite moverte con menos rigidez y mayor comodidad, disfrutando de tus actividades favoritas sin dolor.</p>
    </div>

    <div>
      <h3>4. La Independencia es tu Mayor Recompensa</h3>
      <p>Quizás el beneficio más valioso del ejercicio en la tercera edad es la capacidad de mantener la autonomía. Un buen equilibrio, reflejos ágiles 
      y la fuerza necesaria para levantarse de una silla o caminar por la calle sin miedo son habilidades que se construyen y se mantienen con el movimiento regular. 
      El ejercicio es una inversión en tu futuro, una garantía para seguir haciendo lo que amas por tu cuenta.


Nuestra plataforma de ejercicio en línea puede ser tu mejor aliada para mantenerte activo, ya que algunos de sus beneficios son:</p>

      <h3>Beneficios de la Plataforma</h3>

      <p><b>1. Flexibilidad Total: Tu Ejercicio, a Tu Manera- </b> No importa si es un día lluvioso, si tienes una agenda apretada o si simplemente no quieres salir de casa. ya que centro de 
      acondicionamiento físico está en tu sala, tu patio o incluso en tu habitación de hotel. La flexibilidad de poder hacer ejercicio a cualquier hora y en cualquier 
      lugar te permite ser constante, lo cual es el factor más importante para ver resultados a largo plazo.</p>
      <p><b>2.  Variedad y Personalización Absoluta-</b>  Nuestra plataforma en línea te ofrecen un universo de opciones en base a tus necesidades y preferencias, ya que podemos fltrar tu programa por nivel de dificultad, 
      duración o incluso por el tipo de equipo que tienes disponible (o si no tienes ninguno).</p>
      <p><b>3. Seguridad y Orientación Profesional a tu Alcance-</b> Nuestra plataforma en ínea cuenta con licenciados en Educación Física y no con la improvisación de insturctores que se ostentan como certificados, 
      los cuales cuentan con una corta capacitación, que a veces es dudosa. Te dosificamos las cargas de esfuerzo conforme a tus posibilidades, asegurando que estás realizando los ejercicios de forma correcta y segura, 
      algo que a menudo es difícil de lograr en una clase grupal presencial.</p>
      <p><b>4. Costo-Beneficio: Una Inversión Inteligente-</b> Las membresías de gimnasios, las clases especializadas y los entrenadores personales pueden ser costosos. Nuestra plataforma de ejercicio en línea ofrece una 
      alternativa significativamente más económica.. Es una inversión inteligente que te da acceso a una amplia gama de opciones de alta calidad sin afectar tu presupuesto.</p>
    </div>

  </div>

</div>
`,
 
General: `
<div class="blog-revista">

  <h2 class="blog-titulo">General</h2>

  <div class="blog-img-principal">
    <img src="img/im5.jpg">
  </div>

  <div class="blog-intro">
    Mejora tu rendimiento con rutinas bien estructuradas.
  </div>

  
  <div class="subcards">

    <div class="subcard" onclick="abrirSubcard('perderpeso')">
      <img src="img/perderpeso.jpg">
      <h4>PERDER PESO</h4>
      <p>Cómo Perder Peso de Forma Saludable y Sostenible Perder peso es un objetivo común para muchas personas, pero es crucial abordarlo de una manera sal...</p>
    </div>

    
<div class="subcard" onclick="abrirSubcard('imc')">
      <img src="img/imc.jpg">
      <h4>¿Que es el IMC?</h4>
      <p>El Índice de Masa Corporal (IMC) es un valor numérico que se calcula dividiendo el peso de una persona en kilogramos por el cuadrado de su estatura en...</p>
    </div>

  </div>

</div>
`,
};

  contenido.innerHTML = blogs[tipo];
  modal.classList.add("activo");
}

function cerrarBlog(){
  document.getElementById("modal-blog").classList.remove("activo");
}
function abrirSubcard(tipo){

  const modal = document.getElementById("modal-subcard");
  const contenido = document.getElementById("contenido-subcard");

  let info = {

   "Obesidad": `
<div class="blog-revista">

  <h2 class="blog-titulo">La Obesidad: Una Epidemia Global con Graves Consecuencias para la Salud</h2>
  <p class="blog-categoria">Categoría: SALUD</p>

  <div class="blog-intro">
    La obesidad es una enfermedad crónica y compleja, caracterizada por una acumulación excesiva de grasa corporal. Lejos de ser un mero problema estético, la obesidad es una condición médica que eleva significativamente el riesgo de desarrollar una multitud de enfermedades y problemas de salud graves, impactando negativamente la calidad de vida y la esperanza de vida de quienes la padecen. Dimensiones de un Problema Creciente:
  </div>

  <h3>Las cifras son alarmantes.</h3>
  <p>
Datos recientes indican que la prevalencia de la obesidad continúa en aumento a nivel global. En 2022, 2.5 mil millones de adultos (mayores de 18 años) tenían sobrepeso, y de ellos, 890 millones eran obesos.

En la población infantil, la situación no es menos preocupante: en 2024, 35 millones de niños menores de 5 años tenían sobrepeso, y en 2022, más de 390 millones de niños y adolescentes de 5 a 19 años presentaban sobrepeso, de los cuales 160 millones eran obesos. La obesidad infantil se ha multiplicado por diez en las últimas cuatro décadas.
  </p>

  <h3>Causas Multifactoriales:</h3>
  <ul>
    <li>El desarrollo de la obesidad es el resultado de una interacción compleja de factores, que incluyen: Desequilibrio Energético: La causa fundamental es un consumo excesivo de calorías en comparación con el gasto energético del cuerpo. Esto se traduce en una acumulación de grasa.</li>
    <li>Hábitos Alimentarios Poco Saludables: Dietas ricas en grasas saturadas, azúcares añadidos y alimentos procesados, así como porciones grandes y el consumo de bebidas azucaradas, son contribuyentes clave. La omisión del desayuno también puede influir</li>
    <li>Falta de Actividad Física: Un estilo de vida sedentario, con largas horas frente a pantallas y poca o nula actividad física, impide quemar las calorías consumidas, favoreciendo el aumento de peso.</li>
    <li>Factores Genéticos: La predisposición genética puede influir en la cantidad de grasa que el cuerpo almacena, su distribución y la eficiencia con la que los alimentos se convierten en energía o se queman calorías. La obesidad a menudo se presenta en familias, no solo por la genética, sino también por compartir hábitos de estilo de vida similares.</li>
    <li>Factores Psicológicos y Socioeconómicos: El estrés, la depresión y ciertos trastornos de la conducta alimentaria pueden contribuir al aumento de peso. Asimismo, las condiciones socioeconómicas pueden limitar el acceso a alimentos saludables y oportunidades para la actividad física.</li>
  </ul>

  <h3>Complicaciones de la Obesidad</h3>
  <ul>
    <li>La obesidad es un factor de riesgo para una amplia gama de problemas de salud graves:

Enfermedades Cardíacas y Accidentes Cerebrovasculares: Aumenta la presión arterial y los niveles de colesterol, factores de riesgo primarios para estas condiciones.</li>
    <li>Diabetes Tipo 2: La obesidad puede alterar la forma en que el cuerpo utiliza la insulina, llevando a la resistencia a la insulina y al desarrollo de diabetes.</li>
    <li>Cánceres: Se ha vinculado con un mayor riesgo de ciertos tipos de cáncer, incluyendo los de útero, mama, colon, recto, esófago, hígado, vesícula, páncreas, riñón y próstata.</li>
    <li>Problemas Digestivos: Incrementa la probabilidad de acidez estomacal, enfermedad de la vesícula biliar y problemas hepáticos.</li>
    <li>Apnea del Sueño: Un trastorno grave en el que la respiración se detiene y reanuda repetidamente durante el sueño. Osteoartritis: La obesidad ejerce una mayor presión sobre las articulaciones que soportan el peso y fomenta la inflamación, lo que puede llevar al deterioro de las articulaciones.</li>
    <li>Impacto Psicosocial: Puede provocar depresión, baja autoestima, aislamiento social y discriminación, afectando la calidad de vida en general.</li>
  </ul>

  <h3>Prevención y Manejo</h3>
  <ul>
    <li>Prevenir y manejar la obesidad requiere un enfoque integral y multidisciplinario:</li>
    <li>Alimentación Saludable: Limitar la ingesta de grasas saturadas y azúcares, y aumentar el consumo de frutas, verduras, legumbres, cereales integrales y frutos secos.</li>
    <li>Adoptar horarios fijos de comidas y evitar comer frente a pantallas.</li>
    <li>Actividad Física Regular: Realizar al menos 150 minutos de actividad aeróbica moderada a la semana para adultos, y 60 minutos diarios para niños y adolescentes. Incluir actividades de fortalecimiento muscular.</li>
    <li>Hidratación Adecuada: Beber agua simple en lugar de bebidas azucaradas. Enfoque Profesional: Para quienes ya padecen obesidad, es fundamental buscar el apoyo de profesionales de la salud, como médicos, nutricionistas y psicólogos. En algunos casos, se pueden considerar opciones farmacológicas o quirúrgicas (como la cirugía bariátrica), siempre entendiendo que estas últimas requieren cambios permanentes en el estilo de vida para mantener los resultados.</li>
  </ul>
   
  <h3>Un Desafío Global</h3>
  <p>
  La obesidad es un problema de salud pública de proporciones epidémicas que demanda una respuesta colectiva. No es un fracaso individual, sino un desafío que requiere voluntad política, estrategias multisectoriales y un compromiso global para promover entornos más saludables y estilos de vida sostenibles.

Abordar la obesidad no solo mejora la salud individual, sino que también alivia la carga sobre los sistemas de salud y contribuye a un futuro más sano para todos.
  </p>

  <div class="blog-final">
    La obesidad no es solo un tema estético, sino un desafío de salud que requiere conciencia y hábitos saludables para mejorar la calidad de vida.
  </div>

</div>
`,



"La importancia de los hábitos saludables": `
<div class="blog-revista">

  <h2 class="blog-titulo">Unos hábitos saludables son clave para mantener una buena salud a largo plazo

</h2>
  <p class="blog-categoria">Categoría: SALUD</p>

  <div class="blog-intro">
    Mantener hábitos saludables es fundamental para una vida plena y de calidad. Estos hábitos no se limitan solo al ejercicio y la dieta, sino que abarcan el sueño, el manejo del estrés y la salud mental. Adoptar un enfoque holístico para la salud nos permite vivir más tiempo y, lo que es más importante, vivir mejor.

  </div>

  <h3>🌱 ¿Qué son los hábitos saludables?</h3>
  <p>
Los hábitos saludables son acciones que realizamos de manera regular y que tienen un impacto positivo en nuestra salud física y mental. Estos incluyen:
  </p>

  <ul>
    <li><b>Una dieta equilibrada 🥗:</b> Comer una variedad de frutas, verduras, proteínas magras y granos integrales es esencial para proporcionar a nuestro cuerpo los nutrientes que necesita. Una dieta rica en nutrientes ayuda a prevenir enfermedades crónicas como la diabetes y las enfermedades cardíacas.
    Trata de incorporar al menos 30 minutos de ejercicio moderado la mayoría de los días de la semana.</li>
    <li><b>Ejercicio regular 🏃‍♀️:</b> La actividad física no solo fortalece nuestros músculos y huesos, sino que también mejora nuestro estado de ánimo y reduce el estrés.</li>
    <li><b>Dormir lo suficiente 😴:</b> El sueño es cuando nuestro cuerpo se repara y se recupera. La falta de sueño puede afectar nuestra concentración, nuestro estado de ánimo y nuestro sistema inmunológico. Un adulto debe dormir entre 7 y 9 horas cada noche.</li>
    <li><b>Manejo del estrés 🧘:</b> El estrés crónico puede tener efectos devastadores en nuestra salud. Practicar la meditación, la respiración profunda o pasar tiempo en la naturaleza son excelentes maneras de reducir el estrés y promover la salud mental.</li>
  </ul>

  <h3>✨ Beneficios</h3>
  <ul>
    Los beneficios de mantener hábitos saludables son innumerables. Además de aumentar nuestra energía, mejorar nuestro estado de ánimo y fortalecer nuestro sistema inmunológico, también nos ayudan a prevenir enfermedades. Un estilo de vida saludable es una inversión en nuestro futuro que nos permite disfrutar de la vida al máximo, con vitalidad y bienestar. En resumen, cuidarnos hoy es la mejor manera de asegurarnos una vida saludable mañana.
  </ul>

  <div class="blog-final">
    Adoptar hábitos saludables es una inversión en tu futuro. Cuidarte hoy te permitirá vivir mejor mañana.
  </div>

</div>
`,

"Perdida de peso": `
<div class="blog-revista">

  <h2 class="blog-titulo">Pérdida de peso</h2>
  <p class="blog-categoria">Categoría: SALUD</p>

  <div class="blog-intro">
Perder peso de forma saludable y sostenible implica realizar cambios en tu estilo de vida que incluyan una alimentación equilibrada y actividad física regular. No se trata de dietas milagro o restricciones extremas, sino de adoptar hábitos que puedas mantener a largo plazo.

Aquí te presento una guía completa:  </div>

  <h3>🥗 Alimentación saludable y consciente:</h3>
  <ul>
    <li>Déficit calórico: Para perder peso, necesitas consumir menos calorías de las que quemas. Sin embargo, no se trata de pasar hambre, sino de elegir alimentos que te sacien y aporten nutrientes.</li>
    <h3>Prioriza alimentos enteros y sin procesar:</h3>
    <li>Verduras y frutas: Son la base de una dieta saludable. Inclúyelas en todas tus comidas, en abundancia. Son ricas en fibra, vitaminas y minerales.</li>
    <li>Proteínas: Carnes magras (pollo, pavo), pescado (blanco y azul), huevos, lácteos bajos en grasa, legumbres (lentejas, garbanzos, frijoles) y frutos secos. Las proteínas aumentan la saciedad, ayudan a mantener la masa muscular y aceleran el metabolismo.</li>
    <li>Carbohidratos complejos: Opta por cereales integrales (arroz integral, avena, pan integral, quinoa), legumbres y tubérculos (patata). Aportan energía sostenida y fibra.</li>
    <li>Grasas saludables: Aguacate, aceite de oliva virgen extra, frutos secos (almendras, nueces, chía, linaza). Son esenciales para la salud y la saciedad.</li>
  </ul>

  <h3>🚫 Evita o reduce:</h3>
  <ul>
    <li>Azúcares añadidos: Refrescos, jugos envasados, dulces, bollería. Son calorías vacías que contribuyen al aumento de peso y afectan la salud.</li>
    <li>Bebidas azucaradas y alcohólicas: Aportan muchas calorías sin nutrientes.</li>
    <li>Alimentos procesados y fritos: Suelen ser ricos en grasas poco saludables, sodio y azúcares.</li>
    <li>Carbohidratos refinados: Pan blanco, pasta blanca.</li>
  </ul>
  
  <h3>Hábitos alimentarios:</h3>
  <ul>
    <li>Desayuna: Iniciar el día con un desayuno rico en proteínas puede reducir los antojos y la ingesta calórica durante el día. Come de forma consciente y lenta: Disfruta de tus comidas, mastica bien y presta atención a las señales de saciedad de tu cuerpo. Come en un ambiente tranquilo, sin distracciones (televisión, celular). Controla las porciones: Usa platos más pequeños, mide las cantidades y sírvete en la mesa en lugar de directamente de los recipientes.</li>
    <li>No te saltes comidas: Realiza varias comidas pequeñas al día (desayuno, colación a media mañana, almuerzo, merienda, cena) para evitar llegar con mucha hambre a la siguiente comida y comer en exceso. Planifica tus comidas: Prepara tus menús con anticipación y haz compras inteligentes, evitando tener alimentos poco saludables en casa.</li>
    <li>Cena ligero: Opta por opciones bajas en calorías y fáciles de digerir.</li>
  </ul>

  <h3>🏃 Actividad física regular</h3>
  <ul>
    <li>Combina cardio y fuerza: Ejercicio cardiovascular (cardio):

Caminar, correr, nadar, andar en bicicleta, saltar la cuerda. Ayudan a quemar calorías y mejorar la salud cardiovascular. Se recomienda al menos 150 minutos de actividad moderada a la semana. Entrenamiento de fuerza: Levantamiento de pesas o ejercicios con peso corporal (flexiones, sentadillas, zancadas, planchas). Construir masa muscular es fundamental, ya que el músculo quema más calorías en reposo que la grasa, acelerando tu metabolismo.</li>

    <li>Mantente activo en tu día a día (NEAT - Termogénesis de la Actividad No Asociada al Ejercicio): Usa las escaleras en lugar del ascensor. Camina o usa la bicicleta para distancias cortas. Realiza caminatas cortas durante el día. Alterna entre estar sentado y de pie si trabajas en un escritorio. Encuentra actividades que disfrutes: Esto te ayudará a mantener la constancia.</li>
  </ul>

  <h3>💧 Otros hábitos saludables para la pérdida de peso y el bienestar general:</h3>
  <ul>
    <li>Hidratación: Bebe abundante agua durante el día (más de 2 litros). El agua no tiene calorías, ayuda a controlar el apetito y es crucial para el metabolismo.</li>
    <li>Sueño de calidad: Dormir entre 7 y 8 horas por noche es esencial. La falta de sueño puede afectar las hormonas que regulan el apetito y el metabolismo, aumentando los antojos de alimentos poco saludables. Manejo del estrés: El estrés puede llevar a comer en exceso. Busca formas saludables de manejarlo (meditación, yoga, hobbies).</li>
    <li>Sé paciente y establece metas realistas: La pérdida de peso saludable es gradual. No esperes resultados inmediatos. Un objetivo realista es perder entre el 0.5 y 1 kg por semana.</li>
    <li>Pésate regularmente: Monitorear tu peso puede ayudarte a mantener la motivación y ajustar tus hábitos si es necesario. Busca apoyo: Comparte tus metas con amigos, familiares o únete a un grupo de apoyo.</li>
  </ul>

  <h3>Consideraciones importantes:</h3>
   <p> Consulta a un profesional: Antes de iniciar cualquier plan de pérdida de peso, especialmente si tienes alguna condición de salud preexistente, es fundamental que consultes con un médico o un nutricionista. Ellos podrán brindarte un plan personalizado y seguro. Evita las dietas "milagro": Las dietas muy restrictivas o que prometen resultados rápidos suelen ser insostenibles y pueden ser perjudiciales para tu salud, además de generar el temido "efecto rebote".

Recuerda que perder peso no es solo una cuestión estética, sino una inversión en tu salud y bienestar a largo plazo.</p>

  <div class="blog-final">
    La pérdida de peso es un proceso gradual. Más que un cambio físico, es un cambio de estilo de vida que mejora tu salud y bienestar.
  </div>

</div>
`,

"Comida chatarra": `
<div class="blog-revista">

  <h2 class="blog-titulo">Comida Chatarra: Un Placer Culpable con Consecuencias Reales</h2>
  <p class="blog-categoria">Categoría: SALUD</p>

  <div class="blog-intro">
La comida chatarra, ese universo tentador de papas fritas crujientes, hamburguesas jugosas, dulces vibrantes y refrescos burbujeantes, ha conquistado paladares en todo el mundo. Es conveniente, accesible y, para muchos, irresistiblemente deliciosa. Sin embargo, detrás de esa fachada de gratificación instantánea, se esconde una realidad que impacta significativamente nuestra salud y bienestar.  </div>

  <h3>🍔 ¿Qué consideramos comida chatarra?</h3>
  <p>
Generalmente, se refiere a alimentos con altos niveles de calorías vacías , es decir, que aportan mucha energía pero pocos nutrientes esenciales como vitaminas, minerales, fibra y proteínas. Estamos hablando de productos procesados que suelen ser ricos en:  </p>

  <ul>
    <li>Azúcares añadidos: Responsables de picos de energía seguidos de caídas bruscas, y que contribuyen al aumento de peso y al riesgo de diabetes tipo 2.</li>
    <li>Grasas saturadas y trans:Que elevan el colesterol "malo" (LDL) y aumentan el riesgo de enfermedades cardíacas.</li>
    <li>Exceso de sodio: En exceso, contribuye a la hipertensión arterial y problemas renales.</li>
    <li>Harinas refinadas: Con bajo contenido de fibra, lo que afecta la digestión y la saciedad.</li>
  </ul>

  <p>Los ejemplos clásicos incluyen la bollería industrial, dulces, patatas fritas de bolsa, refrescos azucarados, ciertas pizzas comerciales, hot dogs y la mayoría de los productos de comida rápida.</p>

  <h3>⚠️ El impacto en nuestra salud</h3>
  <p>El consumo regular y excesivo de comida chatarra está directamente relacionado con una serie de problemas de salud graves:</p>
  <ul>
    <li>Obesidad y sobrepeso: La alta densidad calórica y la baja saciedad de estos alimentos promueven el consumo excesivo de calorías.</li>
    <li>Enfermedades cardiovasculares: El alto contenido de grasas poco saludables y sodio contribuye a la hipertensión, el colesterol alto y el riesgo de ataques cardíacos y accidentes cerebrovasculares.</li>
    <li>Diabetes tipo 2: El consumo elevado de azúcares y carbohidratos refinados desregula los niveles de glucosa en sangre.</li>
    <li>Problemas digestivos: La falta de fibra puede llevar a estreñimiento y otros trastornos gastrointestinales.</li>
    <li>Problemas dentales: Los azúcares son el principal factor en la formación de caries.</li>
    <li>Deficiencias nutricionales: Al desplazar alimentos más nutritivos, la dieta puede carecer de vitaminas y minerales esenciales.</li>
    <li>Impacto en el estado de ánimo y la función cognitiva: Algunos estudios sugieren una conexión entre una dieta alta en comida chatarra y un mayor riesgo de depresión, ansiedad y deterioro cognitivo.</li>
  </ul>

  <h3>🧠 ¿Por qué nos gusta tanto?</h3>
  <p>
La atracción por la comida chatarra no es casualidad. Las empresas invierten millones en investigación para crear productos que maximicen el "punto de deleite" , una combinación perfecta de sal, azúcar y grasa que estimula el centro de recompensa del cerebro, generando sensaciones de placer y, potencialmente, un ciclo de antojo y consumo. Además, factores como la conveniencia, el marketing agresivo y el bajo costo juegan un papel crucial en su popularidad.  </p>

  <h3>🥗 Hacia una Elección Más Saludable</h3>

  <p>No se trata de demonizar por completa la comida chatarra, ya que un consumo ocasional y consciente puede formar parte de una dieta equilibrada. La clave radica en la moderación y en priorizar una alimentación basada en alimentos frescos y mínimamente procesados. Aquí algunas estrategias:</p>

  <ul>
    <li>Planifica tus comidas: Reduce la tentación de recurrir a opciones rápidas y poco saludables.</li>
    <li>Lee las etiquetas: Conoce lo que estás comiendo. Presta al contenido atención de azúcares, grasas y sodio.</li>
    <li>Cocina en casa: Te permite controlar los ingredientes y la forma de preparación.</li>
    <li>Aumenta el consumo de frutas y verduras: Son ricas en fibra y nutrientes, y te ayudarán a sentirte más saciado.</li>
    <li>Bebe agua: A menudo, confundimos la sed con el hambre.</li>
    <li>Modera las porciones: Si vas a consumir comida chatarra, hazlo en pequeñas cantidades</li>
    <li>Busca alternativas saludables: Experimenta con recetas caseras de tus "placeres culpables" favoritos, pero con ingredientes más nutritivos.</li>
    <p>La comida chatarra representa un desafío en nuestra sociedad moderna. Entender sus efectos y tomar decisiones informadas es fundamental para proteger nuestra salud y construir un futuro más saludable. ¿Qué pasos podrías tomar hoy para reducir el consumo de comida chatarra en tu vida?</p>
  </ul>

  <div class="blog-final">
    No se trata de eliminarla por completo, sino de encontrar un equilibrio para cuidar tu salud sin dejar de disfrutar.
  </div>

</div>
`,
    imc: `
<div class="blog-revista">

  <h2 class="blog-titulo">¿Qué es el IMC?</h2>

  <p class="blog-categoria">Categoría: GENERAL</p>

  <p>
    El Índice de Masa Corporal (IMC) es un valor numérico que se obtiene al dividir el peso de una persona en kilogramos entre el cuadrado de su estatura en metros.
  </p>

  <p>
    Este indicador se utiliza para clasificar el peso corporal en categorías como bajo peso, peso saludable, sobrepeso y obesidad. Es una herramienta útil para evaluar el riesgo de problemas de salud relacionados con el peso.
  </p>

  <h3>Cálculo del IMC</h3>

  <div class="formula">
    IMC = peso (kg) / estatura² (m²)
  </div>

</div>
`,
    perderpeso: `
<div class="blog-revista">

  <h2 class="blog-titulo">Cómo Perder Peso de Forma Saludable</h2>

  <p class="blog-categoria">Categoría: GENERAL</p>

  <p>
Perder peso es un objetivo común para muchas personas, pero es crucial abordarlo de una manera saludable y sostenible. No se trata solo de los números en la báscula, sino de mejorar tu bienestar general y adoptar hábitos que puedas mantener a largo plazo.

Aquí te presentamos una guía para lograrlo.  </p>

  <h3>1. Establece Metas Realistas</h3>
  <p>
El primer paso es definir qué significa "perder peso" para ti. En lugar de aspirar a una pérdida rápida y drástica, enfócate en metas realistas. Una pérdida de 0.5 a 1 kilogramo por semana es considerada saludable y más sostenible. Esto te ayudará a evitar la frustración y el temido "efecto rebote".

  </p>

  <h3>2. Prioriza una Alimentación Equilibrada</h3>
  <ul>
    <p>La dieta juega el papel más importante en la pérdida de peso. No necesitas seguir dietas restrictivas o de moda. En su lugar, concéntrate en: Alimentos integrales: Prioriza frutas, verduras, granos enteros (avena, arroz integral, quinoa), proteínas magras (pollo, pescado, legumbres, tofu) y grasas saludables (aguacate, nueces, aceite de oliva). Control de porciones: Aprende a reconocer las porciones adecuadas para evitar comer en exceso. Usar platos más pequeños o medir tus alimentos puede ser útil al principio. Hidratación: Bebe suficiente agua a lo largo del día. A veces, la sed se confunde con el hambre. El agua también te ayuda a sentirte lleno y mejora el metabolismo. Limita alimentos procesados y azúcares añadidos: Estos productos suelen ser ricos en calorías, grasas no saludables y azúcares, y ofrecen poco valor nutricional. Planifica tus comidas: Prepara tus comidas con anticipación para evitar decisiones impulsivas y poco saludables cuando tengas hambre.</p>
    
  </ul>

  <h3>3. Incorpora Actividad Física Regular</h3>
  <p>

El ejercicio es un complemento esencial para la pérdida de peso y para mantener un cuerpo sano. No necesitas pasar horas en el gimnasio, comienza con lo que puedas y aumenta gradualmente: Ejercicio cardiovascular: Caminar a paso rápido, correr, nadar, andar en bicicleta o bailar son excelentes opciones para quemar calorías y mejorar la salud cardiovascular. Intenta al menos 150 minutos de actividad de intensidad moderada por semana. Entrenamiento de fuerza: Levantar pesas o hacer ejercicios con tu propio peso corporal (flexiones, sentadillas, planchas) ayuda a construir masa muscular. Más músculo significa un metabolismo más rápido, ya que el músculo quema más calorías en reposo que la grasa. Encuentra una actividad que disfrutes: Si te diviertes, es mucho más probable que seas constante.  </p>



  <h3>4. Descansa lo suficiente</h3>
  <p>
La falta de sueño puede sabotear tus esfuerzos para perder peso. Cuando no duermes lo suficiente, tu cuerpo produce más hormonas del estrés como el cortisol, que pueden aumentar el almacenamiento de grasa, especialmente alrededor del abdomen. Además, la privación del sueño puede alterar las hormonas que regulan el apetito, haciéndote sentir más hambre y antojos. Aspira a 7-9 horas de sueño de calidad por noche.  </p>

  <h3>5. Maneja el Estrés</h3>
  <p>
El estrés crónico también puede dificultar la pérdida de peso. Busca maneras saludables de manejarlo, como la meditación, el yoga, pasar tiempo en la naturaleza, leer o practicar hobbies que disfrutes.  </p>

  6. Sé Constante y Paciente
  <p>
La pérdida de peso no es un camino lineal. Habrá días buenos y días no tan buenos. Lo importante es ser constante con tus hábitos saludables y no desanimarte por los pequeños contratiempos. La paciencia es clave; los resultados sostenibles toman tiempo.  </p>

  <h3>7. Busca Apoyo Profesional si es Necesario</h3>
  <p>
Si tienes dificultades para perder peso por tu cuenta o tienes condiciones de salud preexistentes, considera buscar la guía de un profesional. Un médico, un dietista-nutricionista o un entrenador personal certificado pueden ofrecerte un plan personalizado y seguro.

 

Perder peso de forma saludable es un viaje que implica cambios en tu estilo de vida. Enfócate en el progreso, no en la perfección, y celebra cada pequeño éxito en el camino hacia una vida más sana y feliz.   </p>

  <p class="blog-final">
    Recuerda: no busques perfección, busca progreso. Cada pequeño avance cuenta 💙
  </p>

</div>
`,

  };

  contenido.innerHTML = info[tipo];
  modal.classList.add("activo");
}

function cerrarSubcard(){
  document.getElementById("modal-subcard").classList.remove("activo");
}
