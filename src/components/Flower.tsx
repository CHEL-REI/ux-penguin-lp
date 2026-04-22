type Variant = 'red' | 'gold' | 'amber';
type Shape = 'cross' | 'block';

const palettes: Record<Variant, { petal: string; center: string; stem: string }> = {
  red: { petal: '#e53935', center: '#fbc02d', stem: '#43a047' },
  gold: { petal: '#f4b400', center: '#5d4037', stem: '#43a047' },
  amber: { petal: '#fb8c00', center: '#6d4c41', stem: '#388e3c' },
};

type Props = {
  variant?: Variant;
  shape?: Shape;
  size?: number;
  className?: string;
  withStem?: boolean;
  rotate?: number;
};

export default function Flower({
  variant = 'gold',
  shape = 'cross',
  size = 64,
  className = '',
  withStem = true,
  rotate = 0,
}: Props) {
  const p = palettes[variant];

  if (shape === 'block') {
    const positions = [0, 12, 24];
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 34 34"
        className={className}
        shapeRendering="crispEdges"
        style={{ transform: `rotate(${rotate}deg)` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {positions.map((y, ry) =>
          positions.map((x, rx) => {
            const isCenter = ry === 1 && rx === 1;
            return (
              <rect
                key={`${rx}-${ry}`}
                x={x}
                y={y}
                width={10}
                height={10}
                fill={isCenter ? p.center : p.petal}
              />
            );
          })
        )}
      </svg>
    );
  }

  const w = 5;
  const h = withStem ? 8 : 5;
  const px = (size / w) * h;

  return (
    <svg
      width={size}
      height={px}
      viewBox={`0 0 ${w * 10} ${h * 10}`}
      className={className}
      shapeRendering="crispEdges"
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={20} y={0} width={10} height={10} fill={p.petal} />
      <rect x={10} y={10} width={10} height={10} fill={p.petal} />
      <rect x={20} y={10} width={10} height={10} fill={p.center} />
      <rect x={30} y={10} width={10} height={10} fill={p.petal} />
      <rect x={20} y={20} width={10} height={10} fill={p.petal} />
      {withStem && (
        <>
          <rect x={20} y={30} width={10} height={10} fill={p.stem} />
          <rect x={20} y={40} width={10} height={10} fill={p.stem} />
          <rect x={20} y={50} width={10} height={10} fill={p.stem} />
          <rect x={10} y={50} width={10} height={10} fill={p.stem} />
          <rect x={20} y={60} width={10} height={10} fill={p.stem} />
          <rect x={30} y={60} width={10} height={10} fill={p.stem} />
        </>
      )}
    </svg>
  );
}
