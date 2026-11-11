import React from 'react';

export interface AutonomekSymbolProps {
  className?: string;
  /** 'small' uses the 26u open-breach optical cut tuned for 16px-24px favicons and compact UI */
  opticalSize?: 'standard' | 'small';
  /** 'current' inherits CSS color; 'duotone' pairs --primary on the keystone with currentColor on the conduit arm */
  tone?: 'current' | 'duotone';
  title?: string;
}

export interface AutonomekLockupProps {
  className?: string;
  /** 'horizontal' = single-line [Keystone A]UTONOMEK; 'stacked' = compact 2-row AUTO / NOMEK */
  variant?: 'horizontal' | 'stacked';
  /** 'brand' tints Keystone A with --primary and remaining glyphs with currentColor; 'monochrome' uses currentColor for all paths */
  tone?: 'brand' | 'monochrome';
  title?: string;
}

const PATH_KEYSTONE_STD =
  'M 18 221 L 18 190 L 108 34.12 L 148 34.12 L 198.74 122 L 154.86 122 L 128 75.47 L 61.88 190 L 61.88 221 Z';
const PATH_CONDUIT_STD =
  'M 113.84 144 L 211.44 144 L 238 190 L 238 221 L 194.12 221 L 194.12 190 L 187.77 179 L 93.63 179 Z';

const PATH_KEYSTONE_SMALL =
  'M 18 221 L 18 190 L 108 34.12 L 148 34.12 L 197.59 120 L 157.17 120 L 128 69.47 L 58.41 190 L 58.41 221 Z';
const PATH_CONDUIT_SMALL =
  'M 113.84 146 L 212.6 146 L 238 190 L 238 221 L 197.59 221 L 197.59 190 L 191.23 179 L 94.79 179 Z';

const UTONOMEK_PATHS: Array<{ d: string; evenOdd?: boolean }> = [
  {
    d: 'M 246 34.12 L 279.64 34.12 L 279.64 158.39 A 33.64 33.64 0 0 0 346.91 158.39 L 346.91 34.12 L 380.55 34.12 L 380.55 158.39 A 67.28 67.28 0 0 1 246 158.39 Z',
  },
  {
    d: 'M 401.11 34.12 L 528.19 34.12 L 528.19 63.72 L 481.47 63.72 L 481.47 221 L 447.83 221 L 447.83 63.72 L 401.11 63.72 Z',
  },
  {
    d: 'M 614.15 29.45 A 74.75 98.11 0 1 1 614.15 225.67 A 74.75 98.11 0 1 1 614.15 29.45 Z  M 614.15 59.05 A 41.11 68.51 0 1 0 614.15 196.07 A 41.11 68.51 0 1 0 614.15 59.05 Z',
    evenOdd: true,
  },
  {
    d: 'M 712.26 34.12 L 743.88 34.12 L 816.04 159.1 L 816.04 34.12 L 847.66 34.12 L 847.66 221 L 816.04 221 L 743.88 96.02 L 743.88 221 L 712.26 221 Z',
  },
  {
    d: 'M 945.77 29.45 A 74.75 98.11 0 1 1 945.77 225.67 A 74.75 98.11 0 1 1 945.77 29.45 Z  M 945.77 59.05 A 41.11 68.51 0 1 0 945.77 196.07 A 41.11 68.51 0 1 0 945.77 59.05 Z',
    evenOdd: true,
  },
  {
    d: 'M 1043.88 34.12 L 1073.82 34.12 L 1160.94 185.03 L 1248.07 34.12 L 1278 34.12 L 1278 221 L 1248.07 221 L 1248.07 96.02 L 1175.91 221 L 1145.97 221 L 1073.82 96.02 L 1073.82 221 L 1043.88 221 Z',
  },
  {
    d: 'M 1305.11 34.12 L 1420.98 34.12 L 1420.98 63.72 L 1338.75 63.72 L 1338.75 109.02 L 1403.6 109.02 L 1403.6 138.62 L 1338.75 138.62 L 1338.75 191.4 L 1420.98 191.4 L 1420.98 221 L 1305.11 221 Z',
  },
  {
    d: 'M 1446.21 34.12 L 1479.85 34.12 L 1479.85 80 L 1525.72 34.12 L 1573.29 34.12 L 1479.85 127.56 L 1573.29 221 L 1525.72 221 L 1479.85 175.13 L 1479.85 221 L 1446.21 221 Z',
  },
];

const STACKED_UTO_PATHS: Array<{ d: string; evenOdd?: boolean }> = [
  {
    d: 'M 137.76 19.11 L 156.6 19.11 L 156.6 88.71 A 18.83 18.83 0 0 0 194.27 88.71 L 194.27 19.11 L 213.11 19.11 L 213.11 88.71 A 37.67 37.67 0 0 1 137.76 88.71 Z',
  },
  {
    d: 'M 224.62 19.11 L 295.78 19.11 L 295.78 35.69 L 269.62 35.69 L 269.62 123.76 L 250.78 123.76 L 250.78 35.69 L 224.62 35.69 Z',
  },
  {
    d: 'M 343.92 16.49 A 41.86 54.95 0 1 1 343.92 126.38 A 41.86 54.95 0 1 1 343.92 16.49 Z  M 343.92 33.07 A 23.02 38.37 0 1 0 343.92 109.8 A 23.02 38.37 0 1 0 343.92 33.07 Z',
    evenOdd: true,
  },
];

const STACKED_NOMEK_PATHS: Array<{ d: string; evenOdd?: boolean }> = [
  {
    d: 'M 28.91 177 L 46.62 177 L 87.03 247 L 87.03 177 L 104.74 177 L 104.74 281.65 L 87.03 281.65 L 46.62 211.66 L 46.62 281.65 L 28.91 281.65 Z',
  },
  {
    d: 'M 159.68 174.38 A 41.86 54.95 0 1 1 159.68 284.27 A 41.86 54.95 0 1 1 159.68 174.38 Z  M 159.68 190.96 A 23.02 38.37 0 1 0 159.68 267.69 A 23.02 38.37 0 1 0 159.68 190.96 Z',
    evenOdd: true,
  },
  {
    d: 'M 214.63 177 L 231.4 177 L 280.19 261.51 L 328.98 177 L 345.75 177 L 345.75 281.65 L 328.98 281.65 L 328.98 211.66 L 288.57 281.65 L 271.81 281.65 L 231.4 211.66 L 231.4 281.65 L 214.63 281.65 Z',
  },
  {
    d: 'M 360.92 177 L 425.8 177 L 425.8 193.58 L 379.76 193.58 L 379.76 218.94 L 416.07 218.94 L 416.07 235.52 L 379.76 235.52 L 379.76 265.07 L 425.8 265.07 L 425.8 281.65 L 360.92 281.65 Z',
  },
  {
    d: 'M 439.93 177 L 458.77 177 L 458.77 202.68 L 484.45 177 L 511.09 177 L 458.76 229.33 L 511.09 281.65 L 484.45 281.65 L 458.77 255.97 L 458.77 281.65 L 439.93 281.65 Z',
  },
];

/**
 * Custom Euclidean Keystone A isotipo (256x256).
 * Theme-reactive via CSS currentColor / --primary across all 5 palettes (p1..p5).
 */
export function AutonomekSymbol({
  className = '',
  opticalSize = 'standard',
  tone = 'current',
  title,
}: AutonomekSymbolProps) {
  const isSmall = opticalSize === 'small';
  const p1 = isSmall ? PATH_KEYSTONE_SMALL : PATH_KEYSTONE_STD;
  const p2 = isSmall ? PATH_CONDUIT_SMALL : PATH_CONDUIT_STD;

  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d={p1} fill={tone === 'duotone' ? 'var(--primary)' : 'currentColor'} />
      <path d={p2} fill="currentColor" />
    </svg>
  );
}

/**
 * Unified Single-A Autonomek Logotype ([Keystone A]UTONOMEK or stacked AUTO / NOMEK).
 * Zero double-AA duplication: Keystone A acts directly as the initial 'A'.
 */
export function AutonomekLockup({
  className = '',
  variant = 'horizontal',
  tone = 'brand',
  title,
}: AutonomekLockupProps) {
  const aFill = tone === 'brand' ? 'var(--primary)' : 'currentColor';
  const wordFill = 'currentColor';

  if (variant === 'stacked') {
    return (
      <svg
        viewBox="0 0 540 320"
        className={className}
        fill="none"
        role={title ? 'img' : undefined}
        aria-label={title}
        aria-hidden={title ? undefined : true}
      >
        {title ? <title>{title}</title> : null}
        <g transform="translate(72.07 19.24) scale(0.56)" fill={aFill}>
          <path d={PATH_KEYSTONE_STD} />
          <path d={PATH_CONDUIT_STD} />
        </g>
        <g fill={wordFill}>
          <g transform="translate(72.07 19.24)">
            {STACKED_UTO_PATHS.map((g, i) => (
              <path key={i} d={g.d} fillRule={g.evenOdd ? 'evenodd' : undefined} />
            ))}
          </g>
          {STACKED_NOMEK_PATHS.map((g, i) => (
            <path key={i} d={g.d} fillRule={g.evenOdd ? 'evenodd' : undefined} />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1592 228"
      className={className}
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g transform="translate(0 -14)">
        <g fill={aFill}>
          <path d={PATH_KEYSTONE_STD} />
          <path d={PATH_CONDUIT_STD} />
        </g>
        <g fill={wordFill}>
          {UTONOMEK_PATHS.map((g, i) => (
            <path key={i} d={g.d} fillRule={g.evenOdd ? 'evenodd' : undefined} />
          ))}
        </g>
      </g>
    </svg>
  );
}

/**
 * Monochrome typographic alias for AutonomekLockup (single-A integrated AUTONOMEK).
 */
export function AutonomekWordmark({
  className = '',
  title,
}: {
  className?: string;
  title?: string;
}) {
  return <AutonomekLockup className={className} tone="monochrome" title={title} />;
}
