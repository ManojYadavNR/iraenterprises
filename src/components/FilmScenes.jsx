/* ==================================================================
   The five scenes of "The life of one IRA bag".
   Each is a plain SVG; motion comes from ../styles/film.css.
   A scene remounts when it becomes active, so it always plays
   from the first frame.
================================================================== */

const KRAFT = '#d8bd92'
const KRAFT_D = '#b1935f'
const KRAFT_L = '#ecdcc0'
const LEAFC = '#8bbe57'
const LEAF_D = '#4f8f34'
const SOIL = '#3a2b1e'
const SOIL_L = '#54402d'
const CREAM = '#f7f2e7'

/* Timing helper — keeps the inline style objects readable. */
const t = (delay, dur) => ({ '--d': `${delay}s`, '--dur': `${dur}s` })

function Ground({ y = 520 }) {
  return (
    <g>
      <path d={`M0 ${y + 26}C170 ${y - 16} 360 ${y - 4} 600 ${y - 12}S1030 ${y - 20} 1200 ${y + 10}V820H0Z`} fill={SOIL} />
      <path d={`M0 ${y + 26}C170 ${y - 16} 360 ${y - 4} 600 ${y - 12}S1030 ${y - 20} 1200 ${y + 10}`} stroke={SOIL_L} strokeWidth="7" fill="none" />
    </g>
  )
}

function LeafShape({ x, y, rot = 0, scale = 1, fill = LEAFC, className = '', style }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <g className={className} style={style}>
        <path d="M0 0C22 -6 46 -30 48 -70 14 -64 -6 -34 0 0Z" fill={fill} />
        <path d="M1 -2C12 -22 28 -44 43 -60" stroke="rgba(0,0,0,.2)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>
    </g>
  )
}

function PaperBag({ handle = 'dcut', badge = false }) {
  return (
    <g>
      {/* gusset */}
      <polygon points="58,-125 100,-145 100,105 58,125" fill={KRAFT_D} />
      <polygon points="58,-125 100,-145 100,-111 58,-91" fill="#9d8253" />
      {/* front */}
      <rect x="-100" y="-125" width="158" height="250" fill={KRAFT} />
      <rect x="-100" y="-125" width="158" height="34" fill={KRAFT_L} />
      <line x1="-52" y1="-91" x2="-52" y2="125" stroke={KRAFT_D} strokeWidth="3" opacity=".55" />

      {handle === 'dcut' && <rect x="-48" y="-116" width="60" height="16" rx="8" fill="rgba(0,0,0,.5)" />}
      {handle === 'carry' && (
        <>
          <path d="M-72 -125c0-30 22-46 44-46s44 16 44 46" stroke="#8a6f45" strokeWidth="9" fill="none" strokeLinecap="round" />
        </>
      )}

      {badge && (
        <g>
          <circle cx="-21" cy="20" r="42" fill="none" stroke="#6b5330" strokeWidth="4" />
          <g transform="translate(-33 44) scale(.62)">
            <path d="M0 0C22 -6 46 -30 48 -70 14 -64 -6 -34 0 0Z" fill={LEAF_D} />
          </g>
        </g>
      )}
    </g>
  )
}

/* ------------------------------------------------------- 1. the seed */
export function SceneSeed() {
  return (
    <>
      <Ground />
      <g transform="translate(600 0)">
        <g className="fl-anim fl-seed" style={t(0.15, 1.7)}>
          <ellipse cx="0" cy="498" rx="13" ry="17" fill={KRAFT_D} transform="rotate(-12 0 498)" />
        </g>
        <circle cx="0" cy="506" r="20" fill="none" stroke={SOIL_L} strokeWidth="4" className="fl-anim fl-puff" style={t(1.75, 1)} />

        {/* roots */}
        {[-1, 0, 1].map((k) => (
          <path
            key={k}
            d={`M0 506c${k * 16} 18 ${k * 26} 30 ${k * 30} 46`}
            stroke={KRAFT_D}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            pathLength="1"
            className="fl-anim fl-draw fl-draw-path"
            style={t(2 + Math.abs(k) * 0.15, 1)}
          />
        ))}

        {/* stem */}
        <path
          d="M0 502V352"
          stroke={LEAF_D}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          pathLength="1"
          className="fl-anim fl-draw fl-draw-path"
          style={t(2.05, 1.3)}
        />
        <LeafShape x={-2} y={404} rot={-38} scale={1.05} className="fl-anim fl-unfurl" style={t(2.85, 0.95)} />
        <LeafShape x={2} y={372} rot={44} scale={0.92} fill={LEAF_D} className="fl-anim fl-unfurl" style={t(3.2, 0.95)} />
        <LeafShape x={0} y={344} rot={4} scale={0.7} className="fl-anim fl-unfurl" style={t(3.55, 0.95)} />
      </g>
    </>
  )
}

/* ------------------------------------------------ 2. the fibre / tree */
export function SceneTree() {
  const bits = [
    { x: 402, y: 330, tx: 300, ty: 40, d: 1.5 },
    { x: 396, y: 372, tx: 320, ty: 10, d: 1.75 },
    { x: 410, y: 300, tx: 290, ty: 80, d: 2.0 },
    { x: 392, y: 348, tx: 330, ty: 52, d: 2.25 },
    { x: 404, y: 316, tx: 306, ty: 24, d: 2.5 },
    { x: 398, y: 388, tx: 316, ty: -6, d: 2.75 },
  ]
  return (
    <>
      <Ground />
      {/* trunk */}
      <g transform="translate(330 0)">
        <g className="fl-anim fl-grow" style={t(0.1, 1.1)}>
          <path d="M-15 516 -10 320h22l6 196z" fill={SOIL} />
          <path d="M-4 420 30 380M-2 460-32 424" stroke={SOIL} strokeWidth="9" strokeLinecap="round" fill="none" />
        </g>
        {[
          { cx: -6, cy: 292, r: 84, f: LEAF_D, d: 0.85 },
          { cx: -66, cy: 330, r: 60, f: LEAFC, d: 1.05 },
          { cx: 58, cy: 326, r: 66, f: LEAFC, d: 1.2 },
          { cx: 6, cy: 240, r: 54, f: '#a5cf6d', d: 1.35 },
        ].map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.f} className="fl-anim fl-pop" style={t(c.d, 0.85)} />
        ))}
      </g>

      {/* fibre travelling to the sheet */}
      {bits.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <circle
            r="7"
            fill={KRAFT_L}
            className="fl-anim fl-travel"
            style={{ ...t(b.d, 1.6), '--tx': `${b.tx}px`, '--ty': `${b.ty}px` }}
          />
        </g>
      ))}

      {/* the sheet of paper */}
      <g transform="translate(880 380)">
        <g className="fl-anim fl-riseup" style={t(2.5, 1)}>
          <rect x="-130" y="-160" width="260" height="320" rx="6" fill={CREAM} />
          <rect x="-130" y="-160" width="260" height="320" rx="6" fill="none" stroke={KRAFT_D} strokeWidth="3" opacity=".5" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="-96"
              y1={-96 + i * 46}
              x2={i % 2 ? 62 : 96}
              y2={-96 + i * 46}
              stroke={KRAFT_D}
              strokeWidth="6"
              strokeLinecap="round"
              opacity=".35"
              pathLength="1"
              className="fl-anim fl-draw fl-draw-path"
              style={t(3.1 + i * 0.14, 0.7)}
            />
          ))}
        </g>
      </g>
    </>
  )
}

/* --------------------------------------------------- 3. becoming a bag */
export function SceneBag() {
  return (
    <>
      <Ground />
      <g transform="translate(600 330)">
        {/* the flat sheet, which folds away */}
        <g className="fl-anim fl-foldout" style={t(1.7, 1)}>
          <rect x="-140" y="-170" width="280" height="340" rx="6" fill={CREAM} />
          {[-56, 46].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1="-170"
              x2={x}
              y2="170"
              stroke={KRAFT_D}
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity=".85"
              pathLength="1"
              className="fl-anim fl-draw fl-draw-path"
              style={t(0.7 + i * 0.25, 0.8)}
            />
          ))}
        </g>

        {/* the finished bag */}
        <g className="fl-anim fl-bagin" style={t(2.35, 1.15)}>
          <ellipse cx="-10" cy="190" rx="130" ry="18" fill="rgba(0,0,0,.35)" />
          <PaperBag handle="dcut" />
        </g>
        <g className="fl-anim fl-pop" style={t(3.3, 0.8)}>
          <circle cx="-21" cy="20" r="42" fill="none" stroke="#6b5330" strokeWidth="4" />
          <g transform="translate(-33 44) scale(.62)">
            <path d="M0 0C22 -6 46 -30 48 -70 14 -64 -6 -34 0 0Z" fill={LEAF_D} />
          </g>
        </g>
      </g>
    </>
  )
}

/* ------------------------------------------------------ 4. at work */
export function SceneUse() {
  return (
    <>
      {/* a suggestion of a shop front, well behind the action */}
      <g opacity=".2" className="fl-anim fl-fade" style={t(0, 1.2)}>
        <rect x="120" y="150" width="960" height="370" rx="10" fill="#0f3a20" />
        <rect x="150" y="176" width="900" height="66" rx="8" fill={LEAFC} />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={152 + i * 75} y="248" width="74" height="40" fill={i % 2 ? CREAM : LEAFC} />
        ))}
        {[220, 470, 720, 970].map((x) => (
          <rect key={x} x={x - 70} y="320" width="140" height="200" rx="6" fill="#124728" />
        ))}
      </g>
      <Ground />

      <g transform="translate(600 392)">
        <g className="fl-anim fl-walk" style={t(0.1, 5)}>
          <g className="fl-anim fl-bob" style={t(0, 1.5)}>
            <g transform="scale(.82)">
              <PaperBag handle="carry" badge />
            </g>
          </g>
        </g>
      </g>

      {/* little leaves lifting off as it goes */}
      {[
        { x: 250, y: 470, d: 0.4 },
        { x: 470, y: 490, d: 1.3 },
        { x: 700, y: 465, d: 2.1 },
        { x: 900, y: 492, d: 2.9 },
        { x: 1060, y: 470, d: 3.6 },
      ].map((s, i) => (
        <LeafShape
          key={i}
          x={s.x}
          y={s.y}
          rot={i * 40 - 60}
          scale={0.5}
          fill={LEAFC}
          className="fl-anim fl-sparkle"
          style={t(s.d, 2.6)}
        />
      ))}
    </>
  )
}

/* --------------------------------------------- 5. back to the soil */
export function SceneReturn() {
  const crumbs = Array.from({ length: 22 }, (_, i) => ({
    x: -96 + (i % 6) * 34 + (i % 3) * 6,
    y: -104 + Math.floor(i / 6) * 62,
    d: 2.35 + (i % 7) * 0.11,
    r: 5 + (i % 4) * 2,
  }))

  return (
    <>
      <Ground />
      <g transform="translate(600 392)">
        {/* the bag lands, then gives itself back */}
        <g className="fl-anim fl-fall" style={t(0.15, 1.6)}>
          <g className="fl-anim fl-crumble" style={t(2.3, 1.5)}>
            <g transform="scale(.8)">
              <PaperBag handle="dcut" badge />
            </g>
          </g>
          {crumbs.map((c, i) => (
            <g key={i} transform={`translate(${c.x * 0.8} ${c.y * 0.8})`}>
              <circle r={c.r} fill={i % 3 ? KRAFT_D : SOIL_L} className="fl-anim fl-dissolve" style={t(c.d, 1.5)} />
            </g>
          ))}
        </g>
      </g>

      {/* and comes back up */}
      <g transform="translate(600 0)">
        <path
          d="M0 512V372"
          stroke={LEAF_D}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          pathLength="1"
          className="fl-anim fl-draw fl-draw-path"
          style={t(3.5, 0.8)}
        />
        <LeafShape x={-2} y={424} rot={-38} scale={0.95} className="fl-anim fl-unfurl" style={t(4, 0.7)} />
        <LeafShape x={2} y={396} rot={44} scale={0.82} fill={LEAF_D} className="fl-anim fl-unfurl" style={t(4.2, 0.7)} />
        <LeafShape x={0} y={370} rot={4} scale={0.62} className="fl-anim fl-unfurl" style={t(4.4, 0.7)} />
      </g>

      <g className="fl-anim fl-riseup" style={t(4.25, 0.9)}>
        <text
          x="600"
          y="196"
          textAnchor="middle"
          fill={CREAM}
          fontSize="34"
          fontFamily="Fraunces, Georgia, serif"
          letterSpacing="1"
        >
          ≈ 180 days
        </text>
        <text
          x="600"
          y="234"
          textAnchor="middle"
          fill="#c4db60"
          fontSize="17"
          fontFamily="Plus Jakarta Sans, sans-serif"
          letterSpacing="4"
        >
          BAG · TO · SOIL · TO · SEED
        </text>
      </g>
    </>
  )
}

export const SCENE_COMPONENTS = [SceneSeed, SceneTree, SceneBag, SceneUse, SceneReturn]
