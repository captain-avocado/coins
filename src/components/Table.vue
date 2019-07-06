<template lang="pug">
  table.table
    thead.table__head
      tr.table__row
        td.table__cell Rank
        td.table__cell Name
        td.table__cell Price
        td.table__cell Market Cap
        td.table__cell Volume (24Hr)
    tbody
      template(v-for="coin in coins")
        tr
          td {{coin.rank}}
          td {{coin.name}}
          td {{moneyConvert(coin.priceUsd)}}
          td {{coin.marketCapUsd}}
          td {{coin.volumeUsd24Hr}}
</template>

<script>
export default {
  data() {
    return {
      coins: []
    };
  },
  methods: {
    moneyConvert(labelValue) {
      console.log(labelValue);
      // Nine Zeroes for Billions
      return Math.abs(Number(labelValue)) >= 1.0e9
        ? Math.abs(Number(labelValue)) / 1.0e9 + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? Math.abs(Number(labelValue)) / 1.0e6 + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? Math.abs(Number(labelValue)) / 1.0e3 + "K"
        : Math.abs(Number(labelValue));
    },

    updateNums(nums) {
      console.log(nums);
      for (let i = 0; i < nums.length; i++) {
        nums[i].marketCapUsd = moneyConvert(nums[i].marketCapUsd);
      }
      return nums;
    }
  },
  beforeCreate() {
    fetch("https://api.coincap.io/v2/assets/")
      .then(response => response.json())
      .then(json => {
        this.coins = json.data.slice(0, 15);
      })
      .catch(error => error);

    const tradeWs = new WebSocket("wss://ws.coincap.io/trades/binance");
    tradeWs.onmessage = msg => {
      const data = JSON.parse(msg.data);
      let el = this.coins.find(element => {
        return element.name.toLowerCase() === data.base;
      });
      if (el) {
        el.priceUsd = data.priceUsd;
        console.log(data);
        el.volumeUsd24Hr =
          data.direction === "buy"
            ? parseFloat(el.volumeUsd24Hr) + parseFloat(data.volume)
            : parseFloat(el.volumeUsd24Hr) - parseFloat(data.volume);
        console.log(data.direction);
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.table {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  background: #fff;
  border-radius: 5px;

  &__cell {
    padding: 5px;
  }
}
</style>

