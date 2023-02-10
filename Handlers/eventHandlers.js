function loadEvent (client) { 

    const fs = require('fs');
    require('colors');
    
    const folders = fs.readdirSync('./Event')
    for (const folder of folders) {
        const files = fs.readdirSync(`./Event/${folder}`).filter((file) => file.endsWith('.js'));
        
        for (const file of files) {
            const event = require(`../Event/${folder}/${file}`);
            console.log(event.name)
            if (event.rest) {
                if (event.once) {
                    client.rest.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.rest.on(event.name, (...args) => event.execute(...args, client));
                }
            } else {
                if (event.once) {
                    client.once(event.name, (...args)=> event.execute(...args, client))
                } else {
                    client.on(event.name, (...args) => event.execute(...args, client));
                }
            }
            console.log("[EVENT]", file .yellow)
            continue;
        }
    }
    console.log("-------Loaded Event Success-------" .green)
}

module.exports = { loadEvent }