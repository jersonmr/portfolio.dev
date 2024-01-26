export function formatDate(dateString) {
    return dateString.toLocaleDateString("es-VE", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}
