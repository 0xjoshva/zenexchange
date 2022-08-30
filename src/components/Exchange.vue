<template>
  <div id="markets">
    <table>
      <tr>
        <th>Currency</th>
        <th></th>
        <th></th>
        <th>Price</th>
        <th>24H Change</th>
        <th>24H Volume</th>
      </tr>
      <tr>
        <td>ICON</td>
        <td>NAME</td>
        <td>ABBREVIATION</td>
        <td>PRICE</td>
        <td>1.23%</td>
        <td id="column"><span>$98,339,448.98</span><span>4,822 BTC</span></td>
        <td>
          <div
            class="livecoinwatch-widget-1"
            lcw-coin="BTC"
            lcw-base="USD"
            lcw-secondary="BTC"
            lcw-period="d"
            lcw-color-tx="#ffffff"
            lcw-color-pr="#58c7c5"
            lcw-color-bg="#1f2434"
            lcw-border-w="1"
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {};
defer
src = "https://www.livecoinwatch.com/static/lcw-widget.js";
const change = () => Math.floor(Math.random() * 10) + 1;
</script>
<style scoped></style>