export function formatDate(dateString) {
    console.log(dateString);
    // return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    return dateString.toLocaleDateString("es-VE", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}
