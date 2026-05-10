class Lingkaran {
  jariJari: number;

  constructor(jariJari: number) {
    this.jariJari = jariJari;
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari ** 2;
  }
}

const lingkaran = new Lingkaran(7);
console.log(
  `Luas lingkaran dengan r=${lingkaran.jariJari}: ${lingkaran.hitungLuas().toFixed(2)}`
);
