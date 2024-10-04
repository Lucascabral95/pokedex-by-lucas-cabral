import { Link } from "react-router-dom";
import EstructuraTerminosCondiciones from "./EstructuraTerminosCondiciones";

export default function AvisoDePrivacidad() {
    return (
        <>

            <EstructuraTerminosCondiciones

                contenido={
                    <>

                        <div className="titulo" id="inicio">
                            <h3> Aviso de privacidad </h3>
                        </div>

                        <div className="div-de-coppa">
                            <div className="contenedor-texto">
                                <div className="texto">
                                    <p> Última actualización, 22 de noviembre de 2021</p>
                                    <p> Nuestro Compromiso de privacidad</p>
                                </div>
                            </div>
                            <div className="contenedor-imagen">
                                <div className="img">
                                    <img src="/img/coppa-logo.png" alt="Caru Coppa" />
                                </div>
                            </div>
                        </div>

                        <div className="parrafo">
                            <span>Pokémon respeta sus derechos de privacidad y reconoce la importancia de proteger su información personal (o «datos personales»). Nuestro Aviso de privacidad describe el tipo de información personal que recopilamos, por qué lo hacemos, cómo la compartimos y las opciones al respecto de las que usted dispone.</span>
                        </div>

                        <div className="parrafo">
                            <span>  Asimismo, reconocemos la necesidad de proporcionar protección adicional a los menores que visiten o utilicen nuestros Servicios. Para obtener más información sobre la protección de privacidad de los menores, consulte el Aviso de privacidad de Pokémon en relación a los menores. </span>
                        </div>

                        <div className="parrafo">
                            <span> Pokémon es un licenciatario válido y un miembro participante debidamente inscrito en el Programa de Puerto Seguro de COPPA de la Unidad de Revisión de Publicidad Infantil (“CARU”, por sus siglas en inglés; en adelante, “Puerto Seguro de CARU”). CARU realiza auditorías independientes de nuestros Servicios y utiliza otros mecanismos de control de cumplimiento y rendición de cuentas en su proceso de certificación. Los Servicios en los que aparece el icono del Puerto Seguro de CARU satisfacen las prácticas establecidas para la recopilación, el uso y la divulgación de información en línea, en cumplimiento con las mejores prácticas y las leyes de privacidad pertinentes. </span>
                        </div>

                        <div className="parrafo">
                            <span> EXENCIÓN DE RESPONSABILIDAD: Aunque CARU no controla los servicios que no se prestan en EE. UU. ni en pokemonCenter.com, Pokémon toma medidas para confirmar que ambos cumplan con las pautas y los principios pertinentes de recopilación de datos, según lo estipulado por el Puerto Seguro de CARU, incluida la adhesión a las disposiciones de la UE y otros territorios fuera de los Estados Unidos (“EE. UU.”). </span>
                        </div>

                        <div className="parrafo">
                            <span> ÍNDICE </span>
                        </div>

                        <div className="parrafo">
                            <strong> Aviso de privacidad </strong>
                        </div>

                        <div className="lista">
                            <ul>
                                <li>
                                    <a href="#inicio"> ¿Qué cubre este Aviso de privacidad? </a>
                                </li>
                                <li>
                                    <a href="#informacionPersonal"> ¿Qué información personal se recopila sobre usted? </a>
                                </li>
                                <li>
                                    <a href="#usoInformacionPersonal"> ¿Qué uso hacemos de su información personal? </a>
                                </li>
                                <li>
                                    <a href="#compartirInformacion"> ¿Cómo se comparte su información personal? </a>
                                </li>
                                <li>
                                    <a href="#tiempoAlmacenamiento"> ¿Durante cuánto tiempo almacenamos su información personal? </a>
                                </li>
                                <li>
                                    <a href="#controlInformacion"> ¿Qué opciones tiene con respecto al tratamiento de su información personal? </a>
                                </li>
                                <li>
                                    <a href="#proteccionInformacion"> ¿Qué medidas tomamos para proteger su información personal? </a>
                                </li>
                                <li>
                                    <a href="#detallesTratamiento">Detalles de tratamiento de datos según los productos específicos  </a>
                                </li>
                                <li>
                                    <a href="#informacionPersonas"> Información para personas </a>
                                </li>
                                <li>
                                    <a href="#contactoNosotros"> ¿Cómo puede ponerse en contacto con nosotros para hablar sobre su información personal y este Aviso de privacidad? </a>
                                </li>
                                <li>
                                    <a href="#puertoSeguro"> Programa de Puerto Seguro de COPPA de CARU </a>
                                </li>
                                <li>
                                    <a href="#avisoDePrivacidad"> ¿Cómo sabrá si hemos modificado este Aviso de privacidad? </a>
                                </li>
                            </ul>
                        </div>
                        <div className="parrafo-aparte">
                            <span> Aviso de privacidad complementario de los menores </span>
                        </div>
                        <div className="lista">
                            <ul>
                                <li>
                                    <a href="#informacionSobreMenores">¿Qué tipo de información recopilamos sobre los menores?  </a>
                                </li>
                                <li>
                                    <a href="#recopilacionInformacionMenores">  ¿Cómo usamos y compartimos la información personal que recopilamos de los menores?</a>
                                </li>
                                <li>
                                    <a href="#notificacionMenores">¿Cómo notificamos y obtenemos el consentimiento de los padres para la recopilación de información personal de sus hijos?  </a>
                                </li>
                                <li>
                                    <a href="#accesoPadres"> ¿Cómo pueden los padres acceder, cambiar o eliminar información personal sobre sus hijos? </a>
                                </li>
                                <li>
                                    <a href="#notificacionALosPadres">¿Cómo notificaremos a los padres si se realizan cambios en nuestro Aviso de privacidad de los menores?  </a>
                                </li>
                                <li>
                                    <a href="#coppaCaru">Programa de Puerto Seguro de COPPA de CARU  </a>
                                </li>
                            </ul>
                        </div>

                        <div className="parrafo">
                            <strong>  1. ¿Qué cubre este Aviso de privacidad? </strong>
                        </div>

                        <div className="parrafo">
                            <span>Nuestro Aviso de privacidad se aplica a la recopilación y al tratamiento de la información personal que realizan The Pokémon Company International, Inc. y nuestras empresas subsidiarias y filiales que actúan en representación nuestra (colectivamente, “Pokémon” o “nosotros”, “nos”, “nuestro/a”). Este Aviso de privacidad se aplica únicamente a la información recopilada sobre usted, en calidad de consumidor, a través de la red de sitios web Pokémon (por ejemplo: pokemon.com, pokemonCenter.com), así como de aplicaciones, funciones, servicios, eventos y comunicaciones que realicemos y donde publiquemos este Aviso de privacidad (los “Servicios”). Este aviso no se aplica a los datos de recursos humanos ni al sitio web “Pokémon Careers” (oportunidades laborales en Pokémon).</span>
                        </div>

                        <div className="parrafo">
                            <span> Nuestras filiales internacionales, los sitios web de terceros o las aplicaciones vinculadas a o desde nuestros Servicios, o bien en las que tengamos presencia o a quienes les proporcionemos una licencia de uso de nuestros derechos de autor y marcas registradas, pueden recopilar y usar la información personal con sus propios fines. En esos casos, se aplicarán sus respectivos avisos de privacidad. Revise los respectivos términos y avisos de privacidad de esas entidades para saber cómo tratan su información personal. Por ejemplo, Niantic, Inc. ha desarrollado y distribuye Pokémon GO. Visite https://nianticlabs.com/privacy/pokemongo/en/ para obtener información sobre cómo Niantic, Inc. trata sus datos.  </span>
                        </div>

                        <div className="parrafo" id="informacionPersonal">
                            <strong> 2. ¿Qué información personal se recopila sobre usted? </strong>
                        </div>

                        <div className="parrafo">
                            <strong> Para utilizar la mayoría de nuestros Servicios no es necesario proporcionar información personal. No obstante, si prefiere no divulgar información personal, no podrá disfrutar de determinadas funciones de nuestros Servicios. </strong>
                        </div>

                        <div className="parrafo">
                            <strong> Información que usted nos proporciona </strong>
                        </div>
                        <div className="parrafo">
                            <span> Los tipos de información personal que usted nos proporciona de forma directa incluyen, por ejemplo: </span>
                        </div>

                        <div className="lista-normal">
                            <ul>
                                <li> Información de contacto: por ejemplo, su nombre y apellidos, la dirección de correo electrónico, el número de teléfono, la dirección postal y los identificadores de cuentas Pokémon y distintas a Pokémon. </li>
                                <li>Contenido y archivos: los datos y el contenido que comparta o cargue, como fotos (también cualquier metadato incluido en fotos o contenido).  </li>
                                <li> Información de pago: por ejemplo, la tarjeta de crédito o la información financiera de una cuenta si compra alguno de nuestros productos o servicios o solicita una beca Play! Pokémon. </li>
                                <li> Información demográfica: información sobre usted relacionada con su información personal, como la edad y/o la fecha de nacimiento, el sexo, el país o región de residencia, sus pasatiempos y sus preferencias sobre juguetes y juegos. </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <strong> Información que recopilamos de forma automática </strong>
                        </div>
                        <div className="parrafo">
                            <span>Cuando utiliza nuestros Servicios recopilamos automáticamente cierta información. Por ejemplo:</span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> Identificadores e información sobre el dispositivo: por ejemplo, el tipo de dispositivo, de sistema operativo y del navegador, el identificador del dispositivo, la dirección IP y demás software, incluidos el tipo, la versión, el idioma, los ajustes y la configuración. Nuestro sitio web y los servicios en línea almacenan y recuperan datos a través de cookies instaladas en su dispositivo, tal y como se describe ampliamente en nuestra PÁGINA DE COOKIES. </li>
                                <li> Datos de uso: por ejemplo, desde qué sitio llegó a nuestro sitio web, cuándo utilizó nuestros Servicios y durante cuánto tiempo, a qué páginas y contenido accedió, además de qué funciones usó en nuestros Servicios. </li>
                                <li> Datos de geolocalización: con su consentimiento, los Servicios también pueden acceder a datos precisos de geolocalización de su dispositivo móvil para habilitar funciones y enviar contenido según su ubicación en ese momento. </li>
                                <li>Llamadas al centro de atención al cliente: En Estados Unidos, las llamadas a nuestros centros de atención al cliente pueden ser grabadas para garantizar la calidad. Se le informará antes de que se le conecte.  </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <strong> Información que creamos o generamos </strong>
                        </div>
                        <div className="parrafo">
                            <span>Derivamos otra información de los demás datos que recopilamos sobre usted y es posible que la combinemos con otra información personal para generar información relativa a sus preferencias aparentes u otras características («deducciones»). Por ejemplo, deducimos su ubicación general a través de su dirección IP.  </span>
                        </div>
                        <div className="parrafo">
                            <strong> Información que obtenemos de fuentes externas </strong>
                        </div>
                        <div className="parrafo">
                            <span> En circunstancias concretas, también obtenemos información de terceros. Protegemos la información obtenida a través de terceros de conformidad con las prácticas descritas en la presente declaración, además de las limitaciones adicionales que imponga la fuente de información. Estas fuentes externas incluyen, por ejemplo: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> Operadores de cuentas distintas a Pokémon: consulte la sección <strong>Play! Pokémon</strong> más adelante. </li>
                                <li> Plataformas para móviles: cuando compra nuestras aplicaciones, recibimos información acerca de usted de las tiendas de aplicaciones y otros proveedores de plataformas para móviles que se limita a su nombre de usuario o de pantalla y/o la identificación del dispositivo, así como el hecho de que se produjo una compra, pero no se recibe más información sensible o financiera, a menos que usted autorice a los proveedores de plataformas para móviles que nos proporcionen información adicional; </li>
                                <li>Proveedores de servicios: determinados terceros podrán recopilar alguna de las categorías de información personal descritas anteriormente para prestar servicios en nuestro nombre, incluso para ayudarnos a fijar la ubicación general de su dispositivo basándose en su dirección IP para adecuar ciertos productos a su ubicación, proporcionarle una experiencia más adecuada y facilitarle medidas de seguridad adicionales para proteger nuestros Servicios; y  </li>
                                <li> Redes sociales: cuando la información, incluido su nombre, nombre de pantalla y el contenido que publique, sean accesibles públicamente para nosotros, podremos usar esos datos para fines como medir la reacción del público a los Servicios y a Pokémon. </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <strong> Cookies y seguimiento </strong>
                        </div>
                        <div className="parrafo">
                            <span>Nuestros sitios web utilizan una serie de métodos técnicos para recopilar y hacer un seguimiento de datos de uso y de dispositivos, entre ellos, web beacons, cookies, almacenamiento local e identificadores de dispositivos. Rogamos consulte nuestra PÁGINA DE COOKIES para obtener más información sobre cómo utilizamos las cookies y otros métodos técnicos similares.</span>
                        </div>
                        <div className="parrafo" id="usoInformacionPersonal">
                            <strong>  3. ¿Qué uso hacemos de su información personal? </strong>
                        </div>
                        <div className="parrafo">
                            <span>  Usamos su información en la medida en que sea razonablemente necesaria para satisfacer sus solicitudes en función del cumplimiento de nuestro contrato con usted, o del consentimiento cuando lo hayamos solicitado o sea exigido por la ley, así como para nuestros objetivos comerciales legítimos, lo que incluye los siguientes fines comerciales: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li>Operaciones comerciales: para proporcionar y ofrecer, operar, mantener, optimizar y mejorar nuestros productos, servicios, operaciones y la seguridad de nuestros Servicios, lo que incluye desarrollar funciones operativas como facturar, contabilizar, comunicar y completar sus transacciones de productos y servicios.  </li>
                                <li> Provisión de productos y servicios: para personalizar el contenido y las experiencias de nuestros Servicios, lo que incluye proporcionarle recomendaciones en función de sus preferencias. </li>
                                <li> Marketing: para enviar y personalizar notificaciones, comunicaciones, boletines electrónicos, publicidad, ofertas y comunicaciones de eventos, promociones de los productos y servicios de Pokémon y nuestros socios externos. </li>
                                <li> Mejora y desarrollo de producto e investigación: para desarrollar información a fin de atender sus necesidades según sus datos demográficos, su actividad en nuestros Servicios, las respuestas a encuestas o en las aplicaciones o los sitios web de terceros, también con el fin de solucionar problemas y mejorar nuestros Servicios; llevar a cabo investigaciones de mercado y realizar análisis estadísticos, demográficos y de marketing de los usuarios de nuestros Servicios y sus patrones de compra. </li>
                                <li> Comunicaciones: para enviar y mostrar comunicaciones administrativas sobre Pokémon, nuestros Socios y nuestros respectivos productos y servicios. </li>
                                <li> Seguridad de los Servicios: para detectar, investigar y prevenir actividades que no estén autorizadas, que infrinjan nuestras condiciones y políticas, o bien que sean ilegales, como la actividad fraudulenta o las violaciones de seguridad; y </li>
                                <li>Atención al cliente: para proporcionar atención al cliente y responder a las preguntas que nos plantee.  </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <span> Salvo para el caso de la información de pago, que se utiliza únicamente con fines de la contabilidad, la facturación, la gestión de pedidos y la prevención del fraude, las demás categorías de información descritas en el Apartado 2 se usan para los fines descritos anteriormente. </span>
                        </div>
                        <div className="parrafo">
                            <span> Además, podemos vincular o combinar información sobre usted con otra información personal que obtengamos de terceros. Asimismo, usamos información personal en las configuraciones y con los fines mencionados a continuación. </span>
                        </div>
                        <div className="parrafo">
                            <span> Podemos almacenar y tratar información personal en los Estados Unidos, Reino Unido y en otros países o regiones que puede que no tengan las mismas leyes de protección de datos que las vigentes en su país. </span>
                        </div>
                        <div className="parrafo" id="compartirInformacion">
                            <strong> 4. ¿Cómo se comparte su información personal? </strong>
                        </div>
                        <div className="parrafo">
                            <span> Solo compartimos su información personal con terceros de la siguiente manera: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> Con su consentimiento; por ejemplo, cuando acepta compartir su información con terceros que tengan sus propios objetivos y que estén sujetos a sus propias políticas de privacidad por separado. </li>
                                <li> Con proveedores, asesores y otros prestadores de servicios externos que trabajen con nosotros y necesiten acceder a su información personal para completar su tarea, también con fines comerciales que exijan acceso a nuestros sistemas con información personal (como facilitar un almacenamiento de datos en la nube, mantener la seguridad de nuestros sistemas y proporcionar atención al cliente). En los últimos doce meses, hemos divulgado a proveedores todas las categorías de información personal descritas en el Apartado 2. </li>
                                <li>  Si ha seleccionado las opciones disponibles a través de nuestros Servicios para mostrar públicamente su nombre y/o nombre de pantalla, además de otra información.</li>
                                <li> De ser necesario, a) para cumplir con la normativa o en respuesta a solicitudes legítimas y procesos legales, como cumplir con una orden judicial o citación; b) para proteger los derechos y la propiedad de Pokémon, de nuestros agentes, de nuestros clientes y de otros, por ejemplo, con el fin de hacer cumplir nuestras condiciones, políticas, normas y acuerdos; c) para proteger la seguridad de cualquier persona; y d) para proteger la seguridad de Pokémon y nuestros socios, Servicios, sitios web y aplicaciones. </li>
                                <li> Para toda negociación o concreción de toda fusión, financiamiento, adquisición, bancarrota, disolución, transacción o procedimiento que involucre una venta, transferencia, desinversión o divulgación de nuestra empresa o sus bienes, ya sea de forma parcial o total, para utilizar de conformidad con las leyes pertinentes. </li>
                            </ul>
                        </div>
                        <div className="parrafo" id="tiempoAlmacenamiento">
                            <strong> 5. ¿Durante cuánto tiempo almacenamos su información personal? </strong>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon conserva su información personal mientras sea apropiado para mantener sus cuentas, proporcionar Servicios, atender sus solicitudes, resolver controversias y con fines de conformidad y aplicación de la ley. Los períodos de retención real pueden variar según diferentes factores como el tipo de producto, el tipo y la confidencialidad de los datos, las necesidades comerciales, las expectativas y necesidades del cliente, los tipos de controles disponibles para el usuario y la forma en la que se almacenan los datos. </span>
                        </div>
                        <div className="parrafo" id="controlInformacion">
                            <strong> 6. ¿Qué opciones tiene con respecto al tratamiento de su información personal? </strong>
                        </div>
                        <div className="parrafo">
                            <span> Le ofrecemos varias opciones para controlar su información personal como las siguientes: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> Puede acceder a la información de contacto que nos suministró durante el registro y actualizarla si visita la sección “Editar perfil” en <Link className="link-celeste" to="/inicio"> www.pokemon.com </Link>. </li>
                                <li> Puede ponerse en contacto con nosotros a través de la dirección <div className="celeste">privacyquestions@pokemon.com</div> para solicitar la eliminación, el acceso y la actualización de su información personal. </li>
                                <li> Si desea dejar de recibir nuestros correos electrónicos de promoción, haga clic en el enlace para cancelar la suscripción que aparece en dichos correos. </li>
                                <li> Puede elegir bloquear o eliminar todas las cookies y el almacenamiento local. Para obtener información sobre cómo hacerlo, rogamos visite nuestra <Link className="link-celeste" to="/terminos-y-condiciones/pagina-de-cookies">PÁGINA DE COOKIES</Link>. </li>
                                <li> También tiene la opción de autoexcluirse de muchas de las cookies de publicidad y análisis de terceros, según lo descrito en la <Link className="link-celeste" to="/terminos-y-condiciones/pagina-de-cookies">PÁGINA DE COOKIES</Link> visitando <a className="link-celeste" href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices/</a> y <a className="link-celeste" href="http://www.networkadvertising.org/choices/">http://www.networkadvertising.org/choices/</a>. </li>
                                <li>Puede excluirse voluntariamente de nuestra publicidad en las aplicaciones móviles mediante los ajustes de publicidad de su dispositivo móvil.  </li>
                                <li> Puede evitar el seguimiento de los correos electrónicos que le enviamos si modifica sus ajustes para deshabilitar el HTML o la descarga de imágenes. Además, puede cancelar la suscripción de nuestros correos electrónicos de marketing siguiendo las instrucciones incluidas en dichos correos. </li>
                            </ul>
                        </div>
                        <div className="parrafo" id="proteccionInformacion">
                            <strong> 7. ¿Qué medidas tomamos para proteger su información personal? </strong>
                        </div>
                        <div className="parrafo">
                            <span> Implementamos medidas de seguridad técnicas, organizativas, administrativas y físicas destinadas a proteger su información personal contra el acceso no autorizado y uso indebido. No obstante, le pedimos que comprenda que, a pesar de que nos esforzamos al máximo, ninguna medida de seguridad es perfecta o impenetrable. </span>
                        </div>
                        <div className="parrafo" id="detallesTratamiento">
                            <strong> 8. Detalles del tratamiento de datos según los productos específicos </strong>
                        </div>
                        <div className="parrafo">
                            <span> La siguiente información recoge los detalles de productos específicos para complementar la información de este Aviso de privacidad. </span>
                        </div>
                        <div className="parrafo">
                            <strong> Play! Pokemon </strong>
                        </div>
                        <div className="parrafo">
                            <span> Si participa en la sección de puntuaciones y clasificaciones de torneos de Play! Pokémon en nuestro sitio web, usaremos su información personal para dar seguimiento a sus resultados en torneos, su clasificación, su puntuación y su estado de jugador (p. ej., activo, eliminado, ganador, etc.). A excepción de las jurisdicciones en donde las leyes especifiquen una edad diferente, a) si tiene al menos 13 años, publicaremos su nombre completo, o bien su nombre e inicial de su apellido (según nos lo indique), así como su estado/provincia o país/región junto con su clasificación de jugador; y b) si es menor de 13 años, su padre o tutor puede optar por publicar su nombre de pantalla, nombre completo o nombre e inicial de su apellido en las clasificaciones de los jugadores. Si tras participar en eventos de Play! Pokémon opta por no crear una cuenta del Club de Entrenadores Pokémon, conservaremos su nombre, la letra inicial de su apellido, la fecha de nacimiento y los puntos de campeonato obtenidos tras participar en algún evento, cuando dicha información por sí sola no pueda identificarle y no se considere información personal. </span>
                        </div>
                        <div className="parrafo">
                            <span> Asimismo, si opta por participar en la sección de puntuaciones y clasificaciones de torneos de Play! Pokémon de nuestro sitio web, compartiremos su información personal con terceros independientes (como los Líderes de la liga y los organizadores de torneos) que operen eventos de Play! Pokémon en los que pueda participar. En la mayoría de los casos, estos son terceros independientes y no empleados de Pokémon. </span>
                        </div>
                        <div className="parrafo">
                            <span> Si se ha suscrito para jugar con nuestros productos o participar en competiciones y nos facilita información de cuentas distintas a la de Pokémon (por ejemplo, una cuenta Nintendo) cuando dicha función esté disponible, recibiremos sus datos de fecha de nacimiento y el identificador de la cuenta del otro operador de cuentas. Si participa en competiciones en las que puede ganar Championship Points de Play! Pokémon, la fecha de nacimiento de su cuenta distinta a la de Pokémon se cotejará con su cuenta del Club de Entrenadores Pokémon, y se compartirá con el otro operador de cuentas la información relativa a si había correspondencia o no, así como la identidad de su cuenta del Club de Entrenadores Pokémon. </span>
                        </div>
                        <div className="parrafo">
                            <strong>  Aplicaciones de Pokémon </strong>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon conservará su información personal dentro de una aplicación Pokémon mientras la mantenga en su dispositivo. Si crea una cuenta, la aplicación envía su información personal a nuestros servidores. Guardaremos sus datos mientras usted mantenga una cuenta y durante 90 días después de que deshabilite la cuenta en caso de que decida reactivarla o en caso de que la solicitud de deshabilitar la cuenta hubiera sido un error. Ciertas aplicaciones pueden darle la opción de recibir notificaciones emergentes. Puede activar o desactivar dichas notificaciones emergentes a través de los ajustes de la aplicación o el dispositivo. Puede deshabilitar nuestro acceso a sus datos precisos de geolocalización mediante los ajustes de su dispositivo. </span>
                        </div>
                        <div className="parrafo" id="informacionPersonas">
                            <strong> 9. Información para personas </strong>
                        </div>
                        <div className="parrafo">
                            <span> Tiene los siguientes derechos: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> El derecho a ser informado sobre cómo usamos su información. </li>
                                <li> El derecho a solicitar de Pokémon el acceso a los datos personales, lo que incluye i) las categorías y partes especiales de información que hayamos recopilado sobre usted, ii) las categorías de fuentes recopiladas, iii) la finalidad para la que se recopila o usa la información, y iv) los terceros con los que compartimos su información personal; la rectificación o eliminación/borrado de su información personal bajo determinadas circunstancias y con sujeción a cierto número de excepciones, además de ciertos derechos de portabilidad de los datos. </li>
                                <li> El derecho a oponerse al tratamiento de sus datos personales o a obtener una restricción de dicho tratamiento en ciertas circunstancias. </li>
                                <li> El derecho a que sus datos personales sean transferidos a otra organización en caso de que sea técnicamente posible que Pokémon lo haga. </li>
                                <li> Si el tratamiento de los datos personales se basa en su consentimiento, el derecho a revocarlo en cualquier momento (sin afectar a la legalidad del tratamiento antes de la revocación). </li>
                                <li> Puede haber excepciones a estos derechos en ciertas circunstancias y cuando usted no pueda ejercer un derecho debido a una excepción, le daremos esa explicación. </li>
                                <li>El derecho a presentar su queja a un regulador. Si reside en el Espacio Económico Europeo (EEE) y cree que no hemos cumplido con las leyes de protección de datos, puede presentar una queja ante nuestro organismo regulador, la Oficina del Comisionado de Información del Reino Unido, o ante su autoridad local de control; sin embargo, independientemente de dónde se encuentre, le agradeceríamos que nos diera la oportunidad de abordar aquello que le preocupa poniéndose en contacto directamente con nosotros.  </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <span>Para realizar estas solicitudes, póngase en contacto con nosotros a través del correo <span className="link-celeste">privacyquestions@pokemon.com</span> o <a href="https://support.pokemon.com/hc/requests/new?ticket_form_id=360000012406" target="_blank" className="link-celeste">https://support.pokemon.com/hc/requests/new?ticket_form_id=360000012406</a> </span>
                        </div>
                        <div className="parrafo">
                            <span> Si presenta una solicitud, le pediremos que acredite su identidad bien presentándola a través de la cuenta que ya existe y/o proporcionando un modelo de identificación administrativo a través de nuestro portal de servicio al cliente, donde, si es posible, cotejaremos su información relativa a la identificación con la información personal que tenemos sobre usted, según el tipo de solicitud que haga y siempre que las medidas de comprobación resulten proporcionales al riesgo sobre la información personal que implique su solicitud. No existe un método razonable por el que podamos comprobar su identidad con el nivel de certeza que exige la ley para ciertas partes de información personal; por ejemplo, los identificadores únicos como los de las cookies, la identificación del dispositivo y la dirección IP (cuando no guardamos esa información en relación con otra directamente identificable). Pueden darse excepciones a esos derechos en algunas circunstancias y cuando no le sea posible ejercitar alguno por una excepción, Pokémon le facilitará la información. Pokémon realizará todos los esfuerzos razonables para atender su solicitud en los plazos de respuesta previstos por la legislación aplicable. </span>
                        </div>
                        <div className="parrafo">
                            <span> Transferimos datos personales del Espacio Económico Europeo (EEE), el Reino Unido y Suiza a otros países o regiones, algunos de los cuales, según la Comisión Europea, no cuentan con niveles adecuados de protección de datos. </span>
                        </div>
                        <div className="parrafo">
                            <span> Cuando transferimos sus datos personales desde el EEE, Suiza o el Reino Unido a otros países o regiones, la transferencia se basará en al menos una de las siguientes alternativas: </span>
                        </div>
                        <div className="parrafo">
                            <span>(a) Cláusulas contractuales estándar aprobadas por la Comisión Europea y/o la Oficina del Comisionado de información del Reino Unido (UK Information Commissioner's Office) por considerar que ofrecen un nivel adecuado de protección de datos.  </span>
                        </div>
                        <div className="parrafo">
                            <span>  (b) Transferencia a un país, un territorio o un sector específico dentro de un país o un territorio que, según la Comisión Europea, garantice un nivel adecuado de protección de los datos personales.</span>
                        </div>
                        <div className="parrafo">
                            <span>  (c) La transferencia es necesaria para el cumplimiento de un contrato con usted, para la terminación o cumplimiento de un contrato a su favor o para tomar medidas que usted haya solicitado, o si se basa en su consentimiento explícito.</span>
                        </div>
                        <div className="parrafo">
                            <span> En consecuencia, Pokémon podría tener la obligación, por imperativo legal o judicial, de divulgar información personal. Dicha obligación podría abarcar solicitudes legítimas realizadas por autoridades públicas, lo que incluye el cumplimiento de los requisitos relativos a la seguridad nacional y el orden público. Cuando revelemos sus datos personales por imperativo legal o judicial, adoptaremos las medidas razonables para asegurarnos de que solo revelemos los datos personales mínimos, estrictamente necesarios para un fin o unas circunstancias específicos, y así cumplir con las obligaciones legales o judiciales válidas; por ejemplo, órdenes de registro, citaciones judiciales con apercibimiento u órdenes judiciales. Cuando efectivamente transfiramos sus datos personales, haremos uso de una serie de mecanismos legales, lo que incluye contratos y cláusulas contractuales tipo o cláusulas modelo, para que usted pueda ejercer sus derechos y hacer valer sus protecciones en relación con dichos datos. </span>
                        </div>
                        <div className="parrafo">
                            <span> También hemos suscrito los acuerdos marco relativos al Escudo de la privacidad UE-EE. UU. y al Escudo de la privacidad Suiza-EE. UU. Aunque ya no nos basamos en el Escudo de la privacidad UE-EE. UU. como mecanismo para transferir datos personales, tras la decisión Schrems II del Tribunal de Justicia de la Unión Europea del 16 de julio de 2020, seguimos acatando los Principios del escudo de la privacidad en lo que atañe a la totalidad de la información personal previamente transferida de la Unión Europea (UE), el Reino Unido o Suiza a los Estados Unidos sobre la base del Escudo de la privacidad. La información sobre nuestra participación en el Escudo de la privacidad puede consultarse en la lista del Escudo de la privacidad en: <a href="https://www.privacyshield.gov/participant?id=a2zt0000000XchHAAS&status=Active" className="link-celeste" target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000XchHAAS&status=Active</a>. </span>
                        </div>
                        <div className="parrafo">
                            <span> Las personas físicas de la Unión Europea, el Reino Unido o Suiza que tengan consultas o deseen presentar reclamaciones sobre nuestro cumplimiento de los Principios del escudo de la privacidad deben ponerse en contacto con nosotros en primer lugar escribiendo a privacyquestions@pokemon.com, o por correo certificado (con solicitud de acuse de recibo) en la siguiente dirección: The Pokémon Company International, Inc., Attention Privacy Notice Administrator, 10400 NE 4th Street, Suite 2800, Bellevue, WA 98004 USA. Si desea presentar una reclamación que no se haya podido resolver con nosotros directamente, podrá dirigirse al ESCUDO DE LA PRIVACIDAD BBB-UE, operado por BBB National Programs, Inc. Visite http://www.bbb.org/EU-privacy-shield/for-eu-consumers para obtener más información y presentar una reclamación ante el Escudo de la privacidad BBB-UE. Dicho servicio es gratuito. Si tras contactar con Pokémon y con el Escudo de la privacidad BBB-UE su reclamación sigue sin resolverse, también tiene derecho a presentar una reclamación ante una autoridad de control. </span>
                        </div>
                        <div className="parrafo">
                            <span> Si su reclamación relativa al Escudo de la privacidad no se ha podido resolver por los canales arriba mencionados, usted podrá, en determinadas circunstancias, optar por iniciar un procedimiento arbitral vinculante. </span>
                        </div>
                        <div className="parrafo" id="contactoNosotros" >
                            <strong> 10. ¿Cómo puede ponerse en contacto con nosotros para hablar sobre su información personal y este Aviso de privacidad?  </strong>
                        </div>
                        <div className="parrafo">
                            <span> Si tiene preguntas o comentarios sobre nuestras prácticas respecto a los datos o sobre este Aviso de privacidad, puede ponerse en contacto con nosotros o con el responsable de la protección de datos en las siguientes direcciones:</span>
                        </div>
                        <div className="tabla-ajustada">
                            <div className="contenido">
                                <span>10400 NE 4th Street
                                    Suite 2800
                                    Bellevue, WA 98004
                                    USA</span>
                            </div>
                            <div className="contenido">
                                <span>3rd Fl Bldg 10, Chiswick Park
                                    566 Chiswick High Road
                                    London, W4 5XS
                                    United Kingdom</span>
                            </div>
                            <div className="contenido">
                                <span>The Pokémon Company International Ireland Limited
                                    3rd Floor, 2 Central Plaza, Dame Street
                                    Dublin 2, D02 T0X4, Ireland</span>
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className=" text-center" style={{ color: "#1b53ba" }}> privacyquestions@pokemon.com </p>
                        </div>
                        <div className="parrafo" id="puertoSeguro">
                            <strong>11. Programa de Puerto Seguro de COPPA de CARU  </strong>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon tiene una licencia del Programa de Puerto Seguro de COPPA de CARU. Si considera que no hemos respondido a su consulta relacionada con la privacidad o si su consulta no se abordó de forma satisfactoria, póngase en contacto en línea con CARU en https://bbbprograms.org/programs/caru o por correo postal en la siguiente dirección: CARU Attn.: COPPA Safe Harbor Program; 112 Madison Avenue, New York, NY 10016 USA, o bien por correo electrónico a infocaru@bbbnp.org. </span>
                        </div>
                        <div className="parrafo">
                            <span>Tenga en cuenta que CARU no está afiliada a Pokémon y no puede ayudar con problemas no relacionados con la privacidad.</span>
                        </div>
                        <div className="parrafo" id="avisoDePrivacidad">
                            <strong> 12. ¿Cómo sabrá si hemos modificado este Aviso de privacidad? </strong>
                        </div>
                        <div className="parrafo">
                            <span> Podemos modificar este Aviso de privacidad en cualquier momento, cambiando la fecha de la última actualización. Si realizamos cambios importantes relacionados con cómo recopilamos, usamos o compartimos su información personal, los describiremos y, de ser necesario por ley, pediremos su consentimiento para dichos cambios. </span>
                        </div>
                        <div className="parrafo">
                            <a href="#inicio" className="celeste">volver arriba</a>
                        </div>
                        <hr />
                        <div className="parrafo">
                            <strong>  Aviso de privacidad complementario de los menores</strong>
                        </div>
                        <div className="parrafo">
                            <strong> NUESTRO COMPROMISO ADICIONAL DE PRIVACIDAD CON LOS MENORES Y SUS PADRES </strong>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon ha desarrollado sus Servicios con el objetivo de crear una experiencia agradable para todos los usuarios. En virtud de nuestro Aviso de privacidad general, reconocemos la necesidad de proporcionar protección adicional de privacidad cuando los menores visitan los Servicios en los que se publique este Aviso de privacidad de los menores. Este Aviso de privacidad de los menores está diseñado para responder a las preguntas que puedan surgir en relación con nuestras políticas y principios de privacidad con respecto a los niños. Tal y como se usa en este Aviso, los términos “niños”, “niño”, “hijos”, “hijo”, “menores” y “menor” hace referencia a todos los niños y niñas menores de 13 años, excepto en aquellas jurisdicciones donde las leyes de privacidad especifiquen una edad diferente. Asimismo, cuando usamos el término “padre”, incluimos a todos los tutores legales, padres y madres. </span>
                        </div>
                        <div className="parrafo" id="informacionSobreMenores">
                            <strong> 1. ¿Qué tipo de información recopilamos sobre los menores? </strong>
                        </div>
                        <div className="parrafo">
                            <span>Los usuarios invitados pueden usar algunos de nuestros Servicios, visualizar contenido y disfrutar de muchas funciones sin registrar una cuenta ni autorizar la recopilación de información personal sometida a los artículos de COPPA.</span>
                        </div>
                        <div className="parrafo">
                            <span> Si un usuario ha indicado que es un niño cuando intenta crear una cuenta de Pokémon, recopilaremos la dirección de correo electrónico del padre y obtendremos su consentimiento verificable antes de permitir que el niño proporcione cualquier información personal adicional. Puede consultar más adelante cómo obtenemos el consentimiento parental. </span>
                        </div>
                        <div className="parrafo">
                            <span> Una vez que obtenemos el consentimiento parental, el niño puede usar nuestros servicios prácticamente de la misma manera que cualquier otro usuario. Y podemos recopilar del niño los mismos tipos de información personal, y usar y compartir esa información para los mismos fines, tal y como se describe en el Aviso de privacidad general, con la excepción de que Pokémon no recopila, ni permite que terceros recopilen, los datos personales de los niños (incluidos los identificadores persistentes) con fines de publicidad de comportamiento, de creación de un perfil o de cualquier otro tipo que no sea apoyar sus operaciones internas, a menos que hayamos obtenido el consentimiento explícito previo de los padres. </span>
                        </div>
                        <div className="parrafo">
                            <span>Recibimos información de nuestros usuarios invitados y de terceros, como organizadores de torneos Play! Pokémon. Recopilamos información personal de los padres en representación de sus hijos para crear una cuenta para los Servicios de Pokémon.  </span>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon no condiciona la participación de los niños en cualquiera de los Servicios a la recopilación de más información personal que aquella que sea razonablemente necesaria. </span>
                        </div>
                        <div className="parrafo" id="recopilacionInformacionMenores">
                            <strong>2. ¿Cómo usamos y compartimos la información personal que recopilamos de los menores?</strong>
                        </div>
                        <div className="parrafo">
                            <span> Como ya mencionamos, una vez que obtenemos el consentimiento de los padres, el niño puede usar nuestros Servicios prácticamente de la misma manera que cualquier otro usuario y nosotros podemos recopilar del niño los mismos tipos de información personal, y usar y compartir esa información para los mismos fines, según se describe en el Aviso de Privacidad general, a menos que se especifique lo contrario en este Aviso de privacidad complementario de los menores. Por ejemplo, una vez que el padre ha otorgado el consentimiento para crear una cuenta, un niño puede realizar lo siguiente: </span>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li>Vincular una cuenta de uno de los Servicios de Pokémon con una cuenta de otro servicio operado por Pokémon o una de sus filiales  </li>
                                <li>  Participar en juegos, programas de recompensas, concursos, sorteos, eventos o promociones</li>
                                <li> Enviarnos sus preguntas o ponerse en contacto con nosotros por correo electrónico o a través de nuestro portal de atención al cliente en relación con los Servicios o la participación de sus niños en eventos organizados. </li>
                                <li> Participar en sondeos, encuestas o cuestionarios </li>
                                <li>  Utilizar nuestra función Enviar a un amigo por correo electrónico y participar en el "chat enlatado", en el que un niño puede seleccionar palabras de una lista preparada por Pokémon para enviar mensajes a otros usuarios del sitio web.</li>
                                <li> Activar las notificaciones emergentes (puede activar o desactivar la notificación emergente modificando la configuración del Servicio correspondiente o en los ajustes de su dispositivo) </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <span> Tenga en cuenta que algunos Servicios pueden permitir que un niño divulgue públicamente información personal o se comunique con otros usuarios. No tenemos ningún control sobre los terceros (p. ej., otros usuarios) que pueden copiar o volver a publicar esta información. </span>
                        </div>
                        <div className="parrafo">
                            <span>  Hasta que recibamos el consentimiento parental verificable, la información de contacto sobre los padres proporcionada por el niño solo se usa para obtener el consentimiento de sus padres con respecto a nuestras prácticas de recopilación de información.</span>
                        </div>
                        <div className="parrafo">
                            <span> Con el consentimiento parental, también podemos usar la información de contacto del niño para enviarle a este correos electrónicos y mensajes con información promocional sobre nuevos productos y funciones, ofertas especiales, concursos y sorteos, así como otra información pertinente sobre nuevos productos, eventos y actualizaciones de Pokémon. Los padres siempre pueden elegir que su hijo reciba o no estos mensajes promocionales. Para ello, visite los ajustes de perfil de su cuenta o póngase en contacto con nosotros. </span>
                        </div>
                        <div className="parrafo">
                            <span> Si un niño gana un sorteo, concurso u otro evento promocional, se lo notificaremos a los padres en la dirección de correo electrónico que nos proporcionaron durante el proceso de registro y les solicitaremos que proporcionen su dirección postal para enviar el premio. Con el consentimiento previo adecuado, podremos publicar el nombre de pila de un ganador, la ciudad, el estado/provincia y el país o región donde reside. </span>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon comparte la información personal de los menores con las mismas entidades y con los mismos fines descritos en el Aviso de privacidad general. </span>
                        </div>
                        <div className="parrafo">
                            <span> Asimismo, si un padre decide permitir que su hijo participe en la sección de puntuaciones y clasificaciones de torneos de Play! Pokémon de nuestros sitios web, usaremos información personal del niño para dar seguimiento a los resultados del niño en torneos, su clasificación, su puntuación y su estado de jugador (p. ej., activo, eliminado, ganador, etc.). Como padre, usted puede optar por publicar el nombre de pantalla del niño, su nombre completo o el primer nombre y la inicial del apellido en las clasificaciones de jugador. También compartiremos la información personal del niño con terceros independientes (como los líderes de la liga y los organizadores de torneos) para que puedan operar eventos de Play! Pokémon offline en los que el niño pueda participar. Si un padre no desea que la información personal de sus hijos sea compartida con terceros independientes que operen eventos de Play! Pokémon, entonces no deberían permitir que sus hijos participen en la sección de puntuaciones y clasificaciones de torneos Play! Pokémon de nuestros sitios web. </span>
                        </div>
                        <div className="parrafo" id="notificacionMenores">
                            <strong> 3. ¿Cómo notificamos y obtenemos el consentimiento de los padres para la recopilación de información personal de sus hijos? </strong>
                        </div>
                        <div className="parrafo">
                            <span>Cuando un niño desee registrarse en nuestros Servicios, le enviaremos un correo electrónico a sus padres. Este correo electrónico notifica al padre que su hijo desea registrarse, y le pide al padre que cree una cuenta para dar su consentimiento para que su hijo se registre. Si el padre ignora o se niega a registrar a su hijo, eliminaremos la información de contacto del niño y de los padres en un plazo de 14 días con posterioridad a dicha notificación. Si el padre permite el registro, le daremos al niño acceso a las características descritas en el correo electrónico y en este Aviso de privacidad.  </span>
                        </div>
                        <div className="parrafo">
                            <span> Para ayudar a verificar que el padre es la persona que da el consentimiento, Pokémon (en EE. UU. en colaboración con Veratad, una de las principales compañías de verificación de edad e identidad) solicita la suma del primer y último dígito del número de seguridad social del padre, así como otros datos para verificar la identidad del padre, como el nombre, la fecha de nacimiento y la dirección física. Tenga en cuenta que Pokémon NO almacena esta información en ningún registro. </span>
                        </div>
                        <div className="parrafo">
                            <span> Los padres pueden revocar el consentimiento en cualquier momento poniéndose en contacto con nuestro departamento de atención al cliente y enviando una solicitud a través del sitio web <a href="https://support.pokemon.com/hc/requests/new?ticket_form_id=360000012406" target="_blank" className="link-celest">https://support.pokemon.com/hc/requests/new?ticket_form_id=360000012406</a>, o bien enviando un correo electrónico a <span className="celeste">privacyquestions@pokemon.com</span>. </span>
                        </div>
                        <div className="parrafo" id="notificacionALosPadres">
                            <strong> 5. ¿Cómo notificaremos a los padres si se realizan cambios en nuestro Aviso de privacidad de los menores? </strong>
                        </div>
                        <div className="parrafo" id="accesoPadres">
                            <span>  Podemos modificar nuestro Aviso de privacidad de los menores en cualquier momento. En ese caso, cambiaremos la fecha en la que fue actualizado por última vez. Notificaremos a los padres de cualquier cambio importante sobre la forma en que pretendemos tratar la información personal de los menores. Aplicaremos cambios materiales a nuestro Aviso de privacidad de los niños solo cuando los cambios cumplan con la legislación correspondiente, incluido cualquier requisito de UE de los padres.</span>
                        </div>
                        <div className="parrafo" id="coppaCaru">
                            <strong> 6. Programa de Puerto Seguro de COPPA de CARU </strong>
                        </div>
                        <div className="parrafo">
                            <span> Pokémon tiene una licencia del Programa de Puerto Seguro de COPPA de CARU. Si considera que no hemos respondido a su consulta relacionada con la privacidad o si su consulta no se abordó de forma satisfactoria, póngase en contacto en línea con CARU en https://bbbprograms.org/programs/caru o por correo postal en la siguiente dirección: CARU Attn.: COPPA Safe Harbor Program; 112 Madison Avenue, New York, NY 10016 USA, o bien por correo electrónico a infocaru@bbbnp.org </span>
                        </div>
                        <div className="parrafo">
                            <span> Tenga en cuenta que CARU no está afiliada a Pokémon y no puede ayudar con problemas no relacionados con la privacidad. </span>
                        </div>
                        <div className="parrafo">
                            <span>
                                <a href="#inicio" className="celeste"> volver arriba </a>
                            </span>
                        </div>

                    </>
                }

            />


        </>
    )
}