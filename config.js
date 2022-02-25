/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '92872c80ec'',
}

// Other
global.owner = ['6282160268332','6282128485388','0']
global.packname = '\n\n\n\n\n\nBot\n\nStiker\n\nTercepat\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\nOne\n\nBot\n\nMulti\n\nDevice\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'melisah'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '✾'
global.mess = {
    success: '*✓ Success*',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Processing..*',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
