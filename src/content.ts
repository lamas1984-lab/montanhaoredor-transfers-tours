export type Lang = "pt" | "en" | "de" | "nl";

export type SiteCopy = {
  nav: { services: string; journey: string; routes: string; fares: string; contact: string };
  status: string;
  hero: { eyebrow: string; title: string; italic: string; description: string; primary: string; secondary: string; photoAlt: string };
  proof: Array<{ value: string; label: string }>;
  intro: { label: string; title: string; text: string; quote: string };
  services: { label: string; title: string; intro: string; items: Array<{ title: string; text: string; note: string }> };
  journey: { label: string; title: string; text: string; steps: Array<{ number: string; title: string; text: string }>; imageAlt: string };
  comfort: { label: string; title: string; text: string; points: string[]; imageAlt: string };
  routes: { label: string; title: string; intro: string; items: Array<{ area: string; title: string; text: string }> ; imageAlt: string };
  fares: { label: string; title: string; intro: string; cards: Array<{ type: string; title: string; text: string; price: string }>; noticeTitle: string; noticeText: string; noticeButton: string };
  contact: { label: string; title: string; text: string; whatsapp: string; email: string; note: string };
  footer: { line: string; privacy: string };
  menu: string;
  close: string;
};

export const copy: Record<Lang, SiteCopy> = {
  pt: {
    nav: { services: "Serviços", journey: "Viagem acompanhada", routes: "Percursos", fares: "Tarifas & Serviços", contact: "Contacto" },
    status: "Serviço em preparação · reservas temporariamente indisponíveis",
    hero: {
      eyebrow: "Transfers privados & tours em Portugal",
      title: "Portugal começa",
      italic: "antes do destino.",
      description: "Da chegada ao aeroporto aos lugares que ficam na memória: transporte privado, acompanhamento atento e percursos desenhados ao seu ritmo.",
      primary: "Conhecer os serviços",
      secondary: "Pedir informação",
      photoAlt: "Veículo privado verde numa estrada de montanha em Portugal",
    },
    proof: [
      { value: "1—6", label: "passageiros" },
      { value: "porta a porta", label: "aeroporto ou morada" },
      { value: "privado", label: "vidros escurecidos" },
      { value: "à medida", label: "ritmo e percurso" },
    ],
    intro: {
      label: "Uma proposta diferente",
      title: "Quer partir de Portugal sentindo que realmente o conheceu?",
      text: "Pensámos num serviço para quem valoriza tempo, tranquilidade e companhia de confiança. Tratamos das transições da viagem — chegada, deslocações, experiências e regresso — para que só tenha de escolher o que quer viver.",
      quote: "Menos tempo a coordenar. Mais tempo para estar presente.",
    },
    services: {
      label: "Serviços",
      title: "Uma viagem, várias formas de cuidar.",
      intro: "Pode escolher apenas uma deslocação ou construir connosco um programa completo em Portugal.",
      items: [
        { title: "Transfers privados", text: "Recolha em aeroportos, estações, alojamentos ou moradas particulares, com horário e destino previamente combinados.", note: "Lisboa · Porto · Leiria · outras origens" },
        { title: "Tours turísticos", text: "Dias ou meios-dias dedicados à paisagem, património, gastronomia e lugares especiais, sem a rigidez de um circuito de grupo.", note: "Centro · Norte · Sul" },
        { title: "Viagem acompanhada", text: "Um único plano para chegada, estadia, deslocações escolhidas e regresso, com acompanhamento em cada transição.", note: "Do primeiro encontro à despedida" },
        { title: "Apoio personalizado", text: "Uma solução especialmente tranquila para famílias, seniores ou visitantes que preferem não conduzir longas distâncias.", note: "Ritmo humano · atenção discreta" },
      ],
    },
    journey: {
      label: "Viagem acompanhada",
      title: "Da sua porta a Portugal — e de volta.",
      text: "Podemos recebê-lo num aeroporto ou, para quem vive em Portugal, numa morada à sua escolha. Durante a estadia, construímos as deslocações em torno dos seus interesses. No final, coordenamos também o regresso.",
      steps: [
        { number: "01", title: "Chegar", text: "Recolha no ponto combinado, ajuda com a bagagem e ligação direta ao alojamento." },
        { number: "02", title: "Descobrir", text: "Percursos privados ajustados ao grupo, ao tempo disponível e à vontade de cada dia." },
        { number: "03", title: "Regressar", text: "Planeamento da última deslocação para chegar ao aeroporto ou a casa com tranquilidade." },
      ],
      imageAlt: "Receção privada de passageiros junto a um aeroporto português",
    },
    comfort: {
      label: "Conforto & privacidade",
      title: "Espaço para viajar bem.",
      text: "O habitáculo acolhe até seis passageiros, com ambiente silencioso, ampla visibilidade e vidros escurecidos para preservar a privacidade de quem viaja.",
      points: ["Até 6 passageiros", "Vidros escurecidos", "Espaço para bagagem", "Ambiente confortável", "Viagem privada", "Atenção a necessidades especiais"],
      imageAlt: "Interior confortável de veículo privado para seis passageiros",
    },
    routes: {
      label: "Percursos possíveis",
      title: "Portugal, ao ritmo da sua viagem.",
      intro: "Não vendemos um roteiro fechado. Partimos dos seus interesses, da duração disponível e do ritmo do grupo para desenhar uma proposta coerente.",
      items: [
        { area: "Centro", title: "Serra, grutas e património", text: "Parque Natural Serra de Aire e Candeeiros, Alvados, Mira de Aire, Batalha, Alcobaça, Fátima e Nazaré." },
        { area: "Norte", title: "Cidades, rios e vinho", text: "Coimbra, Aveiro, Porto e Vale do Douro numa viagem adaptada ao tempo disponível." },
        { area: "Sul", title: "Vilas históricas e Atlântico", text: "Óbidos, Lisboa, Sintra e costa atlântica com paragens escolhidas ao ritmo do grupo." },
      ],
      imageAlt: "Veículo privado verde num miradouro da costa atlântica portuguesa",
    },
    fares: {
      label: "Tarifas & Serviços",
      title: "Uma proposta clara para cada viagem.",
      intro: "O valor depende da distância, duração, esperas, número de dias e programa escolhido. Antes de qualquer compromisso, apresentamos uma proposta completa e transparente.",
      cards: [
        { type: "Ligação direta", title: "Transfer", text: "Uma origem, um destino e apoio coordenado à chegada.", price: "Sob consulta" },
        { type: "Experiência privada", title: "Tour", text: "Meio-dia ou dia completo, com percurso adaptado ao grupo.", price: "Sob consulta" },
        { type: "Programa completo", title: "Viagem acompanhada", text: "Chegada, deslocações durante a estadia e regresso.", price: "Sob consulta" },
      ],
      noticeTitle: "Reservas ainda não disponíveis",
      noticeText: "Estamos a preparar todos os detalhes operacionais e legais para lançar o serviço com a qualidade que exigimos. Para já, pode pedir informações e registar o seu interesse; não será criada qualquer reserva.",
      noticeButton: "Reservas temporariamente bloqueadas",
    },
    contact: {
      label: "Contacto",
      title: "Conte-nos como imagina a viagem.",
      text: "Partilhe origem, destino, datas aproximadas, número de passageiros e aquilo que gostaria de conhecer. Respondemos com orientação, sem compromisso e sem confirmar reservas enquanto o serviço estiver em preparação.",
      whatsapp: "Falar por WhatsApp",
      email: "Enviar email",
      note: "Informação apenas · sem confirmação de reserva",
    },
    footer: { line: `© ${new Date().getFullYear()} MontanhAoRedor · Transfers & Tours · Portugal`, privacy: "Viagens privadas, cuidado próximo." },
    menu: "Menu",
    close: "Fechar",
  },
  en: {
    nav: { services: "Services", journey: "Assisted journey", routes: "Itineraries", fares: "Rates & Services", contact: "Contact" },
    status: "Service in preparation · bookings temporarily unavailable",
    hero: { eyebrow: "Private transfers & tours in Portugal", title: "Portugal begins", italic: "before the destination.", description: "From your airport arrival to the places you will remember: private transport, attentive support and journeys shaped around your pace.", primary: "Explore the services", secondary: "Request information", photoAlt: "Green private vehicle on a mountain road in Portugal" },
    proof: [{ value: "1—6", label: "passengers" }, { value: "door to door", label: "airport or address" }, { value: "private", label: "tinted windows" }, { value: "tailored", label: "pace and route" }],
    intro: { label: "A different proposal", title: "Would you like to leave Portugal feeling you truly discovered it?", text: "We designed a service for travellers who value time, calm and trusted company. We take care of the transitions — arrival, journeys, experiences and return — so you only have to choose what you wish to experience.", quote: "Less time coordinating. More time being present." },
    services: { label: "Services", title: "One journey, many ways to care.", intro: "Choose a single transfer or build a complete programme in Portugal with us.", items: [
      { title: "Private transfers", text: "Pickup at airports, stations, accommodation or private addresses, with time and destination agreed in advance.", note: "Lisbon · Porto · Leiria · other origins" },
      { title: "Private tours", text: "Full or half days dedicated to landscape, heritage, food and special places, without the rigidity of a group circuit.", note: "Central Portugal · North · South" },
      { title: "Assisted journey", text: "One plan for arrival, stay, selected journeys and return, with support through every transition.", note: "From first meeting to farewell" },
      { title: "Personal support", text: "A reassuring solution for families, senior travellers or visitors who prefer not to drive long distances.", note: "Human pace · discreet attention" },
    ] },
    journey: { label: "Assisted journey", title: "From your door to Portugal — and back.", text: "We can meet you at an airport or, for guests living in Portugal, at an address of your choice. During your stay, journeys are shaped around your interests. At the end, we coordinate the return as well.", steps: [
      { number: "01", title: "Arrive", text: "Pickup at the agreed point, help with luggage and a direct connection to your accommodation." },
      { number: "02", title: "Discover", text: "Private itineraries adjusted to the group, available time and the rhythm of each day." },
      { number: "03", title: "Return", text: "Planning the final journey so you reach the airport or home with peace of mind." },
    ], imageAlt: "Private passenger welcome outside a Portuguese airport" },
    comfort: { label: "Comfort & privacy", title: "Space to travel well.", text: "The cabin welcomes up to six passengers, with a quiet atmosphere, generous visibility and tinted windows to preserve privacy.", points: ["Up to 6 passengers", "Tinted windows", "Luggage space", "Comfortable cabin", "Private travel", "Attention to special needs"], imageAlt: "Comfortable private vehicle interior for six passengers" },
    routes: { label: "Possible itineraries", title: "Portugal, at the pace of your journey.", intro: "We do not sell a rigid itinerary. Your interests, available time and preferred pace shape a coherent proposal.", items: [
      { area: "Central Portugal", title: "Mountains, caves and heritage", text: "Parque Natural Serra de Aire e Candeeiros, Alvados, Mira de Aire, Batalha, Alcobaça, Fátima and Nazaré." },
      { area: "North", title: "Cities, rivers and wine", text: "Coimbra, Aveiro, Porto and the Douro Valley in a journey adapted to the time available." },
      { area: "South", title: "Historic towns and Atlantic coast", text: "Óbidos, Lisbon, Sintra and the Atlantic coast, with stops selected at the group's pace." },
    ], imageAlt: "Green private vehicle at a Portuguese Atlantic viewpoint" },
    fares: { label: "Rates & Services", title: "A clear proposal for every journey.", intro: "Pricing depends on distance, duration, waiting time, number of days and chosen programme. Before any commitment, we provide a complete and transparent proposal.", cards: [
      { type: "Direct connection", title: "Transfer", text: "One origin, one destination and coordinated support on arrival.", price: "On request" },
      { type: "Private experience", title: "Tour", text: "Half or full day, with an itinerary adjusted to the group.", price: "On request" },
      { type: "Complete programme", title: "Assisted journey", text: "Arrival, travel during the stay and return.", price: "On request" },
    ], noticeTitle: "Bookings are not open yet", noticeText: "We are preparing every operational and legal detail to launch the service to our quality standard. For now, you can request information and register interest; no booking will be created.", noticeButton: "Bookings temporarily closed" },
    contact: { label: "Contact", title: "Tell us how you imagine the journey.", text: "Share your origin, destination, approximate dates, number of passengers and what you would like to discover. We will reply with guidance, without obligation and without confirming bookings while the service is in preparation.", whatsapp: "Talk on WhatsApp", email: "Send email", note: "Information only · no booking confirmation" },
    footer: { line: `© ${new Date().getFullYear()} MontanhAoRedor · Transfers & Tours · Portugal`, privacy: "Private journeys, personal care." },
    menu: "Menu", close: "Close",
  },
  de: {
    nav: { services: "Leistungen", journey: "Begleitete Reise", routes: "Routen", fares: "Preise & Leistungen", contact: "Kontakt" },
    status: "Service in Vorbereitung · Buchungen vorübergehend nicht verfügbar",
    hero: { eyebrow: "Private Transfers & Touren in Portugal", title: "Portugal beginnt", italic: "vor dem Reiseziel.", description: "Von der Ankunft am Flughafen bis zu den Orten, die in Erinnerung bleiben: privater Transport, aufmerksame Begleitung und Reisen in Ihrem Rhythmus.", primary: "Leistungen entdecken", secondary: "Information anfragen", photoAlt: "Grünes Privatfahrzeug auf einer Bergstraße in Portugal" },
    proof: [{ value: "1—6", label: "Fahrgäste" }, { value: "Tür zu Tür", label: "Flughafen oder Adresse" }, { value: "privat", label: "getönte Scheiben" }, { value: "individuell", label: "Tempo und Route" }],
    intro: { label: "Ein anderes Angebot", title: "Möchten Sie Portugal mit dem Gefühl verlassen, es wirklich entdeckt zu haben?", text: "Unser Service ist für Reisende gedacht, die Zeit, Ruhe und eine vertrauensvolle Begleitung schätzen. Wir kümmern uns um Ankunft, Fahrten, Erlebnisse und Rückreise — Sie wählen nur, was Sie erleben möchten.", quote: "Weniger organisieren. Mehr erleben." },
    services: { label: "Leistungen", title: "Eine Reise, viele Arten der Betreuung.", intro: "Wählen Sie einen einzelnen Transfer oder gestalten Sie mit uns ein vollständiges Portugal-Programm.", items: [
      { title: "Private Transfers", text: "Abholung an Flughäfen, Bahnhöfen, Unterkünften oder Privatadressen zu einer vorab vereinbarten Zeit.", note: "Lissabon · Porto · Leiria · weitere Abfahrtsorte" },
      { title: "Private Touren", text: "Halbe oder ganze Tage für Landschaft, Kultur, Gastronomie und besondere Orte — ohne starre Gruppenroute.", note: "Zentralportugal · Norden · Süden" },
      { title: "Begleitete Reise", text: "Ein Plan für Ankunft, Aufenthalt, ausgewählte Fahrten und Rückreise, mit Unterstützung bei jedem Übergang.", note: "Vom ersten Treffen bis zum Abschied" },
      { title: "Persönliche Unterstützung", text: "Eine besonders ruhige Lösung für Familien, ältere Gäste oder Reisende, die lange Strecken nicht selbst fahren möchten.", note: "Menschliches Tempo · diskrete Aufmerksamkeit" },
    ] },
    journey: { label: "Begleitete Reise", title: "Von Ihrer Tür nach Portugal — und zurück.", text: "Wir können Sie am Flughafen oder, wenn Sie in Portugal leben, an einer Adresse Ihrer Wahl abholen. Während des Aufenthalts richten wir die Fahrten an Ihren Interessen aus. Auch die Rückreise wird koordiniert.", steps: [
      { number: "01", title: "Ankommen", text: "Abholung am vereinbarten Ort, Hilfe mit dem Gepäck und direkte Fahrt zur Unterkunft." },
      { number: "02", title: "Entdecken", text: "Private Routen, angepasst an die Gruppe, die verfügbare Zeit und den Rhythmus des Tages." },
      { number: "03", title: "Zurückkehren", text: "Planung der letzten Fahrt, damit Sie den Flughafen oder Ihr Zuhause entspannt erreichen." },
    ], imageAlt: "Private Begrüßung von Reisenden an einem portugiesischen Flughafen" },
    comfort: { label: "Komfort & Privatsphäre", title: "Raum für angenehmes Reisen.", text: "Der Innenraum bietet Platz für bis zu sechs Fahrgäste, eine ruhige Atmosphäre, gute Sicht und getönte Scheiben für mehr Privatsphäre.", points: ["Bis zu 6 Fahrgäste", "Getönte Scheiben", "Platz für Gepäck", "Komfortabler Innenraum", "Private Reise", "Beachtung besonderer Bedürfnisse"], imageAlt: "Komfortabler Innenraum eines Privatfahrzeugs für sechs Fahrgäste" },
    routes: { label: "Mögliche Routen", title: "Portugal im Rhythmus Ihrer Reise.", intro: "Wir verkaufen keine starre Route. Ihre Interessen, die verfügbare Zeit und das gewünschte Tempo bestimmen den Vorschlag.", items: [
      { area: "Zentralportugal", title: "Berge, Höhlen und Kulturerbe", text: "Parque Natural Serra de Aire e Candeeiros, Alvados, Mira de Aire, Batalha, Alcobaça, Fátima und Nazaré." },
      { area: "Norden", title: "Städte, Flüsse und Wein", text: "Coimbra, Aveiro, Porto und das Douro-Tal, angepasst an die verfügbare Zeit." },
      { area: "Süden", title: "Historische Orte und Atlantik", text: "Óbidos, Lissabon, Sintra und die Atlantikküste, mit Stopps im Tempo der Gruppe." },
    ], imageAlt: "Grünes Privatfahrzeug an einem portugiesischen Atlantik-Aussichtspunkt" },
    fares: { label: "Preise & Leistungen", title: "Ein klares Angebot für jede Reise.", intro: "Der Preis richtet sich nach Entfernung, Dauer, Wartezeiten, Anzahl der Tage und gewähltem Programm. Vor jeder Zusage erhalten Sie ein vollständiges, transparentes Angebot.", cards: [
      { type: "Direkte Verbindung", title: "Transfer", text: "Ein Startpunkt, ein Ziel und koordinierte Unterstützung bei der Ankunft.", price: "Auf Anfrage" },
      { type: "Privates Erlebnis", title: "Tour", text: "Halber oder ganzer Tag, mit einer an die Gruppe angepassten Route.", price: "Auf Anfrage" },
      { type: "Komplettes Programm", title: "Begleitete Reise", text: "Ankunft, Fahrten während des Aufenthalts und Rückreise.", price: "Auf Anfrage" },
    ], noticeTitle: "Buchungen sind noch nicht geöffnet", noticeText: "Wir bereiten alle betrieblichen und rechtlichen Details vor, um den Service in der gewünschten Qualität zu starten. Sie können bereits Informationen anfragen und Interesse bekunden; es wird noch keine Buchung erstellt.", noticeButton: "Buchungen vorübergehend geschlossen" },
    contact: { label: "Kontakt", title: "Erzählen Sie uns von Ihrer Reise.", text: "Teilen Sie Ausgangspunkt, Ziel, ungefähre Daten, Anzahl der Reisenden und Ihre Wünsche mit. Wir antworten unverbindlich, ohne eine Buchung zu bestätigen, solange der Service vorbereitet wird.", whatsapp: "Über WhatsApp sprechen", email: "E-Mail senden", note: "Nur Information · keine Buchungsbestätigung" },
    footer: { line: `© ${new Date().getFullYear()} MontanhAoRedor · Transfers & Tours · Portugal`, privacy: "Private Reisen, persönliche Betreuung." },
    menu: "Menü", close: "Schließen",
  },
  nl: {
    nav: { services: "Diensten", journey: "Begeleide reis", routes: "Routes", fares: "Tarieven & Diensten", contact: "Contact" },
    status: "Dienst in voorbereiding · reserveringen tijdelijk niet beschikbaar",
    hero: { eyebrow: "Privétransfers & tours in Portugal", title: "Portugal begint", italic: "vóór de bestemming.", description: "Van aankomst op de luchthaven tot de plekken die u bijblijven: privévervoer, attente begeleiding en reizen op uw tempo.", primary: "Ontdek de diensten", secondary: "Vraag informatie", photoAlt: "Groen privévoertuig op een bergweg in Portugal" },
    proof: [{ value: "1—6", label: "passagiers" }, { value: "deur tot deur", label: "luchthaven of adres" }, { value: "privé", label: "getinte ramen" }, { value: "op maat", label: "tempo en route" }],
    intro: { label: "Een ander voorstel", title: "Wilt u Portugal verlaten met het gevoel dat u het echt hebt ontdekt?", text: "Onze dienst is gemaakt voor reizigers die tijd, rust en vertrouwd gezelschap waarderen. Wij verzorgen aankomst, ritten, ervaringen en terugreis — u kiest alleen wat u wilt beleven.", quote: "Minder tijd aan organiseren. Meer tijd om aanwezig te zijn." },
    services: { label: "Diensten", title: "Eén reis, verschillende manieren van zorgen.", intro: "Kies één transfer of bouw met ons een volledig programma in Portugal.", items: [
      { title: "Privétransfers", text: "Ophalen bij luchthavens, stations, accommodaties of privé-adressen, op een vooraf afgesproken tijdstip.", note: "Lissabon · Porto · Leiria · andere vertrekpunten" },
      { title: "Privétours", text: "Halve of hele dagen voor landschap, erfgoed, gastronomie en bijzondere plekken, zonder een strak groepsschema.", note: "Centraal-Portugal · Noorden · Zuiden" },
      { title: "Begeleide reis", text: "Eén plan voor aankomst, verblijf, gekozen ritten en terugreis, met ondersteuning bij elke overgang.", note: "Van eerste ontmoeting tot afscheid" },
      { title: "Persoonlijke ondersteuning", text: "Een geruststellende oplossing voor families, senioren of bezoekers die liever geen lange afstanden rijden.", note: "Menselijk tempo · discrete aandacht" },
    ] },
    journey: { label: "Begeleide reis", title: "Van uw deur naar Portugal — en terug.", text: "We kunnen u ophalen op een luchthaven of, wanneer u in Portugal woont, op een adres naar keuze. Tijdens het verblijf stemmen we de ritten af op uw interesses. Ook de terugreis wordt gecoördineerd.", steps: [
      { number: "01", title: "Aankomen", text: "Ophalen op de afgesproken plek, hulp met bagage en een rechtstreekse rit naar de accommodatie." },
      { number: "02", title: "Ontdekken", text: "Privéroutes afgestemd op de groep, de beschikbare tijd en het tempo van elke dag." },
      { number: "03", title: "Terugkeren", text: "Planning van de laatste rit zodat u ontspannen de luchthaven of uw woning bereikt." },
    ], imageAlt: "Privéontvangst van reizigers bij een Portugese luchthaven" },
    comfort: { label: "Comfort & privacy", title: "Ruimte om goed te reizen.", text: "Het interieur biedt plaats aan maximaal zes passagiers, met een stille sfeer, ruim zicht en getinte ramen die de privacy bewaren.", points: ["Tot 6 passagiers", "Getinte ramen", "Bagageruimte", "Comfortabel interieur", "Privéreis", "Aandacht voor speciale behoeften"], imageAlt: "Comfortabel interieur van een privévoertuig voor zes passagiers" },
    routes: { label: "Mogelijke routes", title: "Portugal, op het ritme van uw reis.", intro: "We verkopen geen vast reisschema. Uw interesses, beschikbare tijd en gewenste tempo vormen de basis van een samenhangend voorstel.", items: [
      { area: "Centraal-Portugal", title: "Bergen, grotten en erfgoed", text: "Parque Natural Serra de Aire e Candeeiros, Alvados, Mira de Aire, Batalha, Alcobaça, Fátima en Nazaré." },
      { area: "Noorden", title: "Steden, rivieren en wijn", text: "Coimbra, Aveiro, Porto en de Dourovallei in een reis die past bij de beschikbare tijd." },
      { area: "Zuiden", title: "Historische plaatsen en Atlantische kust", text: "Óbidos, Lissabon, Sintra en de Atlantische kust, met stops op het tempo van de groep." },
    ], imageAlt: "Groen privévoertuig bij een Portugees Atlantisch uitkijkpunt" },
    fares: { label: "Tarieven & Diensten", title: "Een duidelijk voorstel voor elke reis.", intro: "De prijs hangt af van afstand, duur, wachttijd, aantal dagen en het gekozen programma. Voor elke afspraak ontvangt u een volledig en transparant voorstel.", cards: [
      { type: "Directe verbinding", title: "Transfer", text: "Eén vertrekpunt, één bestemming en gecoördineerde ondersteuning bij aankomst.", price: "Op aanvraag" },
      { type: "Privé-ervaring", title: "Tour", text: "Halve of hele dag, met een route aangepast aan de groep.", price: "Op aanvraag" },
      { type: "Volledig programma", title: "Begeleide reis", text: "Aankomst, ritten tijdens het verblijf en terugreis.", price: "Op aanvraag" },
    ], noticeTitle: "Reserveringen zijn nog niet geopend", noticeText: "We bereiden alle operationele en wettelijke details voor om de dienst met onze gewenste kwaliteit te lanceren. U kunt al informatie aanvragen en interesse registreren; er wordt nog geen reservering gemaakt.", noticeButton: "Reserveringen tijdelijk gesloten" },
    contact: { label: "Contact", title: "Vertel ons hoe u de reis voor zich ziet.", text: "Deel vertrekpunt, bestemming, geschatte data, aantal passagiers en wat u wilt ontdekken. We antwoorden vrijblijvend en bevestigen geen reservering zolang de dienst in voorbereiding is.", whatsapp: "Praat via WhatsApp", email: "E-mail sturen", note: "Alleen informatie · geen reserveringsbevestiging" },
    footer: { line: `© ${new Date().getFullYear()} MontanhAoRedor · Transfers & Tours · Portugal`, privacy: "Privéreizen, persoonlijke zorg." },
    menu: "Menu", close: "Sluiten",
  },
};

export const flags: Record<Lang, string> = { pt: "PT", en: "EN", de: "DE", nl: "NL" };
