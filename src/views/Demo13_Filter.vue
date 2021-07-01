<template>
  <div id="demo13">
    <h1>Bank Account Balance</h1>
    <p>{{ accountBalance.value = "50" }}</p>
    <p>{{ accountInUSD }}</p>
  </div>
</template>

<script>
export default {
  name: "demo13",
  data() {
    return {
      accountBalance: {
        type: Number,
        required: true,
        value: null,
      },
    };
  },
  computed: {
    accountInUSD() {
      return "$" + this.accountBalance.value;
    },
  },
};
</script>

<style>
</style>