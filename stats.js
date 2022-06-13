const os = require('os')
const log = require('./logger/log')

setInterval(()=>{
    const {freemem, totalmem, hostname} = os
    
    const host = hostname()
    const total = parseInt(totalmem()/1024/1024)
    const mem = parseInt(freemem()/1024/1024)
    const percent = parseInt((mem/total)*100)

    const stats ={
        host: `User ${host}`,
        free: `${mem}MB`,
        total:`${total}MB`,
        usage:`${percent}%`
    }
    
    console.clear()
    log(`${JSON.stringify(stats)}\n`)
}, 10000)
