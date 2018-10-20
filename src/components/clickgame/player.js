class Player {
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

  addMoney(money) {
    this.money += money;
    console.log(this.money);
  }
}

export default Player;
