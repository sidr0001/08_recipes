# Teknisk dokumentation for Tema 8 gruppeprojekt for gruppe 4:

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi har organiseret alle billeder inden under vores img mappe. Vores fonte har vi indsat i alle headers og samlet dem under en fonte kategori på vores 'samlet.css'.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vi har valgt at placere filen sammen med de andre mapper og tydeliggjort navnet som 'samlet.css', så man vidst at den fungeret på tværs af alle filer på projektet.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Vi har lavet en CSS- og JavaScript- fil til hver enkelt side på hjemmesiden, udover vores samlet fælles css fil.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Vi har udelukkende kun brugt små bogstaver, ingen mellemrum og ingen brug af tegn (udover punktum).

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi har brugt den samme navn på tværs af alle filtyperne der tilhører samme side.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Til sidst i bodyen.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi har prioritiseret at enten bruge ens navn i commit beskeden eller bruge #tal, for at indikerer hvilken edit man har været igang med.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har løbende fordelt arbejdet, så vi ikke var flere der arbejdet inden under samme fil på samme tidspunkt. Vi har derfor også været tydelige i vores kommunikation ift. hvornår man var færdig med sin del.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi vurderer det hver især, og bruger både brug af tal og navn.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Det har vi primært gjordt fysisk face-to-face, eller været klar i vores kommunikation over beskeder.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi skriver funktioner i JavaScript både med function-keywordet og som arrow functions, afhængigt af formålet.
  Vi bruger function-keywordet, når funktionen skal kunne genbruges flere steder eller har brug for sin egen this-binding.
  Vi bruger arrow functions til kortere og enklere funktioner, fx i event listeners eller forEach-loops.

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  I CSS bruger vi classes (.) til styling, da de kan genbruges flere steder. I Java bruger vi typisk id´er (#), til at referer til et specifikt element.

- Skal filer have korte forklaringer som kommentarer?
  Vi brugte kommentarer i koden hvis noget var kompleks og der havde brug for yderligere forklaring.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter efter cuisine og mealtype.
- Dynamisk visning af produkter i HTML.
- Visning af detaljeret opskriftsside.
- Interaktive og Call-to-Action knapper.
- Responsiv scrollbar på forsiden.
- Email-signup sektion.

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- https://dummyjson.com/recipes

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  Funktionen showRecipes henter data fra vores API og genererer en liste af opskrifter i HTML.
  Den bliver kaldt, når brugeren vælger et bestemt cuisine (fx Italian eller Asian).

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  Recipes (array) – indeholder opskrifter hentet fra API’et.
  Container (HTML-element) – det område i DOM’en, hvor opskrifterne skal vises.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Funktionen returnerer ingenting og blot manipulerer DOM´en.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
  Funktionen bliver kaldt inde fra getData() efter data er hentet og filtreret fra API’et.

```javascript
//funktionens kode:
function showCategories(categories) {
  categories.forEach((category) => {
    kategory_container.innerHTML += `
      <div>
        <a href="recipes.html?cuisine=${category.cuisine}">
          <img src="${category.image}" alt="${category.cuisine}" />
          <h2>${category.cuisine}</h2>
        </a>
      </div>`;
  });
}
```
