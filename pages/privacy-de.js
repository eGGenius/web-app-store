import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Link from "next/link";

export default function Privacy() {
    return (<> <div className="p-4">
        <Card>
            <Link href="/privacy-en">
                <Button
                    label="English"
                    type="button"
                    className="flag flag-de p-button-raised mr-3 p-button-info" />
            </Link>
            <h1>Datenschutzerklärung</h1>
            <h2 id="m1870">Einleitung</h2>
            <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
                welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &quot;Daten&quot;
                bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der
                Bereitstellung unserer Applikation verarbeiten.</p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p>Stand: 8. August 2022</p>
            <h2>Inhaltsübersicht</h2>
            <ul className='index'>
                <li>
                    <a className='index-link' href="#m1870">Einleitung</a>
                </li>
                <li>
                    <a className='index-link' href="#m3">Verantwortlicher</a>
                </li>
                <li>
                    <a className='index-link' href="#mOverview">Übersicht der Verarbeitungen</a>
                </li>
                <li>
                    <a className='index-link' href="#m13">Maßgebliche Rechtsgrundlagen</a>
                </li>
                <li>
                    <a className='index-link' href="#m27">Sicherheitsmaßnahmen</a>
                </li>
                <li>
                    <a className='index-link' href="#m25">Übermittlung von personenbezogenen Daten</a>
                </li>
                <li>
                    <a className='index-link' href="#m24">Datenverarbeitung in Drittländern</a>
                </li>
                <li>
                    <a className='index-link' href="#m134">Einsatz von Cookies</a>
                </li>
                <li>
                    <a className='index-link' href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
                </li>
                <li>
                    <a className='index-link' href="#m367">Registrierung, Anmeldung und Nutzerkonto</a>
                </li>
                <li>
                    <a className='index-link' href="#m182">Kontakt- und Anfragenverwaltung</a>
                </li>
                <li>
                    <a className='index-link' href="#m17">Newsletter und elektronische Benachrichtigungen</a>
                </li>
                <li>
                    <a className='index-link' href="#m638">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</a>
                </li>
                <li>
                    <a className='index-link' href="#m263">Webanalyse, Monitoring und Optimierung</a>
                </li>
                <li>
                    <a className='index-link' href="#m136">Präsenzen in sozialen Netzwerken (Social Media)</a>
                </li>
            </ul>
            <h2 id="m3">Verantwortlicher</h2>
            <p>Jonathan Maier,<br />Albstraße 8<br />72555 Metzingen</p>
            E-Mail-Adresse:
            <p>contact@webapp-store.de</p>
            <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
            <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die
                Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
            <h3>Arten der verarbeiteten Daten</h3>
            <ul>
                <li>Bestandsdaten.</li>
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-/Kommunikationsdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
                <li>Kommunikationspartner.</li>
                <li>Nutzer.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
                <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
                <li>Kontaktanfragen und Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Direktmarketing.</li>
                <li>Reichweitenmessung.</li>
                <li>Tracking.</li>
                <li>Verwaltung und Beantwortung von Anfragen.</li>
                <li>Feedback.</li>
                <li>Marketing.</li>
                <li>Profile mit nutzerbezogenen Informationen.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
            </ul>
            <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
            <p>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf
                deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in
                Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im
                Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese
                in der Datenschutzerklärung mit.</p>
            <ul>
                <li>
                    <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong>
                    - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
                    betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere
                    bestimmte Zwecke gegeben.</li>
                <li>
                    <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit.
                        b) DSGVO)</strong>
                    - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei
                    die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen
                    erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
                <li>
                    <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong>
                    - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                    Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen
                    oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz
                    personenbezogener Daten erfordern, überwiegen.</li>
            </ul>
            <p>Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung
                gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört
                insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei
                der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
                insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung,
                zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener
                Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
                automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
                Weiteren regelt es die Datenverarbeitung für Zwecke des
                Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die
                Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie
                die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der
                einzelnen Bundesländer zur Anwendung gelangen.</p>
            <h2 id="m27">Sicherheitsmaßnahmen</h2>
            <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des
                Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der
                Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und
                Freiheiten natürlicher Personen geeignete technische und organisatorische
                Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
            <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
                Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und
                elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der
                Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des
                Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der
                Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
                Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung
                und durch datenschutzfreundliche Voreinstellungen.</p>
            <p>SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten
                Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart
                verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres
                Browsers.</p>
            <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
            <p>Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass
                die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
                Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
                offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben
                beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine
                Webseite eingebunden werden, gehören. In solchen Fall beachten wir die
                gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw.
                Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer
                Daten ab.</p>
            <h2 id="m24">Datenverarbeitung in Drittländern</h2>
            <p>Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union
                (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung
                im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw.
                Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet,
                erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.
            </p>
            <p>Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich
                erforderlicher Übermittlung verarbeiten oder lassen wir die Daten nur in
                Drittländern mit einem anerkannten Datenschutzniveau, vertraglichen
                Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, beim
                Vorliegen von Zertifizierungen oder verbindlicher internen
                Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der
                EU-Kommission:
                <a
                    href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                    >https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>).</p>
            <h2 id="m134">Einsatz von Cookies</h2>
            <p>Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
                Informationen auf Endgeräten speichern und Informationen aus den Endgeräten
                auslesen. Z.B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt
                in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines
                Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen Zwecken
                eingesetzt werden, z.B. zu Zwecken der Funktionsfähigkeit, Sicherheit und
                Komfort von Onlineangeboten sowie der Erstellung von Analysen der
                Besucherströme.
            </p>
            <p>
                <strong>Hinweise zur Einwilligung:
                </strong>Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein.
                Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn
                diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht
                notwendig, wenn das Speichern und das Auslesen der Informationen, also auch von
                Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen
                ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur
                Verfügung zu stellen. Die widerrufliche Einwilligung wird gegenüber den Nutzern
                deutlich kommuniziert und enthält die Informationen zu der jeweiligen
                Cookie-Nutzung.</p>
            <p>
                <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:
                </strong>Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die
                personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt
                davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer
                einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte
                Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten
                auf Grundlage unserer berechtigten Interessen (z.B. an einem
                betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung seiner
                Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer
                vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist,
                um unsere vertraglichen Verpflichtungen zu erfüllen. Zu welchen Zwecken die
                Cookies von uns verarbeitet werden, darüber klären wir im Laufe dieser
                Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und
                Verarbeitungsprozessen auf.</p>
            <p>
                <strong>Speicherdauer:
                </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von
                Cookies unterschieden:</p>
            <ul>
                <li>
                    <strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong>
                    Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
                    Online-Angebot verlassen und sein Endgerät (z.B. Browser oder mobile
                    Applikation) geschlossen hat.</li>
                <li>
                    <strong>Permanente Cookies:</strong>
                    Permanente Cookies bleiben auch nach dem Schließen des Endgerätes gespeichert.
                    So können beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte
                    direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso
                    können die mit Hilfe von Cookies erhobenen Daten der Nutzer zur
                    Reichweitenmessung verwendet werden. Sofern wir Nutzern keine expliziten Angaben
                    zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung
                    der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent sind
                    und die Speicherdauer bis zu zwei Jahre betragen kann.</li>
            </ul>
            <p>
                <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):
                </strong>Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit
                widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den
                gesetzlichen Vorgaben im Art. 21 DSGVO einlegen. Nutzer können ihren Widerspruch
                auch über die Einstellungen ihres Browsers erklären, z.B. durch Deaktivierung
                der Verwendung von Cookies (wobei dadurch auch die Funktionalität unserer
                Online-Dienste eingeschränkt sein kann). Ein Widerspruch gegen die Verwendung
                von Cookies zu Online-Marketing-Zwecken kann auch über die Websites
                <a href="https://optout.aboutads.info" >https://optout.aboutads.info</a>
                und
                <a href="https://www.youronlinechoices.com/" >https://www.youronlinechoices.com/</a>
                erklärt werden.</p>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:
                    </strong>Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in
                    dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der
                    im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten
                    Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und
                    widerrufen werden können. Hierbei wird die Einwilligungserklärung gespeichert,
                    um deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung
                    entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
                    Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes
                    Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die
                    Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können. Vorbehaltlich
                    individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten
                    die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu
                    zwei Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet
                    und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung
                    (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem
                    Browser, System und verwendeten Endgerät gespeichert.</li>
            </ul>
            <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
            <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur
                Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des
                Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste
                an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                    Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit;
                    Informationstechnische Infrastruktur (Betrieb und Bereitstellung von
                    Informationssystemen und technischen Geräten (Computer, Server etc.).);
                    Sicherheitsmaßnahmen.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:
                    </strong>Für die Bereitstellung unseres Onlineangebotes nutzen wir
                    Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden
                    Serveranbieter (auch &quot;Webhoster&quot; genannt) mieten oder anderweitig beziehen;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                <li>
                    <strong>Bereitstellung Onlineangebot auf eigener/ dedizierter Serverhardware:
                    </strong>Für die Bereitstellung unseres Onlineangebotes nutzen wir von uns
                    betriebene Serverhardware sowie den damit verbundenen Speicherplatz, die
                    Rechenkapazität und die Software;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                <li>
                    <strong>Erhebung von Zugriffsdaten und Logfiles:
                    </strong>Der Zugriff auf unser Onlineangebot wird in Form von so genannten
                    &quot;Server-Logfiles&quot; protokolliert. Zu den Serverlogfiles können die Adresse und
                    Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs,
                    übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst
                    Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite)
                    und im Regelfall IP-Adressen und der anfragende Provider gehören. Die
                    Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden,
                    z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
                    missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die
                    Auslastung der Server und ihre Stabilität sicherzustellen;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong>Löschung von Daten:</strong>
                    Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und
                    danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu
                    Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
                    Vorfalls von der Löschung ausgenommen.</li>
            </ul>
            <h2 id="m367">Registrierung, Anmeldung und Nutzerkonto</h2>
            <p>Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den
                Nutzern die erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der
                Bereitstellung des Nutzerkontos auf Grundlage vertraglicher Pflichterfüllung
                verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die
                Login-Informationen (Nutzername, Passwort sowie eine E-Mail-Adresse).</p>
            <p>Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen
                sowie der Nutzung des Nutzerkontos speichern wir die IP-Adresse und den
                Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage
                unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor
                Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an
                Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung unserer
                Ansprüche erforderlich oder es besteht eine gesetzliche Verpflichtung hierzu.</p>
            <p>Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie
                z.B. technische Änderungen, per E-Mail informiert werden.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail,
                    Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen);
                    Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Erbringung vertraglicher Leistungen und Kundenservice; Sicherheitsmaßnahmen;
                    Verwaltung und Beantwortung von Anfragen; Bereitstellung unseres Onlineangebotes
                    und Nutzerfreundlichkeit.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Registrierung mit Pseudonymen:
                    </strong>Nutzer dürfen statt Klarnamen Pseudonyme als Nutzernamen verwenden;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO).</li>
                <li>
                    <strong>Löschung von Daten nach Kündigung:
                    </strong>Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im
                    Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen Erlaubnis,
                    Pflicht oder Einwilligung der Nutzer, gelöscht;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO).</li>
                <li>
                    <strong>Keine Aufbewahrungspflicht für Daten:
                    </strong>Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem
                    Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der
                    Vertragsdauer gespeicherte Daten des Nutzers unwiederbringlich zu löschen;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO).</li>
            </ul>
            <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
            <p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon
                oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
                Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet
                soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter
                Maßnahmen erforderlich ist.</p>
            <p>Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und
                Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen
                erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von
                (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten
                Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw.
                Geschäftsbeziehungen.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                    Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                    IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Kommunikationspartner.</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Erbringung vertraglicher Leistungen und Kundenservice; Kontaktanfragen und
                    Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z.B. Sammeln
                    von Feedback via Online-Formular); Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Kontaktformular:
                    </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                    Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem
                    Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu
                    diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher
                    und vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung
                    erforderlich ist und im Übrigen auf Grundlage unserer berechtigten Interessen
                    sowie der Interessen der Kommunikationspartner an der Beantwortung der Anliegen
                    und unserer gesetzlichen Aufbewahrungspflichten;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
                    DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <h2 id="m17">Newsletter und elektronische Benachrichtigungen</h2>
            <p>Wir versenden Newsletter, E-Mails und weitere elektronische
                Benachrichtigungen (nachfolgend &quot;Newsletter&quot;) nur mit der Einwilligung der
                Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung
                zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die
                Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter
                Informationen zu unseren Leistungen und uns.</p>
            <p>Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich aus, wenn
                Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch bitten, einen Namen,
                zwecks persönlicher Ansprache im Newsletter, oder weitere Angaben, sofern diese
                für die Zwecke des Newsletters erforderlich sind, zu tätigen.</p>
            <p>
                <strong>Double-Opt-In-Verfahren:</strong>
                Die Anmeldung zu unserem Newsletter erfolgt grundsätzlich in einem sogenannte
                Double-Opt-In-Verfahren. D.h., Sie erhalten nach der Anmeldung eine E-Mail, in
                der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist
                notwendig, damit sich niemand mit fremden E-Mail-Adressen anmelden kann. Die
                Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess
                entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört
                die Speicherung des Anmelde- und des Bestätigungszeitpunkts als auch der
                IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister
                gespeicherten Daten protokolliert.</p>
            <p>
                <strong>Löschung und Einschränkung der Verarbeitung:
                </strong>
                Wir können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage
                unserer berechtigten Interessen speichern, bevor wir sie löschen, um eine
                ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser
                Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein
                individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das
                ehemalige Bestehen einer Einwilligung bestätigt wird. Im Fall von Pflichten zur
                dauerhaften Beachtung von Widersprüchen behalten wir uns die Speicherung der
                E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste (sogenannte
                &quot;Blocklist&quot;) vor.</p>
            <p>Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer
                berechtigten Interessen zu Zwecken des Nachweises seines ordnungsgemäßen
                Ablaufs. Soweit wir einen Dienstleister mit dem Versand von E-Mails beauftragen,
                erfolgt dies auf Grundlage unserer berechtigten Interessen an einem effizienten
                und sicheren Versandsystem.</p>
            <strong>Inhalte:</strong>
            <p>Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail,
                    Telefonnummern); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                    IP-Adressen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                    Zugriffszeiten).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Kommunikationspartner.</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Direktmarketing (z.B. per E-Mail oder postalisch).</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Berechtigte Interessen (Art. 6
                    Abs. 1 S. 1 lit. f) DSGVO).</li>
                <li>
                    <strong>Widerspruchsmöglichkeit (Opt-Out):
                    </strong>Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h.
                    Ihre Einwilligungen widerrufen, bzw. dem weiteren Empfang widersprechen. Einen
                    Link zur Kündigung des Newsletters finden Sie entweder am Ende eines jeden
                    Newsletters oder können sonst eine der oben angegebenen Kontaktmöglichkeiten,
                    vorzugswürdig E-Mail, hierzu nutzen.</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Messung von Öffnungs- und Klickraten:
                    </strong>Die Newsletter enthalten einen sogenannte &quot;web-beacon&quot;, d.h., eine
                    pixelgroße Datei, die beim Öffnen des Newsletters von unserem Server, bzw.,
                    sofern wir einen Versanddienstleister einsetzen, von dessen Server abgerufen
                    wird. Im Rahmen dieses Abrufs werden zunächst technische Informationen, wie
                    Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse und der
                    Zeitpunkt des Abrufs, erhoben. Diese Informationen werden zur technischen
                    Verbesserung unseres Newsletters anhand der technischen Daten oder der
                    Zielgruppen und ihres Leseverhaltens auf Basis ihrer Abruforte (die mit Hilfe
                    der IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt.
                    <strong>Rechtsgrundlagen:</strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</li>
                <li>
                    <strong>Mailchimp:
                    </strong>E-Mail-Versand- und E-Mail-Marketing-Plattform;
                    <strong>Dienstanbieter:</strong>
                    Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308,
                    USA;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong>Website:</strong>
                    <a href="https://mailchimp.com" >https://mailchimp.com</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://mailchimp.com/legal/" >https://mailchimp.com/legal/</a>;
                    <strong>Auftragsverarbeitungsvertrag:</strong>
                    <a href="https://mailchimp.com/legal/" >https://mailchimp.com/legal/</a>;
                    <strong>Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                        Verarbeitung in Drittländern):</strong>
                    Einbeziehung im Auftragsverarbeitungsvertrag;
                    <strong>Weitere Informationen:</strong>
                    Besondere Sicherheitsmaßnahmen:
                    <a
                        href="https://mailchimp.com/help/Mailchimp-european-data-transfers/"
                        >https://mailchimp.com/help/Mailchimp-european-data-transfers/</a>.</li>
            </ul>
            <h2 id="m638">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
            <p>Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
                Kommunikation, die über diverse Kanäle, wie z.B. E-Mail, Telefon, Post oder Fax,
                entsprechend den gesetzlichen Vorgaben erfolgen kann.</p>
            <p>Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu
                widerrufen oder der werblichen Kommunikation jederzeit zu widersprechen.</p>
            <p>Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen
                Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu drei
                Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der Grundlage
                unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den Zweck
                einer möglichen Abwehr von Ansprüchen beschränkt. Auf der Grundlage des
                berechtigten Interesses, den Widerruf bzw. Widerspruch der Nutzer dauerhaft zu
                beachten, speichern wir ferner die zur Vermeidung einer erneuten Kontaktaufnahme
                erforderlichen Daten (z.B. je nach Kommunikationskanal die E-Mail-Adresse,
                Telefonnummer, Name).</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail,
                    Telefonnummern).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Kommunikationspartner.</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Direktmarketing (z.B. per E-Mail oder postalisch).</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Berechtigte Interessen (Art. 6
                    Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
            <p>Die Webanalyse (auch als &quot;Reichweitenmessung&quot; bezeichnet) dient der
                Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten,
                Interessen oder demographische Informationen zu den Besuchern, wie z.B. das
                Alter oder das Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe der
                Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser Onlineangebot
                oder dessen Funktionen oder Inhalte am häufigsten genutzt werden oder zur
                Wiederverwendung einladen. Ebenso können wir nachvollziehen, welche Bereiche der
                Optimierung bedürfen.
            </p>
            <p>Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B.
                unterschiedliche Versionen unseres Onlineangebotes oder seiner Bestandteile zu
                testen und optimieren.</p>
            <p>Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile,
                d.h. zu einem Nutzungsvorgang zusammengefasste Daten angelegt und Informationen
                in einem Browser, bzw. in einem Endgerät gespeichert und aus diesem ausgelesen
                werden. Zu den erhobenen Angaben gehören insbesondere besuchte Webseiten und
                dort genutzte Elemente sowie technische Angaben, wie der verwendete Browser, das
                verwendete Computersystem sowie Angaben zu Nutzungszeiten. Sofern Nutzer in die
                Erhebung ihrer Standortdaten uns gegenüber oder gegenüber den Anbietern der von
                uns eingesetzten Dienste einverstanden erklärt haben, können auch Standortdaten
                verarbeitet werden.</p>
            <p>Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir
                ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch Kürzung der IP-Adresse)
                zum Schutz der Nutzer. Generell werden die im Rahmen von Webanalyse,
                A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z.B.
                E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. D.h., wir als auch
                die Anbieter der eingesetzten Software kennen nicht die tatsächliche Identität
                der Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in deren
                Profilen gespeicherten Angaben.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                    Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender
                    Besucher); Profile mit nutzerbezogenen Informationen (Erstellen von
                    Nutzerprofilen); Tracking (z.B. interessens-/verhaltensbezogenes Profiling,
                    Nutzung von Cookies); Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit.</li>
                <li>
                    <strong>Sicherheitsmaßnahmen:</strong>
                    IP-Masking (Pseudonymisierung der IP-Adresse).</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>Google Analytics:
                    </strong>Webanalyse, Reichweitenmessung sowie Messung von Nutzerströmen;
                    <strong>Dienstanbieter:</strong>
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                    Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                    94043, USA;
                    <strong>Rechtsgrundlagen:</strong>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO);
                    <strong>Website:</strong>
                    <a
                        href="https://marketingplatform.google.com/intl/de/about/analytics/"
                        >https://marketingplatform.google.com/intl/de/about/analytics/</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://policies.google.com/privacy" >https://policies.google.com/privacy</a>;
                    <strong>Auftragsverarbeitungsvertrag:</strong>
                    <a href="https://business.safety.google/adsprocessorterms" >https://business.safety.google/adsprocessorterms</a>;
                    <strong>Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                        Verarbeitung in Drittländern):</strong>
                    <a href="https://business.safety.google/adsprocessorterms" >https://business.safety.google/adsprocessorterms</a>;
                    <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>
                    Opt-Out-Plugin:
                    <a href="https://tools.google.com/dlpage/gaoptout?hl=de" >https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen:
                    <a href="https://adssettings.google.com/authenticated" >https://adssettings.google.com/authenticated</a>;
                    <strong>Weitere Informationen:</strong>
                    <a href="https://privacy.google.com/businesses/adsservices" >https://privacy.google.com/businesses/adsservices</a>
                    (Arten der Verarbeitung sowie der verarbeiteten Daten).</li>
            </ul>
            <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten
                in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu
                kommunizieren oder um Informationen über uns anzubieten.</p>
            <p>Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der
                Europäischen Union verarbeitet werden können. Hierdurch können sich für die
                Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
                erschwert werden könnte.</p>
            <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall
                für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des
                Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
                Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet
                werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten,
                die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden
                im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das
                Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner
                können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern
                verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder
                der jeweiligen Plattformen sind und bei diesen eingeloggt sind).</p>
            <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
                Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen
                und Angaben der Betreiber der jeweiligen Netzwerke.</p>
            <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von
                Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den
                Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff
                auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und
                Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an
                uns wenden.</p>
            <ul className='m-elements'>
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                    Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                    IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Kontaktanfragen und Kommunikation; Feedback (z.B. Sammeln von Feedback via
                    Online-Formular); Marketing.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul className='m-elements'>
                <li>
                    <strong>LinkedIn:
                    </strong>Soziales Netzwerk;
                    <strong>Dienstanbieter:</strong>
                    LinkedIn Irland Unlimited Company, Wilton Plaza Wilton Place, Dublin 2, Irland;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong>Website:</strong>
                    <a href="https://www.linkedin.com" >https://www.linkedin.com</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://www.linkedin.com/legal/privacy-policy" >https://www.linkedin.com/legal/privacy-policy</a>;
                    <strong>Auftragsverarbeitungsvertrag:</strong>
                    <a href="https://legal.linkedin.com/dpa" >https://legal.linkedin.com/dpa</a>;
                    <strong>Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                        Verarbeitung in Drittländern):</strong>
                    <a href="https://legal.linkedin.com/dpa" >https://legal.linkedin.com/dpa</a>;
                    <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>
                    <a
                        href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                        >https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
            </ul>
            <p className='m-elements'>
                <a
                    href="https://datenschutz-generator.de/"
                    title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                    
                    rel="noopener noreferrer nofollow">
                    <img
                        src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png"
                        alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                        width="250"
                        height="250" /></a>
            </p>
        </Card>
    </div>
    </>
    );
}
