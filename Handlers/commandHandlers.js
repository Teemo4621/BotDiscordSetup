function loadCommands(client) {
    const fs = require('fs');
    require('colors')

    let commandsArray = []; //สร้าง Array

    const commandsFolder = fs.readdirSync('./Commands');
    for (const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith('.js'));
        
        for (const file of commandFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);

            const prop = { folder, ...commandFile };
            client.commands.set(commandFile.data.name, prop);

            commandsArray.push(commandFile.data.toJSON()); //ใส่ ข้อมูลที่อยู่ในไฟล์ ไว้ในตัวเเปร CommandArray ในรูปเบบ JSON

            console.log('[Loading commands]', file .yellow);
            continue;
        }
    }

    client.application.commands.set(commandsArray).then(() => console.log("-------Loaded Command Success-------" .green)) //set application command 
}

module.exports = { loadCommands }