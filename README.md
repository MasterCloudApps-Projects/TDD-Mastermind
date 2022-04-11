# Estudio de TDD aplicado en el dessarollo al Mastermind

## Indice

## Resumen
La aplicación que se propone en el trabajo de fin de master es para el estudio sobre el TDD haciendo su uso durenate el desarrollo del juego. Para ello, se creará una api-rest en el back y una interfaz web en front, se podrá jugar al juego tanto usando la interfaz como haciendo peticiones a la api.

A continuación, mostraremos la estructura de la memoria y describiremos brevemente los puntos:
- En el primer punto, `Objetivos`, se hablará de las principales razones por las que se ha decidido llevar a cabo este estudio.
- En el segundo punto, `Introducción`, en este punto se hablará del TDD, sus distintas escuelas [LUIS ni una palabra de chicago/londres!!!!!!!!!], los experimentos, los costes y una breve conclusión. 
- En el tercer punto, `Aplicación y problemas encontrados`, se hablará de como se ha aplicado el TDD en el desarrollo, los problemas encontrados en su aplicación y en que se defiere la teoría del TDD a su uso en un proyecto real. 
- En el cuarto punto, `Desarrollo y aplicación final`, aquí vamos a indicar que hemos hecho el desarrollo y la arquitectura de nuestra aplicación después de cada funcionalidad.
- En el último punto, `Conclusiones`, se reflexionará sobre el trabajo realizado y lecciones aprendidas de ello, también se hará una comparativa entre el TDD puro del libro y en que se difiere el TDD aplicado en un proyecto real. 


## Objetivos
El objetivo de este proyecto es realizar un estudio sobre TDD y sus distintas técnicas aplicándolas al desarrollo del Mastermind. En el libro original de TDD de Kent Beck, no se habla de distintas técnicas, sino de un solo modo. Pero actualmente hay distintas técnicas Inside-out y Outside-in, en este proyecto vamos a aplicar estas dos técnicas. Además, la manera de hacer esto según el libro es, escribir la prueba primero para el código, luego hacer escribir el código mínimo para pasar la prueba y, por último, refactorizar el código si hace falta. En este proyecto también vamos a ver si ese planteamiento es el adecuado o no. Aparte de estos puntos también vamos a ver tratar algunas cuestiones que en el libro no están muy claros o que nos se indican. 
LUIS: defines TDD clásico y luego te repites! Yo creo que aquí sería presentar el lío de varias escuelas: Chicago/Londres y decir que se va a experimentar con ambas en front y back!!! No definir solo TDD clásico

Para el desarrollo del proyecto vamos a usar distintas tecnologías, para el front vamos a usar Angular y para la ejecución de los test unitarios en el front usamos Karma, y para el desarrollo del back vamos a usar el SpringBoot y los test unitarios con JUnit. Para el control de versiones vamos a usar GitHub con la técnica de GitFlow con una rama por funcionalidad. 

## Introducción
[LUIS: no está bien jerarquizado, verdad?!?!?]

## TDD
TDD o Test-Driven Development (desarrollo dirigido por tests) es una práctica de programación que consiste en escribir primero las pruebas [LUIS: no sería pruebas en plural!!!!](generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito.

Para el uso del TDD se deben combinar 2 metodologías: Test-first development (escribir las pruebas primero) y Refactoring (refactorización de código). Para esto, se usa un ciclo de desarrollo que consta de 3 partes principales:
- La prueba debe fallar. (Red: Muchas herramientas muestran los fallos de las pruebas en rojo)
- La prueba debe pasar. (Green: Al igual que lo anterior, las herramientas muestran las pruebas que pasan en verde)
- Se debe mejorar el código. (Refactoring)

LUIS: primer y segundo párrafo se contradice! TFD es escribir "todas" primero!!! y eso no es parte de TDD: no todas antes!!!

El test-driven development se orienta según los resultados de los casos de prueba definidos por los desarrolladores. Su estructura cíclica garantiza que el código se transmita al sistema productivo únicamente cuando se hayan cumplido todos los requisitos del software. En otras palabras, los elementos del código se refactorizan y se vuelven a poner a prueba en tantas veces como sea necesario, hasta que el test ya no dé errores. Esta estrategia permite enriquecer el software poco a poco con nuevas funciones, redactando nuevo código fuente tras cada test superado. Por este motivo, el TDD se considera un modelo incremental de desarrollo de software.

Es una metodología de desarrollo cuyo objetivo es crear primero las pruebas !!!!!!! y luego escribir el software. Sus siglas en inglés son: Test Driven Development y en español significa: Desarrollo guiado por pruebas. 
LUIS: esto se repite en la primera frase de este apartado y está raro también!!!

Este concepto no es nada nuevo, fue a finales de los años 80 cuando se comenzó a utilizar esta metodología de desarrollo. 
Luis: qué concepto TFD o TDD?!?! pon una referencia de quién, dónde!?!?

Complicaciones que puede haber:
- Hay que pensar en lo que se quiere conseguir con el código y en cómo protegerlo para que no se rompa (probarlo).
- Tiene una curva de aprendizaje muy pronunciada. Es necesario aprender los principios y patrones de diseño para crear un código limpio y cómo refactorizarlo para mantenerlo así.
[LUIS saber diseño es siempre necesario, no por TDD!!!!!!!!!!!!]
- El código se defiende. El código existente que no está bajo prueba te pilla entre la espada y la pared. Necesita refactorizarlo para ponerlo bajo prueba y necesitas pruebas para refactorizarlo.

Los errores más comunes:
- No seguir el enfoque de «primero la prueba».
- No refactorizar todo el tiempo.
- Escribir más de una prueba a la vez.
- No ejecutar las pruebas con frecuencia, perdiendo la retroalimentación temprana de las mismas.
- Escribir pruebas que son lentas. Todo el conjunto debería completarse en minutos o incluso en segundos.
- Escribir pruebas sin aserciones.
- No escribir el código mínimo (suficiente para aprobar el test creado no más).
[LUIS: no se dónde va pero más adelante, no?!?!?!]

## Experimentos

### Experimentos en IBM y Microsoft
En 2008 se hicieron varios experimentos con varios equipos en igualdad de condiciones haciendo distintos desarrollos, esos equipos se dividieron en dos unos haciendo desarrollos con TDD y otros sin TDD. Todos los equipos eran similares entre sí en tamaño y velocidad y fueron seleccionados en función de sus diferentes características:
- Tenía un nivel de experiencia de desarrollo diferente, de menor a mayor.
- Tenía un nivel de experiencia de dominio diferente, de menor a mayor.
- Utiliza diferentes lenguajes y entornos de programación: Java, C ++, .NET.

Tras finalizar los experimentos, hallazgos fueron realmente interesantes:
- Los equipos de TDD estaban creando software con menos errores.
- Un equipo hizo un 40% menos de defectos que el equipo que no usaba a TDD.
- Otro equipo hizo entre 60–90% menos defectos que los becarios que usaban no TDD.
- Los equipos de TDD dedicaron entre un 15% y un 33% más de tiempo a escribir el código.
- El aspecto importante para mejorar la calidad fue la creación de la infraestructura de prueba automatizada, pruebas unitarias, de integración y funcionales.
- Los equipos que continuaron usando TDD después del experimento experimentaron una menor cantidad de defectos en la producción.
- La información interesante provino de un equipo de IBM que participo en el experimento. Después del experimento, algunos de los miembros del equipo dejaron de ejecutar las pruebas unitarias de regresión. La situación resultó en una mayor cantidad de defectos en la producción. 
[LUIS, tabla o estructurar lo que pone!!!!]

#### Las críticas
En los experimentos que realizó IBM, se ve una clara diferencia en la cantidad de los test unitarios realizados por los grupos que desarrollaban los distintos proyectos. El grupo que estaba haciendo el proyecto sin usar el TDD, no hizo los test unitarios hasta finalizar el desarrollo. Los test realizados después de la finalización fueron muy pobres y no tenían una buena cobertura. Por último, los test de aceptación que tenían que pasar los dos proyectos no se basaron en los test realizados por los grupos, sino que los tests los hizo un grupo distintos basándose en los requisitos del proyecto.

Los equipos de Microsoft partían con un poco de ventajas, y era que los equipos hicieron reuniones para definir los requisitos y a la reunión también asistió el equipo encargado de crear las pruebas de aceptación que al final tenían que pasar los proyectos.  Microsoft tenía tres grupos distintos, uno de los grupos seguía el enfoque hibrido “Waterfall” de Royce, que consiste en la creación de prototipos antes del proyecto final, otro equipo tenia un código heredado y no siguió ninguna técnica de desarrollo y el ultimo, utilizó metodologías agiles con TDD. No había medidas de particular para ver que proyectos pasaban mas los test, solo se utilizó como medida la cobertura de pruebas de cada proyecto. 

Tanto en el proyecto de IBM como en los de Microsoft, no hay medida homologada o eficaz para medir por completo como de bien funciona el TDD. Pero lo que si podemos saber con estos experimentos es que, si se utiliza el TDD desde etapas tempranas en los desarrollos, estos proyectos luego tienen un menos coste de mantenimiento. *Pero para tener unos números más exacto de la cuando es la diferencia si se utiliza o no el TDD* [LUIS, no se entiende], habría que hacer experimentos en un entorno mas controlado, tener unas medidas de evaluación más igualitarias y partir en los dos casos desde el mismo punto. 

### Experimentos de pares
Otro experimento se llevó a cabo entre 24 desarrolladores de software experimentados que se enfrentaron en pares. Donde un par escribía el código usando el TDD y otro par no. Los autores del experimento prepararon 20 pruebas de caja negra para verificar los resultados.

Los hallazgos fueron:
- Las aplicaciones escritas por los desarrolladores de TDD pasaron en promedio un 18% más de casos de prueba de caja negra que las aplicaciones escritas por desarrolladores que no son de TDD.
- Después del experimento, los desarrolladores reconocieron que TDD ayuda a comprender mejor los requisitos comerciales y que TDD facilitó su trabajo al reducir el tiempo y la energía para la depuración.

#### Criticas
En el experimento que se hizo con 24 pares personas la mitad desarrollando usado TDD y los otros pares sin TDD, tanto los que usaban TDD como los que no, tenían que escribir pruebas para probar el funcionamiento de la aplicación. Pero de los 12 pares que no usaban TDD solo un par hizo suficientes pruebas como para considerar validas. Por tanto, sacar las conclusiones viendo la cobertura de test y haciendo pasar al código pruebas de caja negra, no es muy fiable. 

De igual manera, decir que tardas mas en hacer el código si haces TDD es normal ya que no estas escribiendo pruebas?!?!??!?!??!?!?!??!?!? y por tanto tardas menos. Después de los experimentos por pares, se preguntó a los desarrolladores sobre la productividad, efectividad y la dificultad de adaptarse al TDD. 

En cuanto la productividad, la mayoría de los desarrolladores creían que el enfoque TDD facilita una mejor comprensión de los requisitos y reduce el esfuerzo de depuración. 

En cuanto a la efectividad, también la mayoría creían que TDD produce un código de mayor calidad y pensó que TDD promueve un diseño más simple. 

En cuando a las dificultades en adoptarse al enfoque, casi la mitad de los desarrolladores profesionales pensaban que meterse en la mentalidad de TDD fue difícil, una minoría indicó que la falta de la fase de diseño inicial en TDD fue un obstáculo. Por lo tanto, tomando promedio de las respuestas, el 40% de los desarrolladores pensaron que el enfoque enfrenta dificultades en la adopción.


#### Resumen: ¿Vale la pena TDD?
El costo de la sobrecarga de tiempo para escribir las pruebas unitarias se paga rápidamente porque el costo de los cambios que deben realizarse más tarde sin una cobertura de prueba automatizada es mucho mayor, en escenarios pesimistas puede aumentar exponencialmente. 

LUIS: esto no es comparable: TDD vs sin pruebas?!?!?

`Fuentes confiables confirman que el desarrollo basado en pruebas se conecta directamente con la mayor calidad del código, lo que resulta en menos defectos. En los lenguajes orientados a objetos, TDD está bien examinado y el retorno de la inversión (ROI) de los proyectos está respaldado con la mejor calidad.`

Pero las pruebas unitarias no debería ser la única capa de pruebas automatizadas de su sistema. También se expandir la capa de prueba unitaria mediante pruebas de integración, desarrollo impulsado por pruebas de aceptación (ATDD), desarrollo impulsado por el comportamiento (BDD) o, al menos, considerar dicha opción en su propio.
LUIS y?!?!?

#### Los costes
¿El costo real del cambio es exponencial o es plano? 
No hay razón para que el costo de realizar un cambio en el software deba ser tan alto como hace 30 años. Definitivamente se puede hacerlo mejor hoy, con mejores herramientas y formas mejores y más baratas de desarrollar software. Las claves para minimizar los costes del cambio pueden ser:

LUIS ya no entiendo nada!!!!!!!!!!!

- Poner el software en manos de los clientes lo más rápido posible. Es muy probable que ninguna organización realmente necesite impulsar cambios de software de 10 a 50 o 100 veces al día, pero tampoco se desea esperar meses o años para recibir comentarios. Entregar menos, pero más a menudo. Y debido a que se van a realizar entregas con más frecuencia, tiene sentido crear una canalización de entrega continua para que se puedan impulsar los cambios de manera eficiente y con confianza. Para el desarrollo de software usar lean y tal vez Kanban para identificar y eliminar el desperdicio y minimizar el tiempo del ciclo.
- Es importante no perder tiempo y dinero iterando cuando no es necesario. Pasar suficiente tiempo por adelantado en la comprensión de los requisitos y en el diseño para hacerlo bien al menos en su mayor parte la primera vez, se puede ahorrar mucho, más adelante.
- Ya sea que se esté trabajando de forma incremental e iterativa, o secuencialmente, tiene sentido detectar errores lo más temprano que se pueda, ya sea que se haga a través del desarrollo e implementación de prueba primero, o talleres de requisitos y revisiones de código, lo que sea que más funcional.

Vemos el solo TDD ufffffffffffff no ayuda a mejorar el coste, sino es el conjunto de todas las buenas prácticas. El TDD nos ayuda a detectar los errores y a hacer un código mas limpio, pero decir que con solo la implementación del TDD podemos mejorar mucho el coste, no es cierto. Además, cuando se habla del coste no solo se habla de TDD, sino de otros muchos factores que afectan al coste.

LUIS esto es tuyo o referenciaª!!!!!!!!!!!!!!!

## Las distintias corrientes del TDD:

LUIS: lee y añade ideas de https://martinfowler.com/articles/mocksArentStubs.html y https://groups.google.com/g/growing-object-oriented-software/c/dOmOIafFDcI
http://codemanship.co.uk/parlezuml/blog/?postid=987

En el primer libro Kent Beck, nos da unas series de pautas que podemos usar para hacer un mejor código y TDD. Entre ellas nos dice que tenemos que hacer una lista de las pruebas que vamos a hacer ahora y otra de las futuras pruebas, porque el nos dice que no podemos abarcar todo el programa en una misma iteración. Nos dice que un programa basado en pruebas puede parecer estar escrito tanto de arriba abajo, porque se ha comenzado con prueba que representa un caso simple, como de abajo a arriba, porque se ha comenzado con pequeñas partes y luego se le van agregado partes más grandes.

Por eso, dice que ninguna de las dos describe realmente como es el proceso. Porque no podemos *definar* el proceso como algo vertical, si tuviéramos que hacer en todo caso sería algo como de lo conocido a lo desconocido. Por eso, nos dice que no tenemos que abarcar todo el programa de una vez, sino que tenemos que centrarnos en una funcionalidad haciendo pequeñas iteraciones. De esta manera, si cada pequeña funcionalidad lo representamos como un palo, al final tendremos muchos palos que serían todas las funcionalidades y sobre esos palos estaría asentado nuestro programa. 
LUIS: ostiaaaaaaaaaaaaaaaaaaaaa fogata?!!!!!!!!!!!!!!!!!!

En su libro Kent Beck no habla del outside-in, porque en el libro original no habla de mocks, pero si que habla del inside-out pero no es puro, sino que son como hilos de abajo-arriba en pequeñas verticales y no todas las funcionalidades. 

Actualmente tenemos dos corrientes principales:
### Inside-Out

La escuela clásica (Inside-Out) se distingue por centrarse en la verificación del estado de los objetos, siendo por ello imprescindible que el contexto de los test siempre deba estar formado por `objetos reales`, configurados previamente. Para la correcta generación de estos contextos se pueden crear clases que nos ayuden.
La existencia previa de estos `objetos reales`, implica que el diseño de nuestra solución irá creciendo poco a poco desde la base hasta la funcionalidad final. De ahí el sobrenombre de técnica Inside-out. 

Aunque todos los desarrolladores deben tener en cuenta el panorama general, Inside Out TDD permite que el desarrollador se concentre en una cosa a la vez. Cada entidad (es decir, un módulo individual o una clase única) se crea hasta que se construye toda la aplicación. En cierto sentido, las entidades individuales podrían considerarse inútiles hasta que trabajen juntas, y conectar el sistema en una etapa tardía puede constituir un riesgo mayor. Por otro lado, centrarse en una entidad a la vez ayuda a paralelizar el trabajo de desarrollo dentro de un equipo.

Tomando el juego Tic-Tac-Toe como ejemplo, una solución podría incluir al menos tres entidades: un tablero, las notificaciones y un juego.

Usando el enfoque Inside Out, el tablero y las notificaciones se pueden identificar fácilmente como independientes, mientras que el juego integra las entidades en todo el sistema.

El desarrollador se puede centrar primero en las entidades independientes, creando los test y las funcionalidades de esas entidades. Todas las funcionalidades de las entidades independientes van a funcionar perfectamente ya no requieren ningún tipo de interacciones con alguna otra entidad. Con esto, el desarrollador está abordando una pieza aislada de funcionalidad a la vez. Pero cuando se trata del Juego, que es el nivel superior, todas las piezas deben estar juntas, con las entidades individuales interactuando entre sí.

Centrarse inicialmente en las entidades individuales hace que el riesgo de que estas entidades no interactúen correctamente entre sí se lleva a una etapa posterior. Si las entidades no se comunican como se esperaba, se volverá a trabajar.

Esto demuestra que cuando se usa Inside Out TDD, no se requiere una comprensión completa del diseño del sistema al principio. Solo es necesario identificar una entidad para comenzar. Los detalles internos de esa entidad surgen mediante el uso de pruebas unitarias específicas, lo que lleva a un diseño que se adhiere bien al Principio de Responsabilidad Única (SRP). En la etapa inicial, no siempre está claro qué comportamiento debe exponerse en una entidad. Esto podría dar como resultado que se exponga más o menos comportamiento de lo necesario.

Con Inside Out, si hay un grupo de entidades que expresan un comportamiento, como el Juego, las pruebas unitarias pueden abarcar más de una entidad (ya que también se están utilizando el Tablero y las notificaciones). Esto significa que las entidades colaboradoras se pueden reemplazar sin cambiar la prueba, proporcionando un marco para una refactorización segura.


LUIS Aqui paro!!! Revisa, reescribe .................. esta tabla no hay quien la lea!!!!!!!!!!!!!!!!!!!!


|                                             Lo bueno                           |                                             Lo malo                                          |
|                                            -----------                         |                                          -----------                                         |
| Un camino muy claro y fácil para comenzar, conociendo su capa de comunicación de backend, puede comenzar con la capa de red genérica (si es necesario), aplicar TDD y también respuestas API de stub desde el principio.                                       | En algún lugar entre los casos de uso y la vista, comenzará a detectar e intentar resolver                                                                                            las diferencias en los conceptos que provienen de la lógica de dominio y la vista (UX).      |
| Complejidad incremental, fácil de seguir.                                      |  Muchas veces los cambios serán muy profundos, muchas veces también habrá que cambiar los                                                                                              conceptos completos. Cuando se hagan cambios en el nivel inferior, requerirán un montón de cambios                                                                                    de interfaces hasta la parte superior, lo que inducirá muchos cambios horizontales dolorosos en la                                                                                    misma capa.                                                                                   |
| Puede probar la integración desde las primeras etapas de desarrollo            | Dado que la capa subyacente siempre estará preparada, probada y funcionando, no siempre creará                                                                                        simulacros para ellos, manteniendo así la capacidad de prueba separada de cualquier componente                                                                                        adicional más alta, lo que afectará especialmente y el tipo de prueba de comportamiento potencial                                                                                      de los mismos. Como consecuencia, es posible que deba depurar todas las capas en lugar de detectar                                                                                    un problema en la real.                                                                       |
|                                                                                |La implementación oscilante de los cambios hacia abajo y hacia arriba podría alterar seriamente el                                                                                        cronograma de entrega y los costos esperados.                                               |
|                                                                                |Cada viaje de refactorización hacia abajo y hacia atrás reducirá involuntariamente la calidad del                                                                                       código.                                                                                       |
|                                                                                |Probablemente terminará con un código que no será necesario en absoluto (YAGNI).                |
		
		
### Outside-In

La escuela de Londres (Outside-In) toma un enfoque distinto, centrándose en verificar que el comportamiento de los objetos es el esperado. Dado que este el objetivo final, verificar las correctas interacciones entre objetos, y no el estado en sí mismo de los objetos, mediante este enfoque podremos ahorrarnos todo el trabajo con los objetos reales (creación y mantenimiento) sustituyéndolos por dobles de test.

Siendo este el caso, podremos empezar por la funcionalidad final que se necesita, implementando poco a poco toda la estructura que dé soporte a dicha funcionalidad. Por esto, esta técnica recibe el nombre de Outside-in, en este caso, desarrollando las funcionalidades desde el exterior hacia dentro.

Outside In TDD se presta bien a tener una ruta definible a través del sistema desde el principio, incluso si algunas partes están inicialmente codificadas.

Las pruebas se basan en escenarios solicitados por el usuario y las entidades están conectadas desde el principio. Esto permite que surja una API fluida y la integración se demuestra desde el inicio del desarrollo.

Al enfocarse en un flujo completo a través del sistema desde el principio, se requiere conocimiento de cómo las diferentes partes del sistema interactúan entre sí. A medida que emergen las entidades, se mockean, lo que permite que sus detalles se difieran hasta más tarde. Este enfoque significa que el desarrollador necesita saber cómo probar las interacciones desde el principio, ya sea a través de un marco de simulación o escribiendo sus propios dobles de prueba. Luego, el desarrollador retrocederá, proporcionando la implementación real de las entidades falsificadas o simuladas a través de nuevas pruebas unitarias.

Al usar Outside In TDD, el enfoque suele estar en cómo interactúan las entidades más que en sus detalles internos, de ahí el uso de pruebas de aceptación de alto nivel. En el exterior, las soluciones a menudo aplican la Ley de Deméter: nunca se crea una nueva entidad sin que la entidad primaria pregunte qué quiere de ella. Esto se adhiere bien al principio "Diga, no pregunte", y da como resultado que el estado solo se exponga si lo requieren otras entidades. 
Los detalles de implementación del diseño están en las pruebas. Un cambio de diseño generalmente da como resultado que las pruebas también se modifiquen. Esto puede agregar más riesgo o requerir más confianza para implementarlo.

También es importante remarcar el uso de la técnica del doble bucle:
- Comenzaremos por un test de aceptación que falle en el bucle externo, lo que nos guiará al bucle interno.
- En el bucle interno, que representa la metodología de trabajo TDD («Red-Green-Refactor»), implementaremos la lógica de nuestra solución.
- Realizaremos las iteraciones necesarias de este bucle interno hasta conseguir pasar el test de aceptación.

|                                             Lo bueno                           |                                             Lo malo                                         |
|                                            -----------                         |                                          -----------                                        |
| Comenzará con los requisitos del usuario, es decir, desde el inicio del Producto, desde cómo debería funcionar la aplicación.                                                                                                                                        | No hay forma de que los eventuales cambios en cualquier capa se puedan evitar por completo. |
| Al bajar las capas, siempre podrá simular una conexión suelta hacia abajo, manteniendo así cada capa en una forma perfectamente comprobable y preservando un alto nivel de    modularidad, lo que significa capacidad de mantenimiento y capacidad de cambio a nivel de componente.                                                                                                                                                                   | Aunque bajar las capas requiere bastante tiempo, un desarrollador aún tendrá que hacer una                                                                                            evaluación de los requisitos del usuario en comparación con las API existentes e inducir cambios                                                                                      potenciales si es necesario.                                                                 |
|	TDD será tan fluido como con el enfoque Inside-Out, pero además podrá aplicar BDD completo de todas las capas desde el principio.                                                                                                                               | Problema de actualizar el doble cuando cambia el comportamiento de la clase del doble.       |
|  Con cada paso de desarrollo hacia la API, verá más fácil y rápido si es necesario un cambio. Esto le da más tiempo a la API para ser adaptada (o reemplazada por otra generalmente de Middleware) y el cambio de API no requerirá ningún cambio en el código como lo hace con Inside-Out.
En consecuencia, no habrá muchos cambios oscilantes hacia arriba y hacia abajo de las capas.
La API se puede adaptar a las necesidades del producto y no al revés.             |                                                                                              
		
## Aplicación y problemas encontrados
Para los desarrollos se decidió usar inside-out para el Backend y outside-in para el Frontend.
 ### Backend
Para el desarrollo del Backend se decidió usar la técnica de inside-out, para este desarrollo se han seguido las indicaciones del libro de Kent Beck, donde nos indica que no hay que hacer desarrollo de toda la funcionalidad de manera horizontal y luego ir subido hacia arriba, sino que hay que desarrollar una pequeña funcionalidad e ir subiendo hacia arriba haciendo desarrollos verticales. 

Además, al tener distintas funcionalidades, se han seguido distintos enfoques para el desarrollo. Para la primera funcionalidad se uso el TDD puro, escribiendo el test para que primero falle, luego implementar el código mínimo para que pase el test, luego escribir el test para el funcionamiento y luego escribir el código para que el test anterior funcione. 
Nada mas empezar el desarrollo incumplimos una de las cosas que nos dice en el libro y es que, en el libro se indica que no hay diseñar y eso es algo imposible de incumplir ya que nada más empezar a desarrollar se diseña, incluso antes de empezar cuando decidimos que tecnología usar, incluso cuando elegimos por donde empezar front o back, ya estamos diseñando. Cuando Kent Beck dice que no hay que diseñar se refiere a no hacerlo sobre el papel haciendo diagramas antes de empezar, el no diseñar supone un gran problema ya que para empezar a desarrollar hay que tener un mínimo de diseño previo, aunque no sea sobre el papel. Ya que el tener un diseño previo luego evita que tengas que rediseñar la aplicación cuando estás desarrollando, eso fue uno de los problemas que tuvimos cuando estábamos haciendo el desarrollo. Porque empezamos haciendo el desarrollo de una funcionalidad y en la siguiente iteración vimos que al juntar esa funcionalidad con la otra había que cambiar el diseño, por eso tener un mínimo de diseño previo nos ayuda con el desarrollo.

Otro de los problemas de no diseñar fue que no sabíamos por dónde empezar, aunque se diga que hay que empezar desde lo más abajo eso es muy ambiguo. Porque cómo no tienes un diseño puedes empezar desde lo que sería más abajo de verdad que serían las entidades,  

![Entity-Service-Controller-User](Documentation/Entity-Service-Controller-User.PNG)

o también puedes empezar desde los servicios ya que no sabemos que tiene porque haber una entidad.

![Service-Controller-User](Documentation/Service-Controller-User.PNG)

También puedes empezar directamente desde el controlador porque hasta que no tengas una segunda funcionalidad que desarrollar no necesitas un servicio o una entidad y el controlador directamente puede tener el código de la primera funcionalidad y no hacer ninguna llamada a una clase de más abajo.

![Controller-User](Documentation/Controller-User.PNG)

Las tres opciones serían igual de válidas, porque si empezamos desde el controlador en la primera funcionalidad no necesitamos crear ningún tipo de objeto concreto para devolverlo, directamente podríamos devolver la respuesta creando el objeto básico en el mismo controlador. Para la opción de crear un servicio para devolver el objeto podría tener exactamente la misma funcionalidad que el controlador sin tener que crear ningún tipo entidad concreta, se podría mapear y crear el objeto directamente en el Service y devolverlo. No sería necesario crear una entidad hasta que haya que hacer otra funcionalidad y devolver el mismo tipo de objeto, porque si no creamos una entidad tendríamos mucho código duplicado. Incluso teniendo código duplicado no hay una necesidad real de crear una entidad hasta que no tengamos que cruzar esa entidad con otra para crear un objeto en conjunto. Por eso el no tener un diseño previo puede complicar mucho el desarrollo si no has empezado desde el sitio correcto.

Debido a esto de no diseñar tuvimos un problema que fue que luego en la segunda iteración haciendo el proposal combination hubo que modificar el código ya implementado en la primera iteración sobre el Secret combination. Si hubiéramos tenido un primer diseño luego no habríamos tenido que modificar el código ya implementado, Debido a esto también hubo código que se quedó obsoleto.

#### Técnicas de desarrollo
Para la primera funcionalidad cumplimos de pie a la letra el TDD según el libro de Kent Beck, pero vimos que para desarrollos tan pequeños como el nuestro había algunos pasos intermedios que eran innecesarios. El TDD puro está más orientado a proyectos complejos donde la lógica de negocio sea compleja, para proyectos pequeños hacer el TDD de puro puede ser un inconveniente ya que en lugar de ayudar puede hacer que perdamos el tiempo en pequeñas interacciones tales como en las que tengamos que devolver un valor predefinido. En estos casos hacer muchas iteraciones nos hace perder el tiempo ya que tendríamos que hacer primero una interacción dónde creamos el test 

![maxWigth1](Documentation/maxWigth1.PNG)

y el código mínimo para que ese test pase, luego tendríamos que hacer una siguiente iteración donde creamos el código para devolver un valor nulo 

![maxWigth2](Documentation/maxWigth2.PNG)

y una última iteración dónde ya devolvemos el valor que se ha decidido de antemano.

![maxWigth3](Documentation/maxWigth3.PNG)

![maxWigth4](Documentation/maxWigth4.PNG)
 
Por eso en estos casos hacer el TDD puro nos puede hacer perder tiempo y que en estos casos es más adecuado hacer el TFD.

Para el desarrollo de la segunda funcionalidad teniendo en cuenta las conclusiones sacadas de la primera funcionalidad se decidió no hacer el TDD estricto sino en lugar de hacer un commit después de cada iteración se decidió a hacer un commit después de desarrollar la mini funcionalidad completa. Al hacer esto vimos que para esta funcionalidad se mejoró el tiempo de desarrollo, pero ese tiempo de desarrollo se vio afectado por no tener un diseño previo y tener que modificar el código ya existente para incorporar el código de la nueva funcionalidad.

para la última y la tercera funcionalidad se decidió cambiar de enfoque de desarrollo y en lugar de hacer el código de inside-out se decidió hacer outside-in para que de esta manera tener los dos puntos de vista y ver cómo afecta al desarrollo. 

#### Las dudas 
Haciendo este desarrollo nos surgieron unas cuantas dudas:
- La primera de las dudas es, ¿cuánto código debe ser probado?, pueden haber casos que solamente nos retornen un valor que es predefinido entonces, ¿es necesario probar ese código?
- Otra de las dudas es, ¿qué tipo de test se tienen que hacer para probar los controladores?, ya que los controladores la función que tienen es de entrada y salida de datos. Entonces se debería probar ese controlador con test unitarios y además con los test de integración pruebe sí toda la funcionalidad implementada de los servicios y de las entidades funciona correctamente, o los tests de integración no harían falta ya que haciendo el desarrollo de los servicios y las entidades ya hemos probado esa funcionalidad.
- La siguiente duda es si podríamos crear un mini framework para las pruebas de los controladores y los servicios, porque en muchos casos los test son muy similares ya que lo único que hay que probar es la entrada de datos y la salida de esos datos después de haberles aplicando la lógica de negocio.

#### Conclusiones 
Haciendo el desarrollo Inside-out nos hemos dado cuenta de que, aunque no hayamos tenido que crear mocks como en el caso de outside-in, pero sí hemos tenido que modificar el código ya implementado en varias ocasiones porque al no haber un diseño previo no se podía saber cómo va a afectar el nuevo código implementado al código ya existente. Al final podemos pensar que al usar Inside out nos estamos ahorrando el tiempo que tardaríamos en implementar los mocks pero no es así ya que podemos perder el mismo tiempo modificando el código ya implementado adaptándolo al nuevo código.

### Frontend 
Para el desarrollo del Frontend se utilizó la técnica de outside-in, esta técnica consiste en empezar a hacer el desarrollo desde los elementos más cercanos al usuario. En este caso, estos elementos serían las pantallas que vería el usuario para interactuar con nuestra aplicación. Para estos elementos también se han hecho desarrollos verticales desde el usuario hasta el back, en lugar de hacer desarrollos horizontales con todas las funcionalidades. En estos casos, al tener también distintas funcionalidades hemos decidido jugar un poco con el TDD para ver cómo afecta a los tiempos de desarrollo y a la dificultad, si hacemos TDD de puro o un TDD más adaptado a nuestro proyecto.

#### Desarrollo
Se empezó el desarrollo con el Secret combination, que consiste en mostrar una combinación secreta que recuperamos desde el backend y lo mostramos al usuario. Para esta funcionalidad usamos el TDD puro, haciendo un commit por cada test y su código correspondiente. Al tratarse del Frontend incumplimos una de las normas que tenemos para hacer desarrollos con TDD, la norma del código mínimo, ya que para pasar el test mínimo tenemos que crear tanto código en los componentes como código en los archivos HTML. 

![Front-initial-commit](Documentation/Front-initial-commit.PNG)

Para el desarrollo del front se ha usado Angular con TypeScript, para la cobertura de los test se ha usado Karma y para el testing se han usado los componentes propios de Angular. Haciendo el desarrollo del front con el outside-in, da la sensación de que avanzamos bastante ya que, aunque se haga el código mínimo para pasar el test, ese código incluye elementos tantos del HTML como del componente. Por eso, vamos avanzando más de cara al usuario que si hacemos un desarrollo basado en Inside-out dónde todo el código que se implementa el usuario no lo llega a ver. Aunque el tiempo que se tarda en implementar este código mínimo es bastante mayor ya que, hay que implementar tanto el código cómo los datos mokeados que vamos a usar hasta que podamos conectar nuestra aplicación con el Backend.

para la segunda parte del desarrollo se decidió no seguir un tdd tan puro, sino uno más adaptado a nuestro proyecto y para la tercera parte se decidió cambiar del enfoque de outside-in a uno de Inside-out para ver cómo afecta al desarrollo del Frontend.

#### Las dudas
Las dudas que nos han surgido haciendo este desarrollo de la parte de Frontend son:
- ¿Cuánto del código implementado hay que probar?, haciendo el desarrollo del Frontend usando TDD de nos hemos dado cuenta de que está más orientado a hacer desarrollos en lenguajes de programación orientado a objetos.
- Si estamos haciendo el desarrollo del Frontend y no podemos cumplir la regla del código mínimo, ¿de verdad estamos haciendo TDD o es solo desarrollo basado en TFD (Test First Development)?
- Si nos toca cambiar el código HTML pero no tenemos cobertura de test para eso, ¿seguiría siendo TDD? 
- Cuando conectemos los componentes a los servicios que hacen las llamadas al Backend, ¿tendríamos que quitar los mocks en una interacción diferente o los podríamos quitar en la misma iteración en la que conectamos el componente con los con el servicio?

#### Conclusiones
Haciendo el desarrollo del Frontend con el TDI nos hemos dado cuenta de que el TDD no está pensado para hacer desarrollos con lenguajes no orientados a objetos. También nos hemos dado cuenta de que hay otros cuántos aspectos que no están claros, como por ejemplo, cuando hacemos el desarrollo del front siguiendo el TDD no tenemos ningún tipo de instrucción sobre cómo implementar el código HTML y CSS. 

### Conclusiones generales
Haciendo el desarrollo con TDD nos hemos dado cuenta de que hay bastantes lagunas respeto a la forma de hacer el desarrollo. En primer lugar, no está muy claro qué tipo de tests tienen que ser los que prueben nuestro código, tampoco está claro qué parte del código debe ser probado. ¿Tenemos que probar todo el código y todos los métodos (get, set, negocio) o podemos no probar los métodos simples de gets y los sets? Tampoco deja claro qué hacer en caso de que escribamos código que no puede ser probado, ¿tenemos que seguir haciendo TDD para escribir esa parte del código o podemos no hacerlo?

En segundo lugar, hemos visto que el TDD está muy orientado a las personas con bastante experiencia escribiendo código, ya que empezar a escribir el código sin tener un diseño previo no es posible a no ser que tengas bastante experiencia y que solamente con saber los requisitos seas capaz de diseñar en tu mente cómo quedaría la estructura de las clases de la aplicación. 

En el tercer lugar, para los desarrollos Inside-out no se indica desde donde se debería empezar el desarrollo, lo que hace que los programadores poco experimentados puedan tener problemas luego de empezar el desarrollo, porque puede que tengan que modificar algunas de las clases sean implementadas posteriormente. 

En cuarto lugar, hemos visto que tampoco se indica nada sobre qué hacer cuando al escribir un test y su prueba hacen que el otro test falle. En estos casos, lo que podríamos hacer es o bien seguir desarrollando el test y el código y dejar como está el test que ha fallado y luego en la siguiente iteración corregir ese test. O bien, lo que podríamos hacer es, ya que sabemos que el test que vamos a implementar va a hacer que otro test falle, podríamos primero adaptar el test que va a fallar para qué al implementar el nuevo test y código éste no falle. Tampoco deja claro qué hacer en caso de que necesitemos el código de otra clase y ese código todavía no está implementado, en el libro se indica que, si estamos desarrollando la clase uno y necesitamos el código de la clase dos, entonces la clase dos deberá ser probada en la clase uno. Pero no se indican y el orden en el que se tienen que desarrollar, se da suponer que primero se desarrollaría la clase dos sin probar y luego se usaría ese código en la clase uno probando así las dos clases. Pero de esa manera no estaríamos haciendo el TDD, ya que en TDD se escribe antes la prueba que el propio código. Tenemos que hacerlo de esta manera ya que, si desarrollamos primero la clase uno entonces no tendríamos disponible el código de la clase dos, y tendríamos error al compilar la aplicación lo que no nos dejaría avanzar en el desarrollo. Pero este enfoque de desarrollar sin probar nos deja con otro problema, y es, qué hacer si el código de la clase dos que hemos implementado sin probar falla, tenemos que corregirlo en una integración sin TDD o tenemos que hacerlo usando TDD y mientras probamos el código de la clase uno. 

En el último lugar, haciendo el desarrollo TDD en cualquiera de sus dos variantes tiene sus propios inconvenientes, si hacemos el usando Inside-out, el inconveniente es que, al no tener un diseño previo, luego en las etapas más avanzadas podemos tener que modificar el código ya implementado y los tests correspondientes a ese código. Y haciendo el desarrollo con Outside-in, el inconveniente es que al empezar por arriba tenemos que mockear las clases de abajo. Y que en las etapas más avanzadas de desarrollo tengamos que modificar alguno de estos mocks y el código o los tests asociados a este fallen, ya que no los hemos adaptado a los nuevos mocks.

## Desarrollo y aplicación final
Para el desarrollo de esta aplicación hemos usado distintas tecnologías, para el Backend, hemos usado Spring-Boot con Maven y para el desarrollo de los test unitarios hemos usado jUnit con Mockito y rest-assured para los test de integración. No tenemos una base de datos ya que esta aplicación solamente nos permite jugar a una partida de Mastermind sin la posibilidad de guardar nada, esto lo hemos hecho de esta manera ya que nos hemos centrado más en investigar y hacer el desarrollo con TDD que la propia aplicación.
Para el desarrollo de Frontend hemos usado Angular Material con TypeScript, y para los test unitarios hemos usado la propia herramienta de Angular y hemos usado Karma para saber la cobertura de los test.

### Backend 
#### SecretCombination
Para la primera funcionalidad decidimos usar el TDD puro con la técnica de inside-out.
La primera funcionalidad que decidimos desarrollar fue la de SecretCombination, empezamos creando el enumerado Color, este número tiene todos los colores que vamos a mostrar y con los que vamos a jugar nuestro juego de Mastermind. Después de haber creado el enumerado Color, creamos la clase Combination que tiene un array de uno a cuatro colores y la funcionalidad de devolver este array. Después creamos la clase de SecretCombination que extiende la clase Combination y por ahora solamente tiene una funcionalidad y es tener una combinación secreta Random de cuatro colores. Después de SecretCombination creamos la clase Board, este Board por ahora tiene solamente SecretCombination y la única funcionalidad de devolverlo. Después de esto creamos el servicio y el controlador para la clase de Board. En este punto la arquitectura sería:

![Arquitectura1](Documentation/Arquitectura1.PNG)

Hemos decidido seguir este camino porque es el que nos ha parecido más correcto de cara a los próximos desarrollos. Pero este no es el único camino que podíamos haber seguido, podríamos haber empezado directamente por el Secret combination y que devolviera los colores directamente. Ya que hasta este punto no tenemos la necesidad de crear un enumerado de colores o la clase combination, porque hasta este punto no tenemos ninguna necesidad de crear esas clases extras. Pero decidimos crear estas clases ya que sabemos que en el futuro vamos a tener otra clase ProposalCombination que va a usar la clase combination, por eso decidimos crear estas clases de antemano para no tener que volver a modificar y adaptar el código. Esta primera funcionalidad también podríamos no haber creado la clase Board y devolver directamente el SecretCombination usando el Service y el Controlador, pero por la misma razón de no volver a modificar el código decidimos crear esta clase ya que sabemos que se va a utilizar en el futuro y lo vamos a necesitar.

#### ProposalCombination
Para la segunda funcionalidad usamos un TDD más adaptado a nuestra aplicación, donde no hacíamos un commit después de cada pequeña funcionalidad sino después de haber desarrollado toda la funcionalidad de un método al completo. 
La segunda funcionalidad que decidimos desarrollar fue la de ProposalCombination, esta clase ProposalCombination extiende a la clase Combination y devuelve la lista de colores que tiene. Después de esto modificamos la clase Board, para añadirle otros dos atributos, un array de ProposalCombination y el actualIntent. También se han añadido las funcionalidades de obtener estos dos atributos y de poder añadir una combinación de colores indicada por el usuario al array de ProposalCombination del Board.

![Arquitectura2](Documentation/Arquitectura2.PNG)

#### Result 

### Frontend
#### SecretCombination
para la primera funcionalidad del front también decidimos usar el TDD puro con la técnica de outside-in.
La primera funcionalidad del front que decidimos desarrollar también fue la del SecretCombination, se hizo de esta manera para poder seguir con la indicación que nos daba Kent Beck en su libro. Donde decía que había que desarrollar una funcionalidad desde lo más abajo hasta el usuario de manera vertical. 

Empezamos creando la clase Board que tiene como atributo la clase SecretCombination, también hemos creado el componente, el HTML y el CSS correspondiente a esta clase Board. al principio de este desarrollo el componente Board sacaba sus datos de un mock, pero luego creamos el servicio para el Board y lo conectamos al Backend, para que de esta manera los datos obtenidos fueran reales. No hemos creado la clase SecretCombination, ya que SecretCombination solamente lo vamos a mostrar y no vamos a hacer ningún otro tipo de gestión con él. Por eso, lo hemos creado como atributo de la clase Board que es a su vez un objeto que tiene una combinación y maxWidth.

#### ProposalCombination 
Para la segunda funcionalidad siguiendo el ejemplo del Backend decidimos usar un TDD más adaptado a nuestra aplicación, haciendo un commit por la funcionalidad completa del método.
Para el ProposalCombination sí que creamos una clase aparte, ya que éste ProposalCombination no solamente se va a mostrar al usuario, sino que también lo tenemos que mandar al Backend dónde va a ser añadido a la lista del Board y comprobado si coincide con nuestra combinación secreta. Esta clase de ProposalCombination se añadió a la clase Board como un array.

#### Result


### Bibliografía

Outside-In or Inside-Out: https://itnext.io/outside-in-or-inside-out-london-or-chicago-school-part-1-greenfield-projects-d324390a0dbd

TDD: Outside-In vs Inside-Out: https://www.adictosaltrabajo.com/2016/01/29/tdd-outside-in-vs-inside-out/

From the Inside Out or the Outside In: https://8thlight.com/blog/georgina-mcfadyen/2016/06/27/inside-out-tdd-vs-outside-in.html

Que es TDD: https://ed.team/blog/que-es-el-tdd

TDD: https://softwarecrafters.io/javascript/tdd-test-driven-development

Cost of the changes: https://www.crowdbotics.com/blog/tdd-x-roi-is-test-driven-development-worth-the-money

[Nagappan et al.] Nachiappan Nagappan, E. Michael Maximilien, Thirumalesh Bhat, Laurie Williams. Realizing quality improvement through test driven development: results and experiences of four industrial teams. Kluwer Academic Publishers, 2008. doi>10.1007/s10664–008–9062-z.

[Boby et al.] Boby George, Laurie Williams. An Initial Investigation of Test Driven Development in Industry. 2003. ISBN 1581136242. doi>10.1145/952532.952753.
