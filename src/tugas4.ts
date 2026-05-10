function sapaan(nilai: string | number): string {
    if (typeof nilai === "string") {
        return `Halo, ${nilai}`;
    } else {
        return `Umur: ${nilai} tahun`;
    }
}

console.log(sapaan("Rina"));
console.log(sapaan(22));