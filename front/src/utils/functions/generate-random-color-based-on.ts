export function getRandomColorBasedOn(color: string): string {
  const hexToRgb = (hex: string) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  });

  const baseColor = hexToRgb(color);

  const offset = 40; 
  const randomOffset = () => Math.floor(Math.random() * offset * 2 - offset);

  const randomColor = {
    r: baseColor.r + randomOffset(),
    g: baseColor.g + randomOffset(),
    b: baseColor.b + randomOffset(),
  };

  const clamp = (value: number) => Math.max(0, Math.min(255, value));
  randomColor.r = clamp(randomColor.r);
  randomColor.g = clamp(randomColor.g);
  randomColor.b = clamp(randomColor.b);

  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexColor =
    '#' +
    componentToHex(randomColor.r) +
    componentToHex(randomColor.g) +
    componentToHex(randomColor.b);

  return hexColor;
}



