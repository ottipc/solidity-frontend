<template>
  <div class="dashboard">
    <h1>Solidity-Bot Dashboard</h1>
    <button @click="startBot">Start Bot</button>
    <button @click="withdrawFunds">Withdrawal</button>
    <!-- Hier kommen Statusanzeigen und Logs rein -->
  </div>
</template>

<script>
import { getContract } from '@/services/blockchainservice'
import contractABI from '@/contracts/OneinchSlippageBot.json'

export default {
  name: 'SolidityDashboard',
  data() {
    return {
      contract: null,
      contractAddress: 'DEINE_CONTRACT_ADRESSE_HIER'
    }
  },
  mounted() {
    try {
      this.contract = getContract(this.contractAddress, contractABI)
    } catch (error) {
      console.error(error.message)
    }
  },
  methods: {
    async startBot() {
      try {
        const tx = await this.contract.start()
        console.log("Tx gesendet:", tx)
      } catch (error) {
        console.error("Start fehlgeschlagen:", error)
      }
    },
    async withdrawFunds() {
      try {
        const tx = await this.contract.withdrawal()
        console.log("Withdrawal gesendet:", tx)
      } catch (error) {
        console.error("Withdrawal fehlgeschlagen:", error)
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
button {
  margin: 5px;
}
</style>
