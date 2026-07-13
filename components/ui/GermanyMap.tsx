import { site } from "@/content/site";

/*
 * Stylized dot-matrix map of Germany (17 × 22 grid).
 * 1 = territory dot. Coordinates are approximations for a stylized
 * "Einsatzgebiet" visual — not a geographically exact projection.
 */
const grid = [
  "00000011110000000",
  "00000111111000000",
  "00001111101110000",
  "00011111111111100",
  "00111111111111100",
  "00111111111111100",
  "01111111111111100",
  "01111111111111100",
  "01111111111111100",
  "01111111111111110",
  "01111111111111110",
  "00111111111111100",
  "00111111111111000",
  "00111111111110000",
  "00111111111111000",
  "00011111111111100",
  "00011111111111100",
  "00011111111111100",
  "00011111111111100",
  "00001111111111100",
  "00001111111111000",
  "00000111111110000",
];

const cities: { name: string; col: number; row: number }[] = [
  { name: "Hamburg", col: 8, row: 4 },
  { name: "Berlin", col: 13, row: 7 },
  { name: "Düsseldorf", col: 2, row: 10 },
  { name: "Köln", col: 2, row: 11 },
  { name: "Leipzig", col: 12, row: 10 },
  { name: "Dresden", col: 13, row: 11 },
  { name: "Frankfurt am Main", col: 5, row: 13 },
  { name: "Nürnberg", col: 9, row: 15 },
  { name: "Stuttgart", col: 6, row: 17 },
  { name: "München", col: 10, row: 19 },
];

const base = { name: "Krauchenwies", col: 6, row: 19 };
const cell = 12;

export function GermanyMap() {
  const width = grid[0].length * cell;
  const height = grid.length * cell;
  const cx = (col: number) => col * cell + cell / 2;
  const cy = (row: number) => row * cell + cell / 2;

  return (
    <figure className="germany-map">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Stilisierte Deutschlandkarte: Firmensitz Krauchenwies in Baden-Württemberg, Einsatzgebiete in allen 16 Bundesländern"
      >
        {grid.flatMap((rowString, row) =>
          rowString.split("").map((filled, col) =>
            filled === "1" ? <circle className="gm-dot" key={`${col}-${row}`} cx={cx(col)} cy={cy(row)} r={3.1} /> : null
          )
        )}
        {cities.map((city) => (
          <g className="gm-city" key={city.name}>
            <title>{`Einsatzgebiet ${city.name}`}</title>
            <circle cx={cx(city.col)} cy={cy(city.row)} r={3.6} />
          </g>
        ))}
        <g className="gm-base">
          <title>{`Firmensitz ${base.name}`}</title>
          <circle className="gm-base-pulse" cx={cx(base.col)} cy={cy(base.row)} r={6} />
          <circle className="gm-base-dot" cx={cx(base.col)} cy={cy(base.row)} r={4.6} />
        </g>
      </svg>
      <figcaption>
        <span className="gm-legend"><i className="gm-legend-base" /> Firmensitz {base.name}</span>
        <span className="gm-legend"><i className="gm-legend-city" /> Häufige Einsatzregionen</span>
      </figcaption>
      <p className="visually-hidden">
        {site.name} ist von {base.name} aus deutschlandweit im Einsatz, unter anderem in {cities.map((city) => city.name).join(", ")}.
      </p>
    </figure>
  );
}
