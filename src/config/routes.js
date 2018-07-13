const express = require('express')

module.exports = function (server) {

    //Definir url base parar todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Cicle de Pagamentos
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}