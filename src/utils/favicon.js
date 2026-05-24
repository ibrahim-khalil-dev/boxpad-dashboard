/**
 * Generates a dynamic circular favicon containing user initials.
 */
export function createInitialsFavicon(name, bgColor = '#151563') {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Draw circular background
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, 2 * Math.PI);
  ctx.fill();

  // Draw text initials (e.g., "John Doe" -> "JD")
  ctx.fillStyle = '#ffd45a'; // Using your custom branding gold variable
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  const initials = name 
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) 
    : '?';
    
  ctx.fillText(initials, 32, 34);

  return canvas.toDataURL('image/png');
}