export default function validation(inputs) {
  const errors = {};
  const urlRegex = /\.(jpg|png)$/i; //Expresión regular para verificar una url solamente de imágenes
  const letraRegex = /^[A-Za-z\s]+$/; //Expresión regular para verificar que un texto no tenga números ni símbolos
  if (!letraRegex.test(inputs.title)) {
    errors.title = "El nombre no puede tener símbolos ni números";
  }
  if (!urlRegex.test(inputs.image)) {
    errors.image = "URL no válida";
  }
  if (!inputs.summary.length >= 1) {
    errors.summary = "Campo obligatorio";
  }
  if (!inputs.steps.length >= 1) {
    errors.steps = "Campo obligatorio";
  }
  return errors;
}
