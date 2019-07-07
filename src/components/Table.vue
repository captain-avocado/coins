<template lang="pug">
.wrap
  table.table
    thead.table__head
      tr.table__row
        td.table__cell.table__cell--head.table__cell--center-aligned Rank
        td.table__cell.table__cell--head.table__cell--left-aligned Name
        td.table__cell.table__cell--head.table__cell--right-aligned Price
        td.table__cell.table__cell--head.table__cell--right-aligned Market Cap
        td.table__cell.table__cell--head.table__cell--right-aligned Volume (24Hr)
    tbody
      template(v-for="coin in coins")
        tr.table__row
          td.table__cell.table__cell--center-aligned {{coin.rank}}
          td.table__cell.table__cell--left-aligned {{coin.name}}
          td.table__cell.table__cell--right-aligned {{coin.priceUsd}}
          td.table__cell.table__cell--right-aligned {{coin.marketCapUsd}}
          td.table__cell.table__cell--right-aligned {{coin.volumeUsd24Hr}}
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
.wrap {
  height: 100%;

  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
}

.table {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  background: #fff;
  border-radius: 5px;
  border-spacing: 0;

  &__cell {
    padding: 12px;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);

    &--head {
      padding: 15px 12px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 700;
    }

    &--left-aligned {
      text-align: left;
    }

    &--center-aligned {
      text-align: center;
    }

    &--right-aligned {
      text-align: right;
    }
  }

  &__row {
    transition: background-color 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

