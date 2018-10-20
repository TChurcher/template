class Generator {
  constructor(name, initialUpgradeCosts, income) {
    this.name = name;
    this.initialUpgradeCosts = initialUpgradeCosts;
    this.income = income;
    this.quantity = 0;
  }

  buy() {
    this.quantity++;
  }

  get buyCosts() {
    return Math.round(this.initialUpgradeCosts * Math.pow(1.07, this.quantity));
  }

  generate() {
    return this.income * this.quantity;
  }
}

export default Generator;
