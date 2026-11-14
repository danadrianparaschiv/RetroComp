# RetroComp

[Explore the cabinet](https://danadrianparaschiv.github.io/RetroComp/)

An interactive concept for a black TROFAST display. Select a pictured object or open the object index to read the exhibit notes in English or Romanian. The cabinet is an illustration of the proposed arrangement. Collection notes distinguish planned items, ordered hardware and modern recreations.

## Working on the display

- Edit `catalog.js` to update the model histories, references, inventory notes and clickable areas. Each pair of translations is ordered English, then Romanian.
- The `area` field is the object's left, top, width and height. The `pin` field is the centre of its numbered marker. All coordinates are pixels in the 1672 × 941 source image.
- Replace `assets/cabinet.jpg` and the corresponding crops in `assets/objects/` when a revised drawing or photograph is available. Adjust the coordinates and mobile crop for a different composition.
- Link to an individual record with a fragment, for example [the ZX81 record](https://danadrianparaschiv.github.io/RetroComp/#object/zx81).

## Preview and publish

Serve this directory with `python3 -m http.server 8000` and open [the local preview](http://localhost:8000/). The website uses plain HTML, CSS and JavaScript. GitHub Pages publishes the root of the `main` branch after each push.

## Cabinet artwork

The built-in ImageGen tool produced the cabinet concept. Each record uses a crop of the same illustration.

<details><summary>Image generation prompt</summary>

Use case: product-mockup. Create a beautifully art-directed, photorealistic architectural museum photograph, a wide landscape 16:9 hero background for an interactive personal retro-computer collection. The entire LEFTMOST 42% of the photograph is quiet, nearly black charcoal matte plaster wall in shadow, deliberately empty for web typography. The RIGHT 55% is filled by a single coherent, full-height black-stained timber display case made from TWO tall adjacent black TROFAST-style shelving frames, a pair of narrow matching units, TWO columns and THREE equal open shelf compartments per column. Both tops at the same height. Each cubby has deep brown wood back panel, satin dark frame, subtle narrow horizontal runner grooves on the inner side walls, concealed tungsten light washing each shelf from above. Low cinematic key grazing the black wood grain, warm pools of amber and rich copper highlights, no harsh LED strip dots. Frame the WHOLE display from top to plinth, no cutoffs, just a little floor. The cabinet nearly touches the top and bottom of the photo, occupies x=45%-92%, y=5%-94%. Shallow straight-on front elevation with a tiny hint of right side depth. Architectural Digest meets a vintage hardware museum, medium-format film, realistic crafted materials, rich atmospheric shadows, sharp recognizable objects, diffused golden light also grazes the wall to the right. A dark museum floor and lovely subtle shadow grounding the cabinet.
EXACT contents, important for an interactive map: upper left compartment has a flat wedge-shaped black Sinclair ZX81 home computer (black flat membrane keyboard, red ZX81 lettering), displayed at a slight upward tilt on a clear easel. A separate compact upright black ridged rectangular ZX81 RAM expansion pack sits BESIDE it, to its right, plainly distinct, with a gap. Upper right compartment has the classic small black Sinclair ZX Spectrum 48K, gray rubber keys and tiny diagonal rainbow stripes in lower right, tilted up for display. Middle left compartment has a cream and deep red Nintendo Family Computer (Famicom) console with one flat rectangular maroon-and-gold controller tucked beside it. Middle right has a beige Commodore THEC64 Mini breadbin keyboard, dark brown keys with the little rainbow detail. Bottom left has one pale grey PlayStation Classic miniature console with circular top-loading lid and two front ports, accompanied by one matching digital controller. Bottom right has a small early Nintendo Game & Watch single-screen horizontal rectangular silver-and-burgundy LCD handheld propped upright on a stand. Make every exhibit visibly dimensional, sufficiently large, individually legible, tangible, like real curated products, grounded by shadows. No other objects. No large CRT monitors. Absolutely no printed labels, shelf cards, plaques, museum titles, numbers, overlays, pins, captions, lettering on the walls, people, or UI.

</details>
