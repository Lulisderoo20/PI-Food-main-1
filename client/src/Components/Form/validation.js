export default function validation(inputs) {
  const errors = {};
  const urlRegex = /(https?:\/\/.*\.(?:png|jpeg|jpg))/i; //Expresión regular para verificar una url solamente de imágenes
  const letraRegex = /^[A-Za-z\s]+$/; //Expresión regular para verificar que un texto no tenga números ni símbolos
  if (!letraRegex.test(inputs.title)) {
    errors.title = "El nombre no puede tener símbolos ni números";
  }
  if (inputs.title.trim().length === 0) {
    errors.title = "Campo obligatorio";
  }
  if (!urlRegex.test(inputs.image)) {
    errors.image = "URL no válida";
  }
  if (!inputs.summary.trim().length >= 1) {
    errors.summary = "Campo obligatorio";
  }
  if (!inputs.summary.trim().length > 500) {
    errors.summary = "Máximo excedido";
  }
  if (!inputs.steps.trim().length >= 1) {
    errors.steps = "Campo obligatorio";
  }
  if (inputs.diets.length === 0) {
    errors.diets = "Seleccione al menos una dieta";
  }
  return errors;
}
