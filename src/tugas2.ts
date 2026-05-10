interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

const buku1: Buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2005,
  tersedia: true,
};

console.log("Judul     :", buku1.judul);
console.log("Pengarang :", buku1.pengarang);
console.log("Tahun     :", buku1.tahunTerbit);
console.log("Tersedia  :", buku1.tersedia);