# Com ens movem per Tarragona? — Web Divulgativa

## Descripció del Projecte

Aquesta és una web divulgativa sobre la **mobilitat urbana a la ciutat de Tarragona**. El projecte analitza l'accessibilitat al transport públic (EMT) i com la xarxa d'autobusos urbans connecta els diferents barris amb els principals serveis urbans: hospitals, universitats, estació de tren, etc.

Les dades de base provenen de les **estadístiques anuals de validació per parada (2023)** i han estat processades i cartografiades amb **QGIS**.

---

## Estructura de la Web

El lloc web consta de les pàgines següents:

| Fitxer | Contingut |
|---|---|
| `index.html` | Pàgina principal amb el mapa interactiu qgis2web |
| `info.html` | Informació sobre la mobilitat urbana i el transport públic |
| `informes.html` | Mapa interactiu QGIS i informe cartogràfic estàtic |
| `multimedia.html` | Galeria visual del transport públic a Tarragona |
| `contacte.html` | Formulari de contacte |

---

## Tecnologies Utilitzades

| Tecnologia | Ús |
|---|---|
| **HTML5** | Estructura semàntica de totes les pàgines |
| **CSS3 (Vanilla)** | Estils personalitzats (`css/styles.css`) |
| **Bootstrap 5.3** | Framework CSS per al disseny responsiu (grid, navbar, cards) |
| **OpenLayers** | Motor del mapa interactiu (inclòs via qgis2web) |
| **qgis2web (plugin QGIS)** | Exportació del projecte cartogràfic a web interactiva |
| **QGIS 3.x** | Elaboració dels mapes i l'anàlisi territorial |

---

## Mapa Interactiu

El mapa interactiu ha estat generat directament des de **QGIS** amb el plugin **qgis2web**, i exporta el projecte cartogràfic a una aplicació web basada en **OpenLayers**.

El mapa mostra:
- **Parades de l'EMT** amb simbologia graduada segons el volum de viatgers anuals (2023)
- Informació detallada en clicar cada parada (nom, número de validacions)
- Canvi de capa base interactiu

La carpeta del mapa és: `qgis2web_2026_06_16-21_47_31_151264/`

---

## Com Obrir la Web

El mapa interactiu s'ha integrat **directament** a les pàgines HTML (sense iframes). Això vol dir que:

> ✅ **La web funciona fent doble clic a `index.html` i obrint-lo directament amb Chrome, sense necessitat de cap servidor local.**

### Obre directament amb Chrome

1. Ves a la carpeta del projecte
2. Fes doble clic a `index.html`
3. S'obrirà automàticament al navegador predeterminat

Si no s'obre amb Chrome, fes clic dret → *Obrir amb* → *Google Chrome*.

### Opció alternativa: Servidor local (Python)

Si vols un entorn més semblant a producció, pots llançar un servidor local des de la carpeta arrel:

```bash
python3 -m http.server 8000
```

Obre el navegador i visita:
```
http://localhost:8000
```

---

## Estructura de Carpetes

```
Web Jaume Parra/
├── index.html                          ← Pàgina principal
├── info.html                           ← Informació general
├── informes.html                       ← Informes i cartografia
├── multimedia.html                     ← Galeria visual
├── contacte.html                       ← Formulari de contacte
├── css/
│   └── styles.css                      ← Estils personalitzats
├── js/
│   └── script.js                       ← JavaScript general
├── img/                                ← Imatges del lloc web
├── docs/                               ← Informes PDF
└── qgis2web_2026_06_16-21_47_31_151264/  ← Mapa interactiu (OpenLayers)
    ├── index.html                      ← Entrada del mapa
    ├── layers/                         ← Dades GeoJSON de les parades
    ├── styles/                         ← Estils de les capes
    └── resources/                      ← Biblioteques OpenLayers
```

---

## Autor

**Jaume Parra**  
Treball acadèmic — Curs 2025–2026  
Grau en Geografia i Ordenació del Territori  

---

*Dades de transport: EMT Tarragona — Any 2023*  
*Cartografia elaborada amb QGIS 3.x i exportada amb el plugin qgis2web*
