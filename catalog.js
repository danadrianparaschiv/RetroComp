// Hit areas and marker centres use pixels in the original 1672 × 941 cabinet image.
// The positions describe the proposed layout. The notes describe inventory status.
const exhibits = [
  {
    id: 'zx81', name: 'Sinclair ZX81', year: '1981',
    area: [709, 147, 245, 173], pin: [724, 166],
    category: ['Home computer', 'Calculator personal'],
    history: [
      'One kilobyte of memory was enough to start writing BASIC on the ZX81. Its flat membrane keyboard and single circuit board fit inside a case small enough to hold in one hand.',
      'Un singur kilooctet de memorie era suficient pentru a începe să scrii în BASIC pe ZX81. Tastatura cu membrană și placa electronică încăpeau într-o carcasă pe care o puteai ține într-o mână.'
    ],
    note: ['The display plan includes a ZX81. The revision and working condition of the unit still need confirmation.', 'Planul vitrinei include un ZX81. Versiunea și starea de funcționare a exemplarului urmează să fie confirmate.'],
    source: ['Centre for Computing History', 'https://www.computinghistory.org.uk/det/184/sinclair-zx81-issue-one/']
  },
  {
    id: 'zx81-ram', name: ['ZX81 memory expansion', 'Extensie de memorie ZX81'], year: null,
    area: [980, 175, 120, 157], pin: [990, 190],
    category: ['Accessory', 'Accesoriu'],
    history: [
      'With only 1 KB built in, a ZX81 could quickly run out of room for a program. A plug-in 16 KB RAM pack gave programmers space for longer listings and more data.',
      'Memoria internă de 1 KB se putea umple repede pe un ZX81. Un modul extern de 16 KB oferea spațiu pentru programe mai lungi și pentru mai multe date.'
    ],
    note: ['A memory expansion is listed alongside the ZX81. Its maker and capacity are still to be checked.', 'În plan apare o extensie de memorie alături de ZX81. Producătorul și capacitatea modulului urmează să fie verificate.'],
    source: ['Centre for Computing History', 'https://www.computinghistory.org.uk/det/184/sinclair-zx81-issue-one/']
  },
  {
    id: 'zx-spectrum', name: 'Sinclair ZX Spectrum', year: '1982',
    area: [1208, 148, 292, 173], pin: [1226, 167],
    category: ['Home computer family', 'Familie de calculatoare'],
    history: [
      'The rainbow in the corner of the Spectrum’s case hinted at what it could put on a television screen. Sinclair’s 48K model paired a compact keyboard with colour graphics and loaded software from cassette.',
      'Curcubeul de pe carcasă sugera ce putea afișa un Spectrum pe ecranul televizorului. Modelul de 48 KB combina tastatura compactă cu grafica în culori și încărca programe de pe casetă.'
    ],
    note: ['The plan names the Spectrum family. The 48K design in the illustration represents the family while the exact variant is being checked.', 'În plan apare familia Spectrum. Ilustrația folosește aspectul modelului de 48 KB. Varianta exactă din colecție urmează să fie identificată.'],
    source: ['Science Museum Group', 'https://collection.sciencemuseumgroup.org.uk/objects/co62580/sinclair-zx-spectrum-microcomputer-1982-1985']
  },
  {
    id: 'famicom', name: 'Nintendo Famicom', year: '1983',
    area: [701, 424, 407, 158], pin: [716, 440],
    category: ['Game console', 'Consolă de jocuri'],
    history: [
      'Nintendo introduced the Family Computer in Japan in 1983. The cream and red console became known as the Famicom. Players overseas would meet the system under another name, the Nintendo Entertainment System.',
      'Nintendo a lansat Family Computer în Japonia în 1983. Consola crem cu roșu a devenit cunoscută drept Famicom. Pe alte piețe, sistemul a primit numele Nintendo Entertainment System.'
    ],
    note: ['Listed as ordered in the collection plan. This is its proposed shelf position. Receipt and display are still unconfirmed.', 'În planul colecției, consola figurează ca fiind comandată. Aceasta este poziția propusă pe raft. Primirea și expunerea urmează să fie confirmate.'],
    source: ['Nintendo', 'https://www.nintendo.co.jp/corporate/en/history/index.html']
  },
  {
    id: 'thec64-mini', name: 'THEC64 Mini', year: '2018',
    area: [1188, 424, 328, 160], pin: [1205, 440],
    category: ['Modern recreation', 'Recreare modernă'],
    history: [
      'At half the size of the Commodore 64, this miniature brings 64 games to an HDMI display. You can also plug in a USB keyboard, open BASIC and write a program of your own.',
      'Această miniatură, la jumătate din dimensiunea unui Commodore 64, oferă 64 de jocuri pe un ecran HDMI. Poți conecta și o tastatură USB pentru a scrie propriile programe în BASIC.'
    ],
    note: ['The Mini is the model named in the plan. The physical unit and its accessories are awaiting inventory review.', 'Mini este modelul menționat în plan. Exemplarul și accesoriile sale urmează să fie inventariate.'],
    source: ['Retro Games Ltd.', 'https://retrogames.biz/products/thec64-mini/']
  },
  {
    id: 'playstation-classic', name: 'PlayStation Classic', year: '2018',
    area: [696, 682, 419, 163], pin: [712, 699],
    category: ['Modern recreation', 'Recreare modernă'],
    history: [
      'Sony shrank the silhouette of its first PlayStation for this 2018 edition. There are 20 games inside the console, ready to play without reaching for a disc.',
      'Sony a miniaturizat forma primei console PlayStation pentru această ediție din 2018. Cele 20 de jocuri sunt deja instalate și pot fi pornite fără disc.'
    ],
    note: ['The project identifies the PlayStation Classic edition. Its condition and supplied controllers are awaiting inventory review.', 'Proiectul indică ediția PlayStation Classic. Starea exemplarului și controlerele care îl însoțesc urmează să fie verificate.'],
    source: ['Sony Interactive Entertainment', 'https://sonyinteractive.com/en/press-releases/2018/sony-interactive-entertainment-announces-playstationclassic-available-globally-from-december-3/']
  },
  {
    id: 'game-and-watch', name: 'Nintendo Game & Watch', year: '1980',
    area: [1238, 686, 240, 146], pin: [1252, 704],
    category: ['Handheld series', 'Serie de jocuri portabile'],
    history: [
      'Nintendo began selling Game & Watch in 1980. These pocket-sized games used an LCD with figures built into the display. Each new game could have its own cast of characters and its own layout of buttons.',
      'Nintendo a lansat seria Game & Watch în 1980. Jocurile de buzunar aveau un ecran LCD cu personaje desenate în segmentele afișajului. Fiecare joc putea avea propriile personaje și o altă dispunere a butoanelor.'
    ],
    note: ['The year refers to the start of the series. The game title and edition of the planned exhibit still need identification.', 'Anul indică începutul seriei. Titlul jocului și ediția exemplarului propus pentru vitrină urmează să fie identificate.'],
    source: ['Nintendo', 'https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-History-625945.html']
  }
];
