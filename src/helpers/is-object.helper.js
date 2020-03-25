export default function isObject (obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
  )
}
