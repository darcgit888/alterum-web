// Datos de la empresa en UN solo lugar. Todo lo que diga el sitio sale de aquí.
// Regla: nada inventado. Cada dato tiene su fuente al lado; si no hay fuente, no va.

export const empresa = {
  nombre: 'ALTERUM Ingeniería',
  razonSocial: 'ALTERUM Ingeniería S.A. de C.V.',
  grupo: 'Grupo Metalcam',
  grupoUrl: 'https://grupometalcam.com',
  ciudad: 'Mérida, Yucatán',
  // contacto@ es un alias del buzón de administración (Zoho de Alterum).
  correo: 'contacto@alterumingenieria.com',
};

// Fuente: Política de Calidad Rev.00, firmada por la Dirección el 11-sep-2026.
export const servicios = [
  { titulo: 'Construcción', texto: 'Materiales, equipos y servicios de construcción.' },
  { titulo: 'Mantenimiento industrial', texto: 'Servicios de mantenimiento para la industria.' },
  { titulo: 'Renta de maquinaria', texto: 'Maquinaria para obra.' },
  { titulo: 'Concreto especializado', texto: 'Comercialización de concreto especializado.' },
  { titulo: 'Transformación de metales', texto: 'Trabajos de transformación de metales.' },
  { titulo: 'Servicios ferroviarios', texto: 'Servicios para el sector ferroviario.' },
];

// ⚠️ Decir SIEMPRE "en proceso". No hay certificado todavía: la auditoría del organismo
// certificador está calendarizada entre junio y julio de 2027.
export const iso = 'En proceso de certificación ISO 9001:2015';
