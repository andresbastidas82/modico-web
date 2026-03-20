/**
 * ============================================================
 * CONFIGURACIÓN DEL SITIO — MODICO
 * ============================================================
 * Centraliza todos los datos de contacto y configuración.
 * Edita este archivo para actualizar teléfono, dirección,
 * correo, redes sociales y credenciales de EmailJS.
 * ============================================================
 */

const siteConfig = {
  // Datos de la empresa
  empresa: "Modico",

  // Contacto
  telefono: "+57 310 200 1847",
  whatsapp: "3102001847", // solo números, sin + ni espacios
  email: "modicopasto@gmail.com",
  direccion: "Pasto - Nariño",

  // Redes sociales (deja vacío "" si no aplica)
  redes: {
    facebook: "https://facebook.com/modico",
    instagram: "https://instagram.com/modico",
    whatsapp: "https://wa.me/3102001847",
  },

  // EmailJS — Configura tus credenciales aquí
  // 1. Crea una cuenta en https://www.emailjs.com/
  // 2. Agrega un servicio de email (Gmail, Outlook, etc.)
  // 3. Crea un template con las variables: from_name, from_email, phone, message
  // 4. Copia los IDs aquí abajo
  emailjs: {
    serviceId: "service_id",
    templateId: "template_id",
    publicKey: "public_key",
  },
};

export default siteConfig;
